# GDG Site 2026 (DSC JIIT 128)

Welcome to the official repository for the **GDG Site 2026** (Developer Student Clubs, JIIT 128 chapter). This Next.js web application serves as the central hub for our community, upcoming events, and our flagship hackathon, **BitBox 6.0**.

## 🚀 Features

- **Flagship Hackathon**: A dedicated, dynamic registration and information portal for **BitBox 6.0** featuring prize pool bento grids, timeline roadmaps, custom interactive sponsor sections, and mini-game modules.
- **Premium UI/UX**: Built with modern, glass-morphic design philosophies and advanced animations.
- **Interactive Animations**: Powered by Framer Motion and Three.js to provide fluid UI choreography, particle effects (like background snow), and scroll-linked timeline sequences.
- **Robust Forms**: Secure and validated registration features using `zod`, `react-google-recaptcha-v3`, and Mongoose for backend MongoDB storage. Emails handled seamlessly using `resend` and `react-email`.
- **Responsive Layouts**: Utilizing Tailwind CSS `v4` for a mobile-first, heavily adaptive design ensuring perfection on both laptop grids and mobile displays.

## 🛠️ Technology Stack

This project leverages cutting-edge web development tooling:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Directory)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Three.js](https://threejs.org/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) & Custom Aceternity UI elements
- **Icons**: [Lucide React](https://lucide.dev/) & Tabler Icons
- **Backend & DB**: Node API Routes + [MongoDB/Mongoose](https://mongoosejs.com/)
- **Mailing**: [Resend](https://resend.com/)

## 🏃 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js and a modern package manager (npm, pnpm, or yarn) installed on your system.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/dsc-jiit-128/GDG-SITE-2026.git
   cd GDG-SITE-2026
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file referencing `.env.example` in the root of your project and populate it with your respective keys (MongoDB connection strings, Resend API key, ReCaptcha keys, etc.).

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application in action.

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Feel free to check the [issues page](https://github.com/dsc-jiit-128/GDG-SITE-2026/issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
*Built with ❤️ by the GDG JIIT 128 Web Team*
