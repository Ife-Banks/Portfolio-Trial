import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import Headings from "../Resuables/Headings.jsx";
import ResponsiveImage from "./responsiveImage.jsx"
const experienceData = [
  // {
  //   id: 1,
  //   role: "Frontend Developer",
  //   company: "Skite Technologies",
  //   location: "Ibadan",
  //   period: "2023-10 — Current",
  //   type: "Full-time",
  //   description: [
  //     "Work on several apps mainly dedicated to administrative/management operations, using many different technologies and playing several roles.",
  //     "Involved in most of the company projects, from inception to final delivery, helping gathering requirements, and driving the execution and delivery roadmaps."
  //   ],
  //   techStack: ["TypeScript", "React", "VS Code", "Sass", "Google Cloud Platform"],
  //   color: "#871BE6"
  // },
  {
    id: 2,
    role: "Developer",
    image: "Screenshot_2025-10-28_120830_jkiq3z",
    company: "KodeBlock",
    location: "Nigeria",
    period: "Oct 2025 - Present",
    type: "Full-time",
    description: [
      "Collaborate on problem-solving initiatives and technical challenges within a community-driven development environment."
    ],
    techStack: ["Front-End Development", "Problem Solving"],
    color: "#6B46C1"
  },
  {
    id: 3,
    role: "Development Team Lead",
    image: "og-image_y2kddh",
    company: "Devalyze",
    location: "Lagos, Nigeria",
    period: "Aug 2025 - Present",
    type: "Full-time",
    description: [
      "Founded and led the development of Devalyze, a smart link utility app designed to simplify digital link management for individuals and teams.",
      "The project won first place at Selfless Heart TechCon '25, recognized for innovation and social impact."
    ],
    techStack: ["Software Testing", "Leading Development Teams", "React.js", "Node.js", "Express.js", "MongoDB"],
    color: "#8B5CF6"
  },
  {
    id: 4,
    role: "FullStack Developer",
    image:'opex_consulting_ng_logo_jmurms',
    company: "Opex Consulting",
    location: "Lagos State, Nigeria",
    period: "Aug 2025 - Present",
    type: "Internship",
    description: [
      "Led development of Finance Daily, a regulatory finance newsletter platform, collaborating with cross-functional teams to deliver a seamless user experience."
    ],
    techStack: ["Tailwind CSS", "Front-End Development", "React.js", "Node.js"],
    color: "#A78BFA"
  },
  {
    id: 5,
    role: "Frontend Developer",
    image:"images_smwjzy",
    company: "ATC Africa",
    location: "Nigeria",
    period: "Feb 2025 - Present",
    type: "Full-time",
    description: [
      "Contributed to the development of TXA'26, a tech-driven platform focused on enhancing digital experiences across African communities.",
      "Collaborated with cross-functional teams to build responsive, user-centric interfaces."
    ],
    techStack: ["Node.js", "Front-End Development", "React.js", "Tailwind CSS"],
    color: "#C4B5FD"
  },
  {
    id: 6,
    role: "Frontend Web Developer",
    image:"a241b3e95ac0b980fddc08671e7c8631c49ac9b6_1_xzjdz8",
    company: "Pheonix Technologies",
    location: "Ibadan, Oyo State, Nigeria",
    period: "Nov 2024 - Present",
    type: "Contract",
    description: [
      "Developed responsive and accessible web interfaces for educational platforms focused on data science and machine learning tutorials."
    ],
    techStack: ["Tailwind CSS", "Cascading Style Sheets (CSS)", "React.js", "JavaScript", "HTML5"],
    color: "#DDD6FE"
  }
];

const WorkExperience = () => {
  const [selectedExp, setSelectedExp] = useState(experienceData[0]);
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1c23]  pt-10 py-20 px-4 lg:px-8"
    id={`work`}>
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
          <Headings
              badge="WORK EXPERIENCE"
              text=" Employment "
              highlightText="History"
              subText="A journey through innovation, collaboration, and impact-driven development across diverse tech ecosystems"
              styh1="text-center"
              styp="text-center"
          />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-center mt-5">
          {/* Timeline Sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            variants={containerVariants}
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                onClick={() => setSelectedExp(exp)}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                  selectedExp.id === exp.id
                    ? 'bg-gradient-to-r from-[#871BE6]/20 to-transparent border-[#871BE6]'
                    : 'bg-[#2A2C38]/50 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Timeline Dot */}
                  <div className="relative mt-2">
                    <motion.div
                      className={`w-3 h-3 rounded-full ${
                        selectedExp.id === exp.id ? 'bg-[#871BE6]' : 'bg-[#95A3B9]'
                      }`}
                      animate={selectedExp.id === exp.id ? {
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(135, 27, 230, 0.7)',
                          '0 0 0 10px rgba(135, 27, 230, 0)',
                          '0 0 0 0 rgba(135, 27, 230, 0)'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {index !== experienceData.length - 1 && (
                      <div className="absolute top-5 left-1/2 w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-lg mb-1 transition-colors ${
                      selectedExp.id === exp.id ? 'text-white' : 'text-[#cbd6e8]'
                    }`}>
                      {exp.role}
                    </h3>
                    <p className="text-[#871BE6] font-medium text-sm mb-1">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-[#95A3B9]">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Details Panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExp.id}
                variants={detailVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gradient-to-br from-[#2A2C38] to-[#1f2128] rounded-2xl p-8 shadow-2xl border border-white/10 relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${selectedExp.color}, transparent 70%)`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6 ">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="relative w-16 h-16 rounded-2xl bg-transparent flex items-center justify-center mb-4 shadow-lg overflow-hidden"
                    >
                      <ResponsiveImage 
                        publicId={selectedExp.image}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </motion.div>


                    <h3 className="text-3xl font-bold text-white mb-2">
                      {selectedExp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-[#95A3B9]">
                      <span className="text-[#871BE6] font-semibold text-lg">
                        {selectedExp.company}
                      </span>
                      <span>•</span>
                      <span>{selectedExp.location}</span>
                      <span>•</span>
                      <span className="px-3 py-1 bg-[#871BE6]/20 rounded-full text-[#871BE6] text-sm font-medium">
                        {selectedExp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6 space-y-3">
                    {selectedExp.description.map((desc, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-3"
                      >
                        <div className="mt-2">
                          <div className="w-2 h-2 rounded-full bg-[#871BE6]" />
                        </div>
                        <p className="text-[#cbd6e8] leading-relaxed flex-1">
                          {desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#871BE6]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 7H7v6h6V7z" />
                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                      </svg>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.techStack.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-[#2A2C38] to-[#1f2128] border border-white/10 rounded-lg text-[#cbd6e8] text-sm font-medium hover:border-[#871BE6]/50 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-20"
                  style={{
                    background: `radial-gradient(circle at top right, ${selectedExp.color}, transparent 70%)`
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkExperience;