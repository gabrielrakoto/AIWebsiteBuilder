# Design Guidelines: Delage Mécanique Inc.

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional automotive service websites and modern business sites with a focus on trust-building and conversion. The design balances professionalism with approachability, using modern web design patterns that inspire confidence in automotive expertise.

## Typography System

**Primary Font**: Montserrat (Google Fonts) - Modern, professional, excellent readability
- Headings (H1): 3xl to 5xl, font-weight 700, leading tight
- Headings (H2-H3): xl to 3xl, font-weight 600-700
- Body Text: base to lg, font-weight 400, leading relaxed
- Buttons/CTAs: base to lg, font-weight 600, uppercase tracking wide

**Secondary Font**: Open Sans (Google Fonts) - For body content and descriptions
- Paragraphs: base, font-weight 400, leading relaxed
- Small Text/Labels: sm, font-weight 400-500

## Layout System

**Spacing Primitives**: Use Tailwind spacing units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Card spacing: p-6 to p-8
- Grid gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8, mb-12

**Container System**:
- Max-width: max-w-7xl for main content sections
- Full-width for hero and background sections
- Grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 for cards

## Component Library

### Navigation Header
- Fixed position with backdrop blur on scroll
- Logo left-aligned, navigation center/right on desktop
- Phone number prominently displayed as CTA button
- Hamburger menu (mobile): slide-in overlay with smooth transition
- Height: h-20 on desktop, h-16 on mobile

### Hero Section (Homepage)
- Full viewport height (min-h-screen) with carousel animation
- Large hero image showing automotive workshop/vehicles
- Centered content with logo, bold headline, and primary CTA
- Overlay gradient for text readability
- CTA button with blurred background (backdrop-blur-md, bg-white/20)

### Service Preview Cards (Homepage)
- 4 cards in responsive grid (1 col mobile, 2 cols tablet, 4 cols desktop)
- Each card: icon (top), title, teaser text, subtle arrow indicator
- Hover: lift effect (translate-y-1), shadow enhancement
- Icons: Use Heroicons via CDN, size 12-16
- Staggered fade-in animation on scroll

### Service Detail Cards (Services Page)
- 2x2 grid on desktop, stack on mobile/tablet
- Large icon at top (w-16 h-16), service title, detailed description
- Hover: subtle zoom (scale-105), border color shift
- Consistent padding: p-8

### Statistics Section (About Page)
- 3-4 columns of key metrics
- Large number display (text-4xl to text-6xl, font-bold)
- Animated counter effect on scroll into view
- Icon above each statistic
- Labels below in smaller text

### Gallery Grid (Réalisations Page)
- Masonry layout using CSS Grid
- 3-4 columns desktop, 2 columns tablet, 1 column mobile
- Images with aspect-ratio-square or aspect-ratio-video
- Hover: overlay with subtle zoom, view icon appears
- Lightbox modal on click: full-screen with close button, navigation arrows

### Contact Layout (Contact Page)
- Two-column split on desktop (60/40), stack on mobile
- Left column: contact information with icons, hours table
- Right column: embedded Google Maps iframe (rounded corners, h-96)
- Form below: full-width fields with floating labels
- Submit button: primary style with loading state

### Footer
- Three-column layout on desktop (company info, quick links, social/contact)
- Social media icons with hover effects
- Copyright text centered below
- Background with subtle contrast to main content
- Padding: py-12 to py-16

## Animations & Interactions

**Scroll Animations**:
- Fade-in: Opacity 0 to 1, translate-y-8 to 0
- Slide-in: Horizontal entry from left/right
- Stagger delay: 100-200ms between elements
- Trigger: Elements at 80% viewport visibility

**Hover States**:
- Cards: Elevate with shadow (shadow-md to shadow-xl)
- Buttons: Slight scale (scale-105), brightness increase
- Links: Underline animation, color shift
- Images: Zoom effect (scale-110) with overflow hidden

**Page Transitions**:
- Smooth fade between page loads
- Duration: 300-400ms
- Easing: ease-in-out

**Special Effects**:
- Hero carousel: Auto-advance every 5 seconds, smooth crossfade
- Statistic counters: Animate from 0 to target value over 2 seconds
- Back-to-top button: Fade in after 300px scroll, smooth scroll to top
- Contact form: Success/error message with slide-down animation

## Images

### Required Images:
1. **Hero Section (Homepage)**: Professional automotive workshop interior or mechanic working on vehicle - high-quality, wide shot, 1920x1080 minimum
2. **About Page**: Team photo or clean, organized workshop - conveys professionalism and expertise
3. **Gallery Page**: 9-12 images of completed work, vehicles serviced, before/after shots, close-ups of quality workmanship
4. **Service Cards**: Icon-based, no background images needed
5. **Background Textures**: Subtle automotive-themed patterns or gradients where appropriate

All images should be optimized, use lazy loading, and have appropriate alt text in French.

## Accessibility & Best Practices

- Minimum touch target: 44x44px for all interactive elements
- Color contrast: WCAG AA compliant (4.5:1 for text)
- Form labels: Always visible, associated with inputs
- Keyboard navigation: Full support with visible focus states
- Screen reader: Proper heading hierarchy, ARIA labels for icons
- Phone/email links: Clickable with appropriate protocols (tel:, mailto:)
- Language: lang="fr" on HTML element

## Mobile Optimization

- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly spacing: Larger tap targets, generous padding
- Hamburger menu: Full-screen overlay with large, easy-to-tap links
- Hero section: Reduced height on mobile (min-h-[60vh])
- Font scaling: Responsive typography with fluid sizing
- Form inputs: Large enough for mobile keyboards
- Contact info: Click-to-call and click-to-email functionality

This design creates a professional, trustworthy automotive service website that effectively communicates expertise while making it easy for customers to learn about services and make contact.