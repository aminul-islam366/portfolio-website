# AMIN - Full Stack Developer Portfolio

A modern, responsive portfolio website built with **Vite + React.js**, **Tailwind CSS**, and **Framer Motion** animations.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive Layout**: Fully responsive across all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **Lightning Fast**: Powered by Vite for instant HMR and optimized builds
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Vite** - Next generation frontend tooling
- **React.js** - Frontend framework (.jsx components)
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Font Awesome** - Additional icons
- **Google Fonts** - Typography (Inter font family)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/AMIN-portfolio.git
cd AMIN-portfolio
```

2. **Install dependencies:**

```bash
npm install
```

3. **Install recommended VS Code extensions:**
   - Open VS Code in the project directory
   - VS Code will automatically suggest installing recommended extensions
   - Or install manually:
     - Tailwind CSS IntelliSense
     - Prettier - Code formatter
     - ESLint

4. **Start the development server:**

```bash
npm run dev
```

5. **Open your browser:**
   - Navigate to `http://localhost:5173/` (or the port shown in terminal)

## 🛠️ VS Code Setup for Tailwind IntelliSense

This project is configured for optimal VS Code experience with Tailwind CSS:

### ✅ **What's Included:**

- **`.vscode/settings.json`** - Tailwind IntelliSense configuration
- **`.vscode/extensions.json`** - Recommended extensions
- **`jsconfig.json`** - JavaScript project configuration
- **`tailwind.config.js`** - Tailwind configuration with proper content paths

### 🎯 **Features You'll Get:**

- **Autocomplete** - Tailwind class suggestions as you type
- **Color previews** - See actual colors next to color classes
- **Hover information** - CSS properties on hover
- **Class validation** - Warnings for unknown classes
- **Auto-formatting** - Prettier integration

### 🔧 **If IntelliSense Isn't Working:**

1. Install the **Tailwind CSS IntelliSense** extension
2. Restart VS Code
3. Ensure you're in a `.jsx` file
4. Try `Ctrl+Shift+P` → "Developer: Reload Window"

## 🏗️ Build for Production

```bash
npm run build
```

This builds the app for production to the `dist` folder.

## 🔍 Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation component
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About section
│   ├── Skills.jsx         # Skills section
│   ├── Projects.jsx       # Projects showcase
│   ├── Testimonials.jsx   # Client testimonials
│   ├── Contact.jsx        # Contact form
│   └── Footer.jsx         # Footer component
├── App.jsx                # Main app component
├── main.jsx              # Vite entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: "#A855F7",        // Purple
  secondary: "#EC4899",      // Pink
  "background-light": "#F3F4F6",
  "background-dark": "#0F0518",
  // ... more colors
}
```

### Animations

Framer Motion animations are configured in each component. You can customize:

- Animation duration
- Easing functions
- Stagger delays
- Hover effects

### Content

Update the content in each component file:

- Personal information in `Hero.jsx` and `About.jsx`
- Skills in `Skills.jsx`
- Projects in `Projects.jsx`
- Testimonials in `Testimonials.jsx`
- Contact information in `Contact.jsx`

## 🌟 Key Features Breakdown

### Hero Section

- Animated text with gradient effects
- Floating tech icons with physics-based animations
- Interactive profile image with hover effects
- Call-to-action button with glow effects

### About Section

- Animated profile image with rotating border
- Statistics cards with hover animations
- Technology stack showcase
- Social media links

### Skills Section

- Categorized skill display
- Interactive skill cards
- Progress bars with animated fill
- Hover effects and micro-interactions

### Projects Section

- Project cards with image overlays
- Technology tags
- Hover animations and scaling effects
- Live demo and code links

### Contact Section

- Interactive contact form
- Animated form validation
- Contact information cards
- Gradient border effects

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎭 Animations

### Framer Motion Features Used:

- **Initial/Animate**: Entry animations
- **WhileHover**: Hover state animations
- **WhileInView**: Scroll-triggered animations
- **Stagger**: Sequential animations
- **Spring**: Physics-based animations
- **Variants**: Reusable animation configurations

## 🔧 Available Scripts

- `npm run dev` - Starts the Vite development server
- `npm run build` - Builds for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deployment

The project can be deployed to various platforms:

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist folder to Netlify
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## ⚡ Vite Benefits

- **Instant Server Start**: No bundling required in development
- **Lightning Fast HMR**: Hot Module Replacement that stays fast regardless of app size
- **Rich Features**: Out-of-the-box support for TypeScript, JSX, CSS and more
- **Optimized Build**: Uses Rollup for production builds
- **Universal Plugin Interface**: Rollup-superset plugin interface shared between dev and build

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

AMIN - [waminbroo@gmail.com](mailto:waminbroo@gmail.com)

Project Link: [https://github.com/yourusername/AMIN-portfolio](https://github.com/yourusername/AMIN-portfolio)

---

⭐ Star this repo if you found it helpful!
