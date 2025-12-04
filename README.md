# Dermatopath Master

A mobile-first, dark-mode, offline-ready educational platform for teaching pattern-based dermatopathology to pathology residents and fellows.

## 🎯 Purpose

**Dermatopath Master** is designed to teach:
- How to approach a skin biopsy
- Pattern-based dermatopathology (the core of residency learning)
- Epidermal, dermal, and subcutaneous architectural patterns
- Inflammatory dermatoses (eczematous → lichenoid → psoriasiform → vesiculobullous → granulomatous → panniculitis)
- Benign vs malignant melanocytic lesions
- Keratinocytic neoplasms (AK/SCC/BCC)
- Adnexal tumors (high-yield frameworks)
- Immunofluorescence conceptual interpretation
- Special stains & IHC (high-level, conceptual)
- Common pitfalls and diagnostic challenges

## ⚠️ Important Disclaimers

### Educational Use Only
This application is designed **exclusively for educational purposes**. It is intended to help pathology residents and fellows learn pattern-based dermatopathology concepts.

### NOT for Clinical Diagnosis
This app is **NOT** intended for use in actual patient care or clinical diagnosis. All cases, scenarios, and content are synthetic and conceptual. **Never use this app to make clinical decisions or diagnoses.**

### No PHI or Patient Data
All content is synthetic and educational. No patient health information (PHI) or real patient data is used.

### No Data Tracking
This app does not track, store, or export user data. Assessment scores are session-only and are not saved.

## 🚀 Features

- **Mobile-First Design**: Optimized for learning on any device
- **Dark Mode First**: Easy on the eyes during long study sessions
- **Offline Ready**: Progressive Web App (PWA) with service worker support
- **Pattern-Based Learning**: Follows the algorithmic approach used in residency training
- **Comprehensive Coverage**: 10 major modules covering all aspects of dermatopathology
- **Interactive Cases**: Practice with synthetic case presentations
- **Self-Assessment**: Test your knowledge with session-only scoring
- **No Tracking**: Complete privacy - no user data collected or stored

## 📚 Modules

1. **Foundations** - Skin biopsy basics and normal histology
2. **Inflammatory Patterns** - Spongiotic, psoriasiform, lichenoid, vesiculobullous, granulomatous, panniculitis
3. **Melanocytic Lesions** - Nevi, dysplastic nevi, melanoma
4. **Keratinocytic Lesions** - AK, SCC, BCC, keratoacanthoma
5. **Adnexal Tumors** - Sebaceous, sweat gland, follicular tumors
6. **Soft Tissue Mimics** - DF, DFSP, AFX, Kaposi sarcoma
7. **DIF Concepts** - Immunofluorescence patterns (conceptual)
8. **IHC Concepts** - Immunohistochemistry markers (conceptual)
9. **Pitfalls** - Common diagnostic challenges
10. **Integrated Cases** - Pattern-based case studies

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: Zustand (session-only)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **PWA**: vite-plugin-pwa with Workbox
- **Offline Support**: Service Workers

## 🏃 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app will be available at `http://localhost:5173` when running the dev server.

### Building

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 📱 Progressive Web App

This app is a Progressive Web App (PWA) and can be installed on mobile devices and desktops:

1. Open the app in a browser
2. Look for the "Install" or "Add to Home Screen" prompt
3. Follow the installation instructions
4. The app will work offline after installation

## 🎨 Key Design Decisions

### No Data Persistence
- All user interactions are session-only
- No localStorage, IndexedDB, or server storage
- Assessment scores displayed only during active session
- Complete privacy and HIPAA compliance

### Dark Mode First
- Default theme is dark mode for reduced eye strain
- Optimized for long study sessions
- Toggle available in settings

### Pattern-Based Organization
- Content structured around diagnostic patterns
- Mirrors the approach taught in pathology residency
- Algorithmic thinking emphasized throughout

### Educational Only
- No real patient images or PHI
- All content is synthetic and conceptual
- Strict disclaimers throughout the app

## 🔐 Privacy

- No user accounts or authentication
- No personal data collection
- No analytics or tracking
- All processing happens locally
- Service workers only for offline caching

## 📖 Educational Approach

The app follows the systematic approach to dermatopathology:

1. **Identify primary pattern** at low power
2. **Evaluate epidermal clues**
3. **Assess dermal infiltrate**
4. **Identify cell types**
5. **Look for special features**
6. **Consider ancillary studies** (conceptually)
7. **Build differential diagnosis**

## 🤝 Contributing

This is an educational project. Contributions should maintain the educational focus and privacy-first approach.

## 📄 License

This project is created for educational purposes only.

## ⚖️ Legal

All content is synthetic and for educational use only. Not for clinical diagnosis or patient care. No warranty expressed or implied. Users accept full responsibility for their own learning and clinical practice.

---

**Remember**: This app is a learning tool, not a diagnostic tool. Always consult standard textbooks, peer-reviewed literature, and expert consultation for authoritative information. Pathology training requires hands-on microscopy and expert supervision.
