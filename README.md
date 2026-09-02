# 🤖 CodeMorph AI

> **AI-Powered Code Translation, Explanation, Optimization & Bug Detection Platform**

CodeMorph AI is an AI-powered developer platform built with **React and Google Gemini AI** that helps developers transform, understand, optimize, and debug source code using artificial intelligence.

The application provides dedicated tools for **code conversion, code explanation, code optimization, and bug detection** through a modern, responsive, developer-focused interface.

---

## 🚀 Live Demo

**Live Application:** Coming Soon

> Deployment to Vercel is planned as part of the project's final deployment phase.

---

## 📌 Project Overview

CodeMorph AI is designed to simplify common developer tasks by combining a modern **React interface** with **Google Gemini AI**.

Instead of manually performing repetitive code-related tasks, developers can use CodeMorph AI to:

- 🔄 Convert code between programming languages
- 🧠 Understand unfamiliar code
- ⚡ Improve code quality and maintainability
- 🐛 Detect potential bugs and receive suggested fixes

The application follows a **modular architecture**, where each AI capability is implemented as an independent feature.

---

# ✨ Features

## 🔄 AI Code Converter

Convert source code from one programming language to another using Gemini AI.

### Supported Languages

- Python
- Java
- JavaScript
- TypeScript
- C
- C++
- C#
- Go
- Rust
- Kotlin
- Swift
- PHP
- Ruby

### Converter Features

- Source language selection
- Target language selection
- Code editor
- AI-powered conversion
- Converted code output
- Copy converted code
- Download converted code
- Clear workspace
- Swap languages and code
- Code statistics
- Source vs. converted code comparison
- Loading states
- Error handling

---

## 🧠 AI Code Explainer

Understand source code with structured, AI-generated explanations.

The Code Explainer provides:

1. **Overall Summary**
2. **Line-by-Line Explanation**
3. **Program Flow**
4. **Beginner Explanation**
5. **Advanced Explanation**

### Additional Capabilities

- Multiple programming language support
- Markdown rendering
- Explanation tabs
- Copy explanation
- Download explanation
- Loading states
- Error handling

---

## ⚡ AI Code Optimizer

Improve source code using Gemini AI.

The optimizer provides structured results including:

- Optimized Code
- Performance Improvements
- Readability Improvements
- Maintainability Improvements
- Best Practices
- Potential Issues

### Additional Features

- Original vs. optimized code comparison
- Optimization statistics
- Copy optimized code
- Download optimized code
- Loading states
- Error handling

---

## 🐛 AI Bug Detector

Analyze source code for potential programming issues.

The Bug Detector checks for:

- Syntax issues
- Logic problems
- Runtime issues
- Undefined variables
- Function usage problems
- Type-related issues
- Null/undefined problems
- Control-flow issues
- Edge cases
- Security concerns
- Performance concerns

### Issue Severity

Detected issues are categorized by severity:

- 🔴 Critical
- 🟠 High
- 🟡 Medium
- 🟢 Low

### Bug Detection Features

- Bug summary
- Detailed bug cards
- Line references
- Issue descriptions
- Suggested fixes
- Corrected code
- Copy corrected code
- Download corrected code
- AI response validation
- Loading states
- Error handling

---

# 🎨 User Interface

CodeMorph AI provides a modern, developer-focused interface with:

- 🌙 Dark Mode
- ☀️ Light Mode
- 📱 Responsive Design
- 📑 Sidebar Navigation
- 🧭 Responsive Navbar
- 💻 Code Editors
- 🧩 Reusable Cards
- ⏳ Loading Indicators
- 📊 Status Bars
- 🔔 Toast Notifications
- 📝 Markdown Rendering
- 📐 Responsive Layouts

The interface is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 📄 About & Contact

The application includes an **About** page containing:

- Project information
- Project overview
- Project details
- Developer profile
- Programming skills
- Portfolio links
- GitHub
- LinkedIn
- Contact information

---

# 🛠️ Technology Stack

## Frontend

- **React 19**
- **Vite**
- **JavaScript ES6+**
- **React Router DOM**
- **Context API**
- **CSS3**
- **Responsive Design**

## 🤖 AI

- **Google Gemini AI**
- `@google/generative-ai`

## 🎨 UI & Utilities

- React Icons
- React Hot Toast
- Monaco Editor
- Markdown Rendering

## 🧰 Development & Deployment

- Node.js
- npm
- Git
- GitHub
- Vercel

---

# 🏗️ Project Architecture

CodeMorph AI follows a modular React architecture that separates UI components, pages, AI services, utilities, configuration, and application state.

```text
codemorph-ai/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── logos/
│   │
│   ├── components/
│   │   ├── about/
│   │   ├── bug-detector/
│   │   ├── common/
│   │   ├── converter/
│   │   ├── editor/
│   │   ├── explain/
│   │   ├── layout/
│   │   ├── optimizer/
│   │   └── settings/
│   │
│   ├── config/
│   │   ├── aiConfig.js
│   │   └── index.js
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── data/
│   │   ├── languages.js
│   │   └── navigation.js
│   │
│   ├── hooks/
│   │   └── useGemini.js
│   │
│   ├── pages/
│   │   ├── About/
│   │   ├── BugDetector/
│   │   ├── Converter/
│   │   ├── Explain/
│   │   ├── Home/
│   │   ├── NotFound/
│   │   ├── Optimizer/
│   │   └── Settings/
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── services/
│   │   ├── aiResponseParser.js
│   │   ├── gemini.js
│   │   ├── prompts.js
│   │   └── retry.js
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── theme.css
│   │   └── variables.css
│   │
│   ├── utils/
│   │   ├── aiErrors.js
│   │   ├── bugParser.js
│   │   ├── converter.js
│   │   ├── copy.js
│   │   ├── download.js
│   │   ├── editor.js
│   │   └── explanationParser.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 🔄 Application Flow

The core AI features follow a common processing architecture:

```text
                    ┌─────────────────────┐
                    │     CodeMorph AI    │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
      Code Converter    Code Explainer    Code Optimizer
             │                 │                 │
             └─────────────────┼─────────────────┘
                               │
                               ▼
                     ┌──────────────────┐
                     │   Gemini AI      │
                     │     Service      │
                     └────────┬─────────┘
                              │
                              ▼
                       AI Response
                              │
                              ▼
                    Response Processing
                              │
                              ▼
                     Structured Output
