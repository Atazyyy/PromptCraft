# PromptCraft 🎨

![PromptCraft](https://img.shields.io/badge/PromptCraft-Learn%20AI%20Prompting-6366f1?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0-38b2ac?style=flat-square&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/Atazyyy/PromptCraft?style=flat-square)

> Platform pembelajaran interaktif untuk belajar Prompt Engineering dengan cara yang menyenangkan!

![Cover](public/cover.png)

## 🚀 Demo

**Live Demo:** [promptcraft.vercel.app](https://promptcraft.vercel.app)

## 🎯 Apa itu PromptCraft?

PromptCraft adalah web app edukasi yang membantu kamu menguasai **Prompt Engineering** — seni menyusun instruksi yang efektif untuk AI seperti Claude, GPT, dan Gemini.

Ditampilkan dalam pengalaman belajar yang interaktif dengan lessons, quiz, dan playground untuk latihan langsung.

## ✨ Fitur

### 📚 12 Lessons Interaktif
- Penjelasan materi dari dasar hingga lanjutan
- Contoh nyata Good vs Bad prompts
- Tips dan best practices
- Key takeaways di setiap lesson

### 📝 60+ Quiz Questions
- 5 pertanyaan per lesson
- Instant feedback dengan penjelasan
- Skor dan evaluasi otomatis
- Butuh 80% untuk lulus

### 🎨 Prompt Playground
- 16+ templates siap pakai
- Kategori: Starter, Social Media, Business, Creative, Analysis
- Save dan load prompts
- Copy ke clipboard

### 🏆 Gamification
- **XP System** — kumpulkan XP dari setiap aktivitas
- **Streak Counter** — belajar konsisten setiap hari
- **12 Achievements** — unlock achievements baru
- **Progress Tracking** — lacak perkembanganmu

### 🌙 Design
- Dark theme dengan gradient accents
- Smooth animations dengan Framer Motion
- Responsive untuk mobile, tablet, dan desktop
- UI/UX yang modern dan intuitif

## 📂 Daftar Lessons

| # | Judul | Level |
|---|-------|-------|
| 1 | Apa itu Prompt Engineering? | Beginner |
| 2 | Komponen Prompt yang Baik | Beginner |
| 3 | Be Specific & Clear | Beginner |
| 4 | Using Context & Examples | Beginner |
| 5 | Controlling Output Format | Intermediate |
| 6 | Chain of Thought Prompting | Intermediate |
| 7 | Few-Shot Prompting | Intermediate |
| 8 | System vs User Messages | Intermediate |
| 9 | Avoiding Hallucinations | Intermediate |
| 10 | Iterative Refinement | Intermediate |
| 11 | Prompt Patterns | Advanced |
| 12 | Building a Prompt Library | Advanced |

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **React Router** | Navigation |
| **Lucide React** | Icons |
| **localStorage** | Data Persistence |

## 🚀 Cara Menjalankan

### Local Development

```bash
# Clone repository
git clone https://github.com/Atazyyy/PromptCraft.git
cd PromptCraft

# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### Production Build

```bash
# Build untuk production
npm run build

# Preview production build
npm run preview
```

### Deploy ke Vercel (Gratis)

1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub
3. Klik "Add New Project"
4. Pilih repo **PromptCraft**
5. Klik "Deploy"

## 📁 Struktur Project

```
promptcraft/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Layout, Container
│   │   └── ui/            # Button, Card, Modal, dll
│   ├── context/
│   │   └── ProgressContext.tsx  # State management
│   ├── data/
│   │   ├── achievements.ts      # Achievement definitions
│   │   ├── lessons.ts           # 12 lesson contents
│   │   ├── quizzes.ts           # Quiz questions
│   │   └── templates.ts         # Prompt templates
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── LessonsPage.tsx
│   │   ├── LessonDetailPage.tsx
│   │   ├── PlaygroundPage.tsx
│   │   ├── QuizPage.tsx
│   │   └── ProgressPage.tsx
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── SPEC.md                  # Project specification
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎓 Yang Saya Pelajari dari Project Ini

1. **React + TypeScript Integration** — Type safety di React apps
2. **Tailwind CSS** — Utility-first styling yang cepat
3. **Framer Motion** — Animasi yang smooth dan purposeful
4. **State Management** — React Context + useReducer pattern
5. **UI/UX Design** — Membuat design system yang konsisten
6. **Gamification** — XP, streaks, achievements untuk engagement
7. **Content Creation** — Membuat materi edukasi yang engaging

## 💡 Use Cases

PromptCraft template bisa digunakan untuk:

- 📱 **Social Media** — Caption, hashtag, content calendar
- 📧 **Business** — Email, proposal, laporan
- ✍️ **Creative** — Blog post, story, script
- 📊 **Analysis** — Kompetitor research, data analysis
- 📚 **Education** — Course outline, quiz generation

## 🤝 Kontribusi

Project ini terbuka untuk kontribusi! Silakan:

1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Project ini menggunakan MIT License. Lihat file [LICENSE](LICENSE) untuk detail.

## 👤 Author

**Agni Miftah Fauzi** [@Atazyyy](https://github.com/Atazyyy)

- 🌐 Portfolio: [atapdigital.id](https://atapdigital.id)
- 📧 Email: agnimiftahfauza@gmail.com

---

⭐ Jangan lupa star repo ini jika kamu suka dengan projectnya!

_Dibuat dengan ❤️ untuk belajar Prompt Engineering_
