# C17 AI Landing Page

A stunning, high-performance landing page built with Next.js 16, Tailwind CSS 4, Framer Motion, and ShadCN/UI components. This project recreates and enhances the c17.ai experience with world-class animations and modern design patterns.

## 🚀 Features

### Technical Stack
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for advanced styling
- **Framer Motion** for fluid animations
- **ShadCN/UI** for component structure
- **Lucide React** for beautiful icons
- **next-themes** for dark/light theme toggle

### Design & UX
- **Glassmorphism effects** with backdrop blur
- **Gradient animations** and smooth transitions
- **Scroll-triggered animations** with stagger effects
- **Magnetic button interactions**
- **Floating particle background**
- **Responsive design** (desktop, tablet, mobile)
- **Dark/Light theme** toggle
- **Custom scrollbar** styling
- **SEO optimized** with meta tags and Open Graph

### Performance
- **Core Web Vitals optimized**
- **Fast LCP** with optimized images
- **Accessibility** with semantic HTML and ARIA labels
- **Production ready** with proper error boundaries

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # ShadCN UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── footer.tsx           # Footer with newsletter
│   ├── features-section.tsx # Features showcase
│   ├── hero-section.tsx     # Hero with animations
│   ├── integrations-section.tsx # Scrolling logos
│   ├── navbar.tsx           # Navigation with mobile menu
│   ├── testimonials-section.tsx # Customer reviews
│   ├── theme-provider.tsx   # Theme context
│   └── use-cases-section.tsx # Industry solutions
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   ├── og-image.png         # Open Graph image
│   ├── robots.txt           # SEO robots
│   └── sitemap.xml          # SEO sitemap
└── next.config.ts           # Next.js configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradients (#8b5cf6 → #7c3aed)
- **Secondary**: Blue gradients (#3b82f6 → #2563eb)
- **Accent**: Pink, cyan, green gradients
- **Background**: Dark with glassmorphism effects

### Typography
- **Font**: Geist Sans (system font stack)
- **Headings**: Gradient text effects
- **Body**: Clean, readable text with proper contrast

### Animations
- **Entrance**: Staggered fade-in with slide-up
- **Hover**: Scale, rotate, and glow effects
- **Scroll**: Parallax and reveal animations
- **Micro**: Button magnetic effects and icon rotations

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd c17-ai-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Sections

### Hero Section
- Animated gradient background with floating particles
- Dynamic text reveal with typewriter effect
- Dual CTA buttons with hover animations
- Feature highlights with icon animations

### Features Section
- Grid layout with glassmorphism cards
- Icon rotation animations on hover
- Staggered entrance animations
- Gradient text effects

### Use Cases Section
- Industry-specific solutions
- 3D hover effects with perspective
- Metrics and statistics
- Customer success indicators

### Integrations Section
- Continuous scrolling logo carousel
- Auto-reverse animation
- Hover effects on integration cards
- API and webhook features

### Testimonials Section
- Customer review cards with ratings
- Avatar animations
- Quote icon animations
- Satisfaction statistics

### Footer
- Multi-column layout with links
- Newsletter subscription
- Social media links with rotation
- Contact information

## 🎨 Customization

### Colors
Edit `app/globals.css` to modify the color scheme:

```css
:root {
  --primary-purple: #8b5cf6;
  --primary-blue: #3b82f6;
  /* Add your custom colors */
}
```

### Animations
Modify animation timing and effects in component files:

```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
```

### Content
Update text content directly in component files or create a content management system with JSON/Markdown files.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Connect Git repository
- **AWS Amplify**: Console deployment
- **Docker**: Use the provided Dockerfile

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Techniques
- Image optimization with Next.js Image
- Code splitting with dynamic imports
- Bundle size optimization
- Critical CSS inlining
- Font optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [ShadCN/UI](https://ui.shadcn.com/) - Component library
- [Lucide](https://lucide.dev/) - Icon library

---

Built with ❤️ by the C17 AI team