```

### 🐛 Bug Detection Flow

Bug Detection follows a similar Gemini-powered architecture:

```text
Code Input
    ↓
Bug Detection Prompt
    ↓
Gemini AI
    ↓
JSON Response
    ↓
Bug Response Parser
    ↓
Bug Summary + Issues + Corrected Code
```

---

# 🔐 Environment Variables

CodeMorph AI requires a **Gemini API key**.

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

A template is provided through:

```text
.env.example
```

The example file contains:

```env
VITE_GEMINI_API_KEY=
```

## 🔒 Security

**Never commit your actual `.env` file to GitHub.**

The project `.gitignore` protects environment files:

```gitignore
.env
.env.*
!.env.example
```

---

# 📦 Installation

## 1. Clone the Repository

```bash
git clone <your-repository-url>
```

## 2. Navigate to the Project

```bash
cd codemorph-ai
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Configure Environment Variables

Create a `.env` file:

```text
.env
```

Add your Gemini API key:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

## 5. Start the Development Server

```bash
npm run dev
```

The application will be available at the local Vite development URL displayed in the terminal.

---

# 🏭 Production Build

Create a production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

# 🧪 Testing Checklist

Before deployment, verify the following.

## Navigation

- [ ] Home
- [ ] Converter
- [ ] Explain
- [ ] Optimizer
- [ ] Bug Detector
- [ ] Settings
- [ ] About
- [ ] Not Found

## 🤖 AI Features

- [ ] Code Conversion
- [ ] Code Explanation
- [ ] Code Optimization
- [ ] Bug Detection

## 🎨 UI

- [ ] Dark Mode
- [ ] Light Mode
- [ ] Sidebar
- [ ] Navbar
- [ ] Responsive Layouts
- [ ] Code Editors
- [ ] Buttons
- [ ] Toast Notifications
- [ ] Loading States
- [ ] Error States

---

# 📊 Project Development Phases

| Phase    | Description                | Status         |
| -------- | -------------------------- | -------------- |
| Phase 1  | Project Setup & Foundation | ✅ Completed   |
| Phase 2  | Routing & Layout           | ✅ Completed   |
| Phase 3  | Core UI Components         | ✅ Completed   |
| Phase 4  | Gemini AI Integration      | ✅ Completed   |
| Phase 5  | AI Code Converter          | ✅ Completed   |
| Phase 6  | AI Code Explainer          | ✅ Completed   |
| Phase 7  | AI Code Optimizer          | ✅ Completed   |
| Phase 8  | AI Bug Detector            | ✅ Completed   |
| Phase 9  | About / Contact            | ✅ Completed   |
| Phase 10 | Application Optimization   | ✅ Completed   |
| Phase 11 | Testing & Bug Fixing       | ✅ Completed   |
| Phase 12 | Production Preparation     | ✅ Completed   |
| Phase 13 | Vercel Deployment          | 🔄 In Progress |
| Phase 14 | GitHub Documentation       | ⏳ Upcoming    |
| Phase 15 | Final Project Showcase     | ⏳ Upcoming    |

---

# 🚫 Removed Features

The project scope was intentionally refined during development.

The following modules are **not part of the final CodeMorph AI application**:

- Code Documentation Generator
- Code Complexity Analyzer
- Code History & Management
- Favorites & Recently Used
- Dashboard & Statistics

Removing these modules keeps the application focused on its **four core AI capabilities**:

1. AI Code Converter
2. AI Code Explainer
3. AI Code Optimizer
4. AI Bug Detector

---

# 👨‍💻 Developer

## Epuri Charan Teja

**Aspiring React Developer**

CodeMorph AI is developed as an AI-integrated developer productivity project focused on practical applications of **React and Generative AI**.

### 🌐 Portfolio

https://charan-react-portfolio.vercel.app

### 💻 GitHub

https://github.com/charanepuri

### 🔗 LinkedIn

https://www.linkedin.com/in/charan-teja-972aa9231

---

# 📁 Repository

**Repository:** CodeMorph AI

The GitHub repository contains the complete source code, configuration, documentation, and development history of the project.

---

# 📜 License

This project is created for **educational, portfolio, and demonstration purposes**.

---

# ❤️ Acknowledgements

Special thanks to the technologies and libraries used to build CodeMorph AI:

- React
- Vite
- Google Gemini AI
- React Router
- React Icons
- React Hot Toast
- Monaco Editor

---

# ⭐ Project Status

**Status:** Production Ready

**Current Phase:** Phase 13 — Vercel Deployment

CodeMorph AI has completed:

- ✅ Core development
- ✅ AI feature implementation
- ✅ Application optimization
- ✅ Testing and bug fixing
- ✅ Production preparation

The next step is deploying the application to **Vercel**.

---

<div align="center">

## 🤖 CodeMorph AI

**Translate • Explain • Optimize • Debug**

Made with ❤️ by **Epuri Charan Teja**

</div>
