# Wizard's Portfolio

A modern, responsive developer portfolio website showcasing skills, projects, and contact information.

## 🌐 Live Demo

Visit the live website: [https://wizards-portfolio.vercel.app/](https://wizards-portfolio.vercel.app/)

## 📋 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Navigation**: Smooth scrolling between sections
- **Dynamic Typing Effect**: Animated text using Typed.js library
- **Interactive Buttons**: Hover effects and smooth transitions
- **Multiple Sections**:
  - Home/Hero section with introduction
  - About Me section
  - Skills & Interests showcase
  - Projects portfolio
  - Contact information with social links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with modern features
  - Flexbox for layouts
  - CSS Grid
  - Media queries for responsiveness
  - Smooth transitions and hover effects
- **JavaScript**: 
  - Typed.js for dynamic text animation
- **External Libraries**:
  - Google Fonts (Poppins)
  - Typed.js for text animation

## 📁 Project Structure

```
Wizards-Portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── Wizards.png         # Profile image
├── asset/
│   └── Abhiraj_Resume.pdf  # Resume PDF
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment workflow
└── README.md           # This file
```

## 🚀 Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions.

### Deployment Process

1. Push changes to the `main` branch
2. GitHub Actions workflow automatically triggers
3. Website is built and deployed to GitHub Pages
4. Site is live at: https://abhirajsinghrajpoot.github.io/Wizards-Portfolio/

### Manual Deployment

You can also trigger deployment manually:
1. Go to the "Actions" tab in the GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## 💻 Local Development

To run this website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/AbhirajSinghrajpoot/Wizards-Portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Wizards-Portfolio
   ```

3. Open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

   Or use a local server (recommended):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```

4. Visit `http://localhost:8000` in your browser

## 🎨 Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the content in `index.html`
   - Change name, title, and descriptions
   - Update skills and projects
   - Modify contact information

2. **Styling**: Edit `style.css`
   - Change colors (search for color values)
   - Modify fonts
   - Adjust spacing and layout

3. **Images**: Replace files in the root and `asset/` directory
   - Profile image: `Wizards.png`
   - Resume: `asset/Abhiraj_Resume.pdf`

4. **Links**: Update all external links
   - GitHub profile
   - LinkedIn profile
   - Email addresses

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 600px - 992px
- **Mobile**: 360px - 600px
- **Small Mobile**: < 360px

## 🔗 Connect

- **Email**: [abhirajsingh2k5@gmail.com](mailto:abhirajsingh2k5@gmail.com)
- **LinkedIn**: [Abhiraj Singh Rajpoot](https://www.linkedin.com/in/abhiraj-singh-rajpoot-7133a9349)
- **GitHub**: [@AbhirajSinghrajpoot](https://github.com/AbhirajSinghrajpoot)

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

- Font: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- Animation: [Typed.js](https://github.com/mattboldt/typed.js/)

---

**© 2024 Wizard's Portfolio. All rights reserved.**

Made with ❤️ by Wizard
