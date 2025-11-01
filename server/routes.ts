import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json(message);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          message: "Données invalides",
          errors: error.errors,
        });
      }
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
