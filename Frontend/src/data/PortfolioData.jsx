const Projects = [
  {
    id: 1,
    image: 'aimher_hero',
    alt: "AIMHER project",
    category: "Healthcare AI",
    title: "AIMHER-Health",
    description: "An AI-driven, clinical-grade diagnostic platform engineered for early detection of PCOS. A software-as-a-medical-device (SaMD) built to help real people with real health problems.",
    link: "https://awhares.vercel.app/",
    tags: ["Python", "ExpressJS", "XGBoost", "React", "PostgreSQL", "ONNX"],
    featured: true
  },
  {
    id: 2,
    image: '',
    alt: "Wyvadot PR project",
    category: "Business / Engineering",
    title: "Wyvadot PR – Reliable Project Delivery Built on Excellence",
    description: "Wyvadot PR is the digital presence for Wyvadot Projects & Resources Ltd, a fully locally-owned Nigerian engineering and project management firm founded in 2021. The platform showcases their full suite of services—engineering solutions, construction, maintenance, and human resourcing—while enabling clients to book consultations and shop for services directly online. Built to reflect the company's commitment to long-lasting quality and world-class customer relationships across Nigeria and Africa.",
    link: "https://wyvadotpr.com/",
    tags: ["React.Js", "Node.js", "Express.Js", "MongoDB"]
  },
  {
    id: 3,
    image: '',
    alt: "OpexCal project",
    category: "SaaS / Productivity",
    title: "OpexCal – Your Organization's Heartbeat, On One Calendar",
    description: "OpexCal is an organizational productivity platform that brings tasks, meetings, and milestones together in a single unified calendar. Built for teams that need to stay aligned, it enables real-time task management, progress tracking, and seamless scheduling across every department. Whether you're managing a startup or a growing enterprise, OpexCal keeps every moving part of your organization visible, connected, and on track—no credit card needed to get started.",
    link: "https://opexcal.vercel.app/",
    tags: ["React.Js", "Node.js", "Express.Js", "MongoDB"]
  },
  {
    id: 4,
    image: '',
    alt: "ATrackSys project",
    category: "HR / Operations",
    title: "ATrackSys – Academic Attendance Tracking Portal",
    description: "ATrackSys is a real-time academic attendance management system built for universities and educational institutions. The platform provides secure access for both students and lecturers to manage attendance records, monitor participation, and perform academic activities from a single dashboard. With Supabase powering the backend, ATrackSys delivers fast, reliable, and authenticated attendance tracking that keeps institutions accountable and students engaged.",
    link: "https://atracksystem.vercel.app/",
    tags: ["React.Js", "Supabase"]
  },
  {
    id: 5,
    image: '',
    alt: "A-Mentra project",
    category: "EdTech / HR Operations",
    title: "A-Mentra – Modernizing SIWES Logbook Management",
    description: "A-Mentra is a digital industrial training management platform trusted by 500+ institutions across Nigeria. It connects students, supervisors, and institutions on a single seamless platform—replacing paper-based SIWES logbooks with a structured digital workflow. With 10,000+ students onboarded, A-Mentra streamlines supervision, log submissions, and institutional oversight, making industrial training transparent, trackable, and efficient for everyone involved.",
    link: "https://amentra.vercel.app/",
    tags: ["React", "TypeScript", "TailwindCSS", "Express.Js"]
  },
  {
    id: 6,
    image: 'devalyze_avzost',
    alt: "Devalyze project",
    category: "Web Utility",
    title: "Devalyze – Fast & Simple URL Shortening for Developers",
    description: "Devalyze is a lightweight, developer-friendly URL shortener built for speed, simplicity, and clarity. Designed with a clean interface and intuitive flow, users can instantly convert long URLs into compact, shareable links. The platform supports real-time link generation, copy-to-clipboard functionality, and a responsive design that works seamlessly across devices. Whether you're streamlining links for social media, analytics, or internal tools, Devalyze offers a no-frills solution that gets the job done with elegance and efficiency.",
    link: "https://devalyze.space/",
    tags: ["React.Js", "Node.js", "MongoDB", "Express.Js"]
  },
  {
    id: 7,
    image: 'finance_fmsqkj',
    alt: "Finance Daily",
    category: "Financial News & Market Insights",
    title: "FinanceDaily – Your Morning Edge in the Markets",
    description: "FinanceDaily is a streamlined financial news platform delivering timely market analysis, investment insights, and breaking updates every morning. Designed for investors and finance enthusiasts, it offers concise summaries that help users stay ahead of market trends and make informed decisions. With a focus on clarity and relevance, FinanceDaily transforms complex financial data into digestible insights—right in your inbox.",
    link: "https://financedaily.netlify.app/",
    tags: ["React.Js", "Node.js", "MongoDB", "Express.Js", "Nodemailer"]
  },
  {
    id: 8,
    image: 'pdm_lsnlcv',
    alt: "PDM project",
    category: "EdTech",
    title: "PDM Tutor – Learn Data Analytics with Real-World Projects",
    description: "PDM Tutor is a specialized learning platform focused on empowering students and professionals with practical skills in Python programming, data analysis, and machine learning. Built by a team of experienced tutors, the platform emphasizes a hands-on, code-first approach to mastering essential tools like Pandas, NumPy, Matplotlib, and Scikit-learn. Learners are guided through real-world workflows—from data wrangling and exploratory analysis to model development.",
    link: "https://mypdmtutor.com/",
    tags: ["React.Js", "Javascript", "TailwindCSS"]
  },
  {
    id: 9,
    image: 'img_nvfav7',
    alt: "adi stores",
    category: "Ecommerce",
    title: "AdiStores – Modern eCommerce Platform for Seamless Shopping",
    description: "AdiStores is a sleek and responsive eCommerce web application designed to deliver a smooth and intuitive shopping experience. Built with modern web technologies, it enables users to browse, search, and purchase products effortlessly. With a clean interface, fast performance, and secure checkout, AdiStores sets a new standard for simplicity and reliability in online retail.",
    link: "https://adi-stores.vercel.app/",
    tags: ["React.Js", "Docker", "Modern UI libaries", "Azure", "SSMS"]
  },
  {
    id: 10,
    image: 'VexCar_itrutx',
    alt: "Vex Car project",
    category: "Transportation Tech",
    title: "VexCar – Premium Car Rentals Made Effortless",
    description: "VexCar is a sleek, mobile-first car rental solution designed to simplify the process of booking luxury vehicles. With an intuitive interface and a three-step booking flow, users can quickly select their location, pick-up date, and preferred car—all from their smartphone. The platform emphasizes premium service, competitive pricing, and flexible cancellation policies. Whether you're looking for a Jaguar, BMW, or Lamborghini, VexCar delivers high-end options with seamless convenience.",
    link: "https://vexcar.netlify.app/",
    tags: ["React.Js", "Tailwind"]
  },
  {
    id: 11,
    image: 'crypto_e1lzxv',
    alt: "Crypto project",
    category: "Cryptocurrency Wallet",
    title: "XCrypto Wallet – Secure & Seamless Crypto Management",
    description: "XCrypto Wallet is a modern, browser-based cryptocurrency wallet designed for simplicity, security, and speed. Users can create and manage crypto wallets with ease, send and receive tokens, and view transaction history—all within a clean, intuitive interface. Built with a focus on user experience and blockchain transparency, XCrypto Wallet supports essential wallet operations while maintaining a sleek, minimal design.",
    link: "https://xcrypto-wallet.netlify.app/",
    tags: ["React.Js", "Tailwind"]
  },
  {
    id: 12,
    image: 'cybergenz_uzcwyd',
    alt: "Cybergenz project",
    category: "Cybersecurity Education",
    title: "Cybergenz – Shaping Tomorrow's Cybersecurity Leaders",
    description: "Cybergenz is a forward-thinking platform dedicated to cultivating the next generation of cybersecurity professionals. With a focus on cutting-edge skills and unwavering commitment, it offers learners a structured pathway to master the tools, techniques, and mindset required to thrive in the digital defense space. Whether you're a student, aspiring analyst, or tech enthusiast, Cybergenz provides the resources and community to help you grow into a confident, capable cybersecurity leader.",
    link: "https://join-cybergenz.netlify.app/",
    tags: ["React.Js", "Tailwind"]
  },
  {
    id: 13,
    image: 'Trust_gljqm8',
    alt: "Trust project",
    category: "Digital Identity & Asset Management",
    title: "TrustVaulte – Your Secure Vault for Digital Trust",
    description: "TrustVaulte is a digital trust management platform designed to help users securely store, verify, and manage sensitive assets and credentials. Whether it's financial documents, identity records, or confidential data, TrustVaulte offers a clean, intuitive interface backed by robust encryption and access control. The platform emphasizes transparency, user autonomy, and seamless sharing—making it ideal for individuals and organizations looking to build trust in a digital-first world.",
    link: "https://trustvaulte.netlify.app/",
    tags: ["React.Js", "Tailwind"]
  },
  {
    id: 14,
    image: 'smartnotes_shzoal',
    alt: "smart-notes",
    category: "Productivity",
    title: "SmartsNote – Organize Your Thoughts Smarter",
    description: "SmartsNote is a minimalist, web-based note-taking app designed to help users capture ideas, tasks, and reminders with ease. Featuring a clean interface and intuitive layout, it allows users to create, edit, and manage notes without distractions. Whether you're jotting down quick thoughts or organizing your daily workflow, SmartsNote offers a seamless experience that keeps your mind clear and your notes accessible.",
    link: "https://smarts-note.netlify.app/",
    tags: ["React.Js", "Tailwind"]
  }
];

export default Projects;