# Delage Mécanique Inc. - Replit Project Guide

## Overview

This is a professional automotive service website for Delage Mécanique Inc., a Quebec-based auto repair garage. The application is built as a modern, responsive single-page application with a French-language interface. It features a multi-page structure showcasing the business's services, portfolio, team information, and contact capabilities.

The website emphasizes trust-building through professional design, smooth animations, and clear communication of automotive expertise. Key features include an image carousel on the homepage, service cards with detailed descriptions, a photo gallery with lightbox functionality, and a contact form for customer inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (alternative to React Router)
- Single-page application (SPA) architecture with client-side navigation

**UI Component System**
- Shadcn UI component library (New York style variant) providing pre-built, accessible components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for managing component variants
- Custom design system with defined typography (Montserrat/Open Sans), spacing primitives, and color schemes

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management, caching, and data synchronization
- React Hook Form with Zod resolvers for form state and validation
- Local component state using React hooks

**Animation & User Experience**
- Custom scroll-based animations (parallax, fade-in, slide-in effects)
- Image carousel with auto-advance and manual navigation
- Intersection Observer API for triggering animations on scroll
- Animated counters for statistics display
- Lightbox gallery with image enlargement and navigation

### Backend Architecture

**Server Framework**
- Express.js server running on Node.js
- TypeScript for type safety across the entire stack
- Modular route registration system separating concerns
- Custom middleware for request logging and JSON body parsing

**API Structure**
- RESTful API endpoints under `/api` prefix
- Contact form submission endpoint (`POST /api/contact`)
- Admin endpoint for retrieving contact messages (`GET /api/contact`)
- JSON request/response format with Zod schema validation

**Development Environment**
- Vite middleware integration for development hot reloading
- Separate build process for client (Vite) and server (esbuild)
- Environment-aware configuration (NODE_ENV)
- Replit-specific plugins for error overlay and development tools

**Data Storage Strategy**
- In-memory storage implementation (`MemStorage` class) for development/prototyping
- Storage abstraction interface (`IStorage`) allowing future database integration
- Contact messages stored with UUID identifiers and timestamps
- Schema-first approach with Drizzle ORM definitions ready for PostgreSQL migration

### External Dependencies

**Database**
- Drizzle ORM configured for PostgreSQL (schema defined, not actively connected)
- Neon Serverless PostgreSQL driver for edge-compatible database connections
- Schema includes `contact_messages` table with id, name, email, phone, message, and timestamp fields
- Migration system configured via Drizzle Kit

**UI & Component Libraries**
- Radix UI: Comprehensive set of unstyled, accessible component primitives (accordion, dialog, dropdown, popover, etc.)
- Embla Carousel: Lightweight carousel library for hero section image rotation
- Lucide React: Icon library for consistent iconography throughout the application
- CMDK: Command palette component (installed but not actively used)
- Date-fns: Date manipulation and formatting utilities

**Form & Validation**
- React Hook Form: Performant form state management with minimal re-renders
- Zod: TypeScript-first schema validation library
- @hookform/resolvers: Integration layer between React Hook Form and Zod
- Drizzle-Zod: Automatic Zod schema generation from Drizzle ORM table definitions

**Styling & Design**
- Tailwind CSS: Utility-first CSS framework
- Tailwind Merge: Utility for merging Tailwind class names intelligently
- PostCSS with Autoprefixer: CSS processing pipeline
- Google Fonts: Montserrat and Open Sans font families (referenced but not installed via package)

**Development Tools**
- TypeScript: Static type checking across client and server code
- TSX: TypeScript execution for development server
- Esbuild: Fast JavaScript bundler for production server build
- Replit development plugins: Runtime error modal, code cartographer, development banner

**Path Aliases**
- `@/`: Points to `client/src/` for client-side code
- `@shared/`: Points to `shared/` for code shared between client and server
- `@assets/`: Points to `attached_assets/` for static assets and generated images