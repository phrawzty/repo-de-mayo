# SAST & SCA Security Analysis Guide

A modern, interactive web application that helps developers and security professionals understand Static Application Security Testing (SAST) and Software Composition Analysis (SCA).

## 🚀 Live Demo

Visit the live application: [https://yourusername.github.io/repo-de-mayo](https://yourusername.github.io/repo-de-mayo)

## 📋 Overview

This web application provides an interactive guide to understanding:

- **SAST (Static Application Security Testing)**: Analyzes your custom-written code for security vulnerabilities
- **SCA (Software Composition Analysis)**: Manages open-source and third-party dependencies
- **Tool Comparisons**: In-depth analysis of leading SAST and SCA tools
- **Integration Strategies**: Best practices for implementing both approaches

## ✨ Features

- **Interactive Navigation**: Smooth scrolling and responsive design
- **Comparative Analysis**: Side-by-side comparisons of SAST vs SCA
- **Tool Marketplace**: Detailed comparison of industry-leading tools
- **Mobile Responsive**: Works seamlessly on all devices
- **Modern UI**: Clean, professional design with smooth animations

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## 📚 Content Based On

This application is based on an expert analysis report covering:

- The "Shift-Left" security paradigm
- SAST technical implementation and challenges
- SCA workflow and best practices
- Tool landscape analysis (SonarQube, Checkmarx, Veracode, Sonatype, Snyk, JFrog)
- Integration strategies for DevSecOps

## 🏗️ Deployment

### GitHub Pages

1. Fork or clone this repository
2. Ensure the following files are in the root directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Go to your repository's Settings
4. Scroll down to "Pages" section
5. Select "Deploy from a branch"
6. Choose "main" branch and "/ (root)" folder
7. Click "Save"
8. Your site will be available at `https://yourusername.github.io/repository-name`

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   cd repository-name
   ```

2. Open `index.html` in your browser or serve with a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

3. Navigate to `http://localhost:8000`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Key Sections

### 1. Executive Overview
High-level introduction to SAST and SCA concepts with the business case for "shifting left."

### 2. SAST Deep Dive
- Technical implementation details
- Analysis engine workflow
- Benefits and challenges
- Tool comparison (SonarQube, Checkmarx, Veracode)

### 3. SCA Deep Dive
- Component identification process
- SBOM (Software Bill of Materials) generation
- Vulnerability management
- Tool comparison (Sonatype, Snyk, JFrog)

### 4. Comparison & Integration
- Interactive comparison tables
- Integration strategies
- Best practices for implementation

## 🔧 Customization

### Colors
The application uses a blue-based color scheme. To customize:
- Primary: `#3b82f6`
- Secondary: `#10b981`
- Background: `#f8fafc`

### Content
All content is easily editable in the `index.html` file. The structure is modular and semantic.

### Styling
The CSS is organized into logical sections:
- Reset and base styles
- Navigation
- Hero section
- Content sections
- Responsive breakpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [Mozilla Public License 2.0](LICENSE).

## 🙏 Acknowledgments

- Based on comprehensive security analysis research
- Icons provided by Font Awesome
- Typography by Google Fonts (Inter)
- Responsive design principles

## 📞 Contact

For questions or feedback about this educational resource, please open an issue in the repository.

---

**Note**: This is an educational tool designed to help understand SAST and SCA concepts. For production security implementations, always consult with security professionals and conduct thorough testing.