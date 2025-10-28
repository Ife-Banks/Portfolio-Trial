import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Headings from '../Resuables/Headings.jsx';

const FuturisticContact = () => {
    const [result, setResult] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const bg1Ref = useRef(null);
    const bg2Ref = useRef(null);

    useEffect(() => {
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#1A5E4D", "#BE29D7"];
        const changeColors = () => {
            const availableColors = [...colors];
            const randomIndex1 = Math.floor(Math.random() * availableColors.length);
            const color1 = availableColors[randomIndex1];
            availableColors.splice(randomIndex1, 1);

            const randomIndex2 = Math.floor(Math.random() * availableColors.length);
            const color2 = availableColors[randomIndex2];

            if (bg1Ref.current) bg1Ref.current.style.backgroundColor = color1;
            if (bg2Ref.current) bg2Ref.current.style.backgroundColor = color2;
        };

        changeColors();
        const intervalId = setInterval(changeColors, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const onSubmit = async (data) => {
        setResult("Sending...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "YOUR_ACCESS_KEY_HERE",
                    from_name: "IfeBanks' Portfolio",
                    ...data,
                }),
            });

            const json = await response.json();

            if (json.success) {
                setResult("Message sent successfully ✅");
                reset();
                setTimeout(() => setResult(""), 3000);
            } else {
                setResult("Something went wrong ❌");
                setTimeout(() => setResult(""), 3000);
            }
        } catch (error) {
            setResult("Connection error ❌");
            setTimeout(() => setResult(""), 3000);
        }
    };

    return (
        <section className="relative bg-[#1a1c23] pt-10 pb-20 px-4 overflow-hidden"
        id={`contact`}>
            {/* Animated Background Blobs */}
            <div
                ref={bg1Ref}
                className="absolute w-[600px] h-[600px] rounded-full top-0 left-1/4 transition-all duration-1000 blur-[200px] opacity-30 -z-10"
            />
            <div
                ref={bg2Ref}
                className="absolute w-[400px] h-[400px] rounded-full bottom-0 right-1/4 transition-all duration-1000 blur-[150px] opacity-20 -z-10"
            />

            {/* Hero Section */}
          {/*  <motion.div*/}
          {/*      className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center mb-16"*/}
          {/*      initial={{ opacity: 0, y: 30 }}*/}
          {/*      animate={{ opacity: 1, y: 0 }}*/}
          {/*      transition={{ duration: 0.8 }}*/}
          {/*  >*/}
          {/*      <motion.div*/}
          {/*          className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"*/}
          {/*          whileHover={{ scale: 1.05 }}*/}
          {/*      >*/}
          {/*<span className="text-purple-400 text-sm font-medium uppercase tracking-wider">*/}
          {/*  Project Idea?*/}
          {/*</span>*/}
          {/*      </motion.div>*/}

          {/*      <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl max-w-4xl">*/}
          {/*          Let's discuss{' '}*/}
          {/*          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">*/}
          {/*  your project!*/}
          {/*</span>*/}
          {/*      </h1>*/}

          {/*      <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">*/}
          {/*          Have a project in mind? Let's bring it to life. Whether it's a website, web service,*/}
          {/*          or fullstack application, tailored solutions are built to match your goals and deliver real impact.*/}
          {/*      </p>*/}
          {/*  </motion.div>*/}
            <Headings
                badge="Project Idea?"
                text="Let's discuss"
                highlightText="your project!"
                subText="Have a project in mind? Let's bring it to life. Whether it's a website, web service,
                    or fullstack application, tailored solutions are built to match your goals and deliver real impact."
                styh1="text-center"
                styp="text-center"
            />

            {/* Main Contact Card */}
            <motion.div
                className="w-[90%] lg:w-[85%] max-w-6xl mx-auto relative mt-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Glowing Border Effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl opacity-20 blur-sm" />

                <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                    {/* Mesh Gradient Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(135,27,230,0.1),transparent_50%)] pointer-events-none" />

                    <div className="relative p-8 lg:p-12">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                            <div className="flex-1">
                                <motion.h2
                                    className="text-white text-4xl lg:text-5xl font-bold mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Get In Touch
                                </motion.h2>
                                <motion.p
                                    className="text-gray-400 text-base leading-relaxed max-w-2xl"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Open to new opportunities, collaborations, and meaningful conversations with
                                    forward-thinking individuals and teams. To view the portfolio deck or discuss
                                    a potential project, feel free to reach out via email or book a call.
                                </motion.p>
                            </div>

                            {/* Contact Info Cards */}
                            <motion.div
                                className="flex flex-col gap-4 lg:min-w-[300px]"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    <div className="relative">
                                        <p className="text-purple-400 text-sm font-medium mb-1">Email</p>
                                        <p className="text-white text-sm">Ifeoluwa.bankole05@gmail.com</p>
                                    </div>
                                </div>

                                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    <div className="relative">
                                        <p className="text-blue-400 text-sm font-medium mb-1">Phone No</p>
                                        <p className="text-white text-sm">+234 706 777 0855</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Name Field */}
                                <div className="group relative">
                                    <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2 group-focus-within:text-purple-400 transition-colors">
                                        Name*
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="name"
                                            type="text"
                                            {...register("name", { required: true })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                    </div>
                                    {errors.name && <p className="text-red-400 text-sm mt-1">Name is required</p>}
                                </div>

                                {/* Email Field */}
                                <div className="group relative">
                                    <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2 group-focus-within:text-purple-400 transition-colors">
                                        Email*
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            type="email"
                                            {...register("email", { required: true })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                    </div>
                                    {errors.email && <p className="text-red-400 text-sm mt-1">Email is required</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Location Field */}
                                <div className="group relative">
                                    <label htmlFor="location" className="block text-gray-400 text-sm font-medium mb-2 group-focus-within:text-purple-400 transition-colors">
                                        Location
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="location"
                                            type="text"
                                            {...register("location")}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                                            placeholder="City, Country"
                                        />
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="group relative">
                                    <label htmlFor="subject" className="block text-gray-400 text-sm font-medium mb-2 group-focus-within:text-purple-400 transition-colors">
                                        Subject*
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="subject"
                                            type="text"
                                            {...register("subject", { required: true })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                                            placeholder="Project Inquiry"
                                        />
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                    </div>
                                    {errors.subject && <p className="text-red-400 text-sm mt-1">Subject is required</p>}
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="group relative">
                                <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2 group-focus-within:text-purple-400 transition-colors">
                                    Message*
                                </label>
                                <div className="relative">
                  <textarea
                      id="message"
                      rows={5}
                      {...register("message", { required: true })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                  />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                                {errors.message && <p className="text-red-400 text-sm mt-1">Message is required</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-center gap-4 flex-wrap">
                                <motion.button
                                    type="submit"
                                    className="relative group px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Button Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                                    <span className="relative flex items-center gap-2">
                    Send Message
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 25 24"
                        fill="none"
                        animate={isHovered ? {
                            x: [0, 5, 0],
                            transition: { repeat: Infinity, duration: 0.8 }
                        } : {}}
                    >
                      <path
                          d="M18.42 11.6202C18.3724 11.4974 18.301 11.3853 18.21 11.2902L13.21 6.29019C13.1168 6.19695 13.0061 6.12299 12.8842 6.07253C12.7624 6.02207 12.6319 5.99609 12.5 5.99609C12.2337 5.99609 11.9783 6.10188 11.79 6.29019C11.6968 6.38342 11.6228 6.49411 11.5723 6.61594C11.5219 6.73776 11.4959 6.86833 11.4959 7.00019C11.4959 7.26649 11.6017 7.52188 11.79 7.71019L15.09 11.0002H7.5C7.23478 11.0002 6.98043 11.1055 6.79289 11.2931C6.60536 11.4806 6.5 11.735 6.5 12.0002C6.5 12.2654 6.60536 12.5198 6.79289 12.7073C6.98043 12.8948 7.23478 13.0002 7.5 13.0002H15.09L11.79 16.2902C11.6963 16.3831 11.6219 16.4937 11.5711 16.6156C11.5203 16.7375 11.4942 16.8682 11.4942 17.0002C11.4942 17.1322 11.5203 17.2629 11.5711 17.3848C11.6219 17.5066 11.6963 17.6172 11.79 17.7102C11.883 17.8039 11.9936 17.8783 12.1154 17.9291C12.2373 17.9798 12.368 18.006 12.5 18.006C12.632 18.006 12.7627 17.9798 12.8846 17.9291C13.0064 17.8783 13.117 17.8039 13.21 17.7102L18.21 12.7102C18.301 12.6151 18.3724 12.5029 18.42 12.3802C18.52 12.1367 18.52 11.8636 18.42 11.6202Z"
                          fill="white"
                      />
                    </motion.svg>
                  </span>
                                </motion.button>


                                {result && (
                                    <motion.p
                                        className="text-white font-medium"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        {result}
                                    </motion.p>
                                )}
                            </div>
                        </motion.form>
                    </div>
                </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <div className="absolute top-40 right-20 w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </section>
    );
};

export default FuturisticContact;