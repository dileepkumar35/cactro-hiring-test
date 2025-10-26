# 3D Portfolio Website

A stunning 3D interactive portfolio website built with React, Three.js, and Framer Motion.

## Features

- 🎨 **3D Animations** - Interactive 3D graphics using Three.js
- 🌟 **Modern UI/UX** - Smooth animations with Framer Motion
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎯 **Sections Include**:
  - Hero section with 3D computer model
  - About section with service cards
  - Work experience timeline
  - Tech stack showcase
  - Projects portfolio
  - Contact form with 3D Earth model
  - Animated starfield background

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Your Information

Edit `src/constants/index.js` to customize:
- Navigation links
- Services/Skills
- Technologies
- Work experience
- Projects

### Update Personal Details

In `src/components/Hero.jsx`, update your name and tagline.

### Configure Contact Form

To enable the contact form:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update `src/components/Contact.jsx` with your credentials

## Build for Production

```bash
npm run build
```

## Deployment

### Deploy to Netlify

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Build your project:
```bash
npm run build
```

4. Deploy:
```bash
netlify deploy --prod
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## Technologies Used

- React
- Three.js (@react-three/fiber, @react-three/drei)
- Framer Motion
- Tailwind CSS
- React Router
- EmailJS

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues and questions, please open an issue in the repository.
