# 📝 Resume Data Customization Guide

## How to Add Your Resume Information

Since I couldn't access your PDF directly, I've created a template portfolio. Follow this guide to add your actual resume information.

---

## 1. Personal Information

### File: `src/components/Hero.jsx` (Line 21-26)

**Current:**
```javascript
<h1 className={`${styles.heroHeadText} text-white`}>
  Hi, I'm <span className='text-[#915EFF]'>Your Name</span>
</h1>
<p className={`${styles.heroSubText} mt-2 text-white-100`}>
  I develop 3D visuals, user <br className='sm:block hidden' />
  interfaces and web applications
</p>
```

**Replace with:**
- Your actual name
- Your professional title/tagline
- Brief description of what you do

---

## 2. About Section

### File: `src/components/About.jsx` (Lines 41-50)

**Update the introduction text** to match your background:
```javascript
I'm a skilled software developer with experience in JavaScript,
and expertise in frameworks like React, Node.js, and
Three.js...
```

**And update the services array in `src/constants/index.js`:**
```javascript
const services = [
  { title: "Your Role 1", icon: "🌐" },
  { title: "Your Role 2", icon: "⚛️" },
  { title: "Your Role 3", icon: "🔧" },
  { title: "Your Role 4", icon: "💻" },
];
```

---

## 3. Work Experience

### File: `src/constants/index.js` (Lines 82-135)

**Replace the template experiences with YOUR actual work history:**

```javascript
const experiences = [
  {
    title: "Your Job Title",
    company_name: "Company Name",
    icon: "💼", // Choose an emoji
    iconBg: "#383E56", // Background color
    date: "Jan 2023 - Present",
    points: [
      "What you did in this role...",
      "Your achievements and responsibilities...",
      "Technologies you used...",
      "Impact you made...",
    ],
  },
  // Add more experiences...
];
```

**Tips:**
- List experiences in reverse chronological order (newest first)
- Use action verbs (Developed, Implemented, Led, etc.)
- Include specific achievements and metrics
- Mention technologies and tools used

---

## 4. Technical Skills

### File: `src/constants/index.js` (Lines 32-80)

**Update with your actual tech stack:**

```javascript
const technologies = [
  { name: "Technology 1", icon: "🌟" },
  { name: "Technology 2", icon: "🎨" },
  // Add all technologies from your resume
];
```

**Common Technology Emojis:**
- HTML/CSS: 🌟 or 🎨
- JavaScript: ⚡
- React: ⚛️
- Node.js: 🟢
- Python: 🐍
- Java: ☕
- Database: 🗄️ or 🍃
- Git: 📦
- Docker: 🐳
- AWS/Cloud: ☁️
- Mobile: 📱

---

## 5. Projects

### File: `src/constants/index.js` (Lines 137-185)

**Add your actual projects:**

```javascript
const projects = [
  {
    name: "Your Project Name",
    description: "2-3 sentences describing what the project does, its purpose, and key features.",
    tags: [
      { name: "tech1", color: "blue-text-gradient" },
      { name: "tech2", color: "green-text-gradient" },
      { name: "tech3", color: "pink-text-gradient" },
    ],
    image: "🎨", // Choose an appropriate emoji
    source_code_link: "https://github.com/yourusername/project",
  },
  // Add 3-5 of your best projects
];
```

**Available gradient colors:**
- `blue-text-gradient`
- `green-text-gradient`
- `pink-text-gradient`
- `orange-text-gradient`

**Project Selection Tips:**
- Choose 3-5 of your best projects
- Include diverse projects showing different skills
- Add links to live demos or GitHub repos
- Highlight impact and results

---

## 6. Contact Information

### File: `src/components/Contact.jsx`

**To enable the contact form:**

1. **Sign up for EmailJS (FREE):**
   - Go to https://www.emailjs.com/
   - Create an account
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template

2. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key

3. **Update the code (lines 29-44):**

```javascript
// UNCOMMENT and UPDATE this code:
emailjs
  .send(
    'YOUR_SERVICE_ID',        // Replace with your Service ID
    'YOUR_TEMPLATE_ID',       // Replace with your Template ID
    {
      from_name: form.name,
      to_name: "Your Name",   // Your name
      from_email: form.email,
      to_email: "your.email@example.com", // Your email
      message: form.message,
    },
    'YOUR_PUBLIC_KEY'         // Replace with your Public Key
  )
  .then(...)
```

4. **Comment out or remove the demo timeout (lines 46-53)**

---

## 7. Page Metadata

### File: `public/index.html` (Lines 8-11)

**Update:**
```html
<meta name="description" content="Your Name - Full Stack Developer Portfolio" />
<title>Your Name | Portfolio</title>
```

---

## 8. Navigation Links

### File: `src/constants/index.js` (Lines 1-13)

**Update if you want different sections:**
```javascript
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" }, // Can rename to "Experience"
  { id: "contact", title: "Contact" },
  // Add more sections if needed
];
```

---

## 📋 Checklist

Use this checklist to track your customization progress:

- [ ] Updated name in Hero section
- [ ] Updated professional tagline
- [ ] Updated About section description
- [ ] Added my services/roles
- [ ] Listed all my technical skills
- [ ] Added all work experiences
- [ ] Added 3-5 projects with details
- [ ] Configured EmailJS for contact form
- [ ] Updated page title and meta description
- [ ] Tested all sections on the website
- [ ] Reviewed for typos and errors

---

## 🎨 Style Customization (Optional)

### Change Color Scheme

**File: `tailwind.config.js`**

```javascript
colors: {
  primary: "#050816",    // Dark background
  secondary: "#aaa6c3",  // Text color
  tertiary: "#151030",   // Card backgrounds
},
```

### Change Accent Color

Look for `#915EFF` (purple) throughout the code and replace with your preferred color:
- `src/components/Hero.jsx`
- `src/components/canvas/Computers.jsx`
- Other component files

---

## 💡 Pro Tips

1. **Be Concise:** Keep descriptions clear and impactful
2. **Show Results:** Include metrics and achievements
3. **Keep Updated:** Update your portfolio as you complete new projects
4. **Test Everything:** Check all links work correctly
5. **Mobile First:** Test on different screen sizes

---

## 🚀 After Customization

1. Review everything in the browser
2. Test on mobile devices
3. Run `npm run build` to create production build
4. Deploy using Netlify, Vercel, or GitHub Pages
5. Share your portfolio with the world!

---

## ❓ Need Help?

- Check `QUICK_START.md` for general instructions
- See `DEPLOYMENT_GUIDE.html` for deployment steps
- Review `README.md` for technical details

**Your 3D portfolio is waiting to showcase your amazing work! 🌟**
