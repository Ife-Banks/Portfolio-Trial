import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Socials from '../data/Socials';
import { ThemeContext } from './context/ThemeContext';

const FuturisticContact = () => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const [result, setResult] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';
    const contactSocialKeys = ['github', 'linkedIn', 'XIcon', 'instagram'];
    const socialLabelMap = {
        github: 'GitHub',
        linkedIn: 'LinkedIn',
        XIcon: 'Twitter',
        instagram: 'Instagram',
    };
    const contactSocials = contactSocialKeys
        .map((key) => {
            const social = Socials.find((item) => item.key === key);
            if (!social) return null;
            return { ...social, label: socialLabelMap[key] || social.key };
        })
        .filter(Boolean);
    const contactDetails = [
        { label: 'Email', value: 'Ifeoluwa.bankole05@gmail.com' },
        { label: 'Phone', value: '+234 706 777 0855' },
    ];

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
                    access_key: accessKey || "YOUR_ACCESS_KEY_HERE",
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
        <section
            id="contact"
            className="relative bg-white text-slate-900 py-24 px-6 overflow-hidden dark:bg-[#1a1c23] dark:text-white"
        >
            <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[#7C3AED]/20 opacity-40" />
            <div className="absolute inset-0 bg-black/80" />
            </div>

            <motion.div
                className="w-full max-w-6xl mx-auto relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="absolute -inset-[1px] rounded-3xl opacity-20 blur-sm bg-[#7C3AED]/20" />

                <div className={`relative ${isDark ? 'bg-[#0d1117]/95 border border-white/10' : 'bg-white/95 border border-slate-200'} rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.65)] overflow-hidden`}>
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 lg:p-12">
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                                </span>
                                <span className="text-xs font-mono uppercase tracking-[0.6em] text-emerald-300">
                                    Available for Work
                                </span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-5xl lg:text-6xl font-clash font-bold text-white leading-tight">
                                    Let's Build
                                </p>
                                <p className="text-5xl lg:text-6xl font-clash font-bold text-white leading-tight">
                                    <span className="text-[#7C3AED]">Something Great</span>
                                </p>
                            </div>
                            <p className="text-sm text-white/70 leading-relaxed">
                                Whether it&apos;s a product launch, platform modernization, or custom workflow,
                                I help teams ship thoughtful experiences that people remember.
                            </p>
                            <div className="space-y-4">
                                {contactDetails.map(({ label, value }) => (
                                    <div key={label} className={`rounded-2xl p-4 ${isDark ? 'bg-[#0d1117] border border-white/10' : 'bg-white/90 border border-slate-200'}`}>
                                        <p className={`text-xs font-mono uppercase tracking-widest mb-1 ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
                                            {label}
                                        </p>
                                        <p className={`${isDark ? 'text-white' : 'text-slate-900'} font-semibold`}>{value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                <p className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
                                    Connect
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {contactSocials.map((social) => (
                                        <a
                                            key={social.key}
                                            href={social.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`flex items-center gap-2 text-xs font-mono rounded-full px-4 py-2 transition-colors duration-200 ${isDark ? 'bg-[#0d1117] border border-white/10 text-white hover:border-purple-500/50' : 'bg-white/80 border border-slate-200 text-slate-700 hover:border-purple-500/50 hover:text-slate-900'}`}
                                        >
                                            <span className="w-4 h-4 flex items-center justify-center">
                                                {social.img}
                                            </span>
                                            {social.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">
                                            Name*
                                        </label>
                                        <input
                                            type="text"
                                            {...register("name", { required: true })}
                                            className="w-full bg-white/90 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 dark:bg-[#0d1117] dark:border-white/10 dark:text-white dark:placeholder-white/30"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-red-400 text-xs mt-1">Name is required</p>}
                                    </div>
                                    <div>
                                        <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">
                                            Email*
                                        </label>
                                        <input
                                            type="email"
                                            {...register("email", { required: true })}
                                            className="w-full bg-white/90 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 dark:bg-[#0d1117] dark:border-white/10 dark:text-white dark:placeholder-white/30"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-400 text-xs mt-1">Email is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">
                                        Subject*
                                    </label>
                                    <input
                                        type="text"
                                        {...register("subject", { required: true })}
                                            className="w-full bg-white/90 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 dark:bg-[#0d1117] dark:border-white/10 dark:text-white dark:placeholder-white/30"
                                        placeholder="Project Inquiry"
                                    />
                                    {errors.subject && <p className="text-red-400 text-xs mt-1">Subject is required</p>}
                                </div>
                                <div>
                                    <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">
                                        Message*
                                    </label>
                                    <textarea
                                        rows={5}
                                        {...register("message", { required: true })}
                                            className="w-full bg-white/90 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 resize-none dark:bg-[#0d1117] dark:border-white/10 dark:text-white dark:placeholder-white/30"
                                        placeholder="Tell me about your project..."
                                    />
                                    {errors.message && <p className="text-red-400 text-xs mt-1">Message is required</p>}
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full relative overflow-hidden rounded-2xl group"
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute inset-0 bg-[#7C3AED] transition-all duration-300" />
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-60 transition-all duration-300" />
                                    <span className="relative inline-flex justify-center items-center w-full py-4 text-sm font-semibold text-white">
                                        {isHovered ? 'Sending...' : 'Send Message'}
                                    </span>
                                </motion.button>
                                {result && (
                                    <motion.p
                                        className="text-white font-medium text-sm"
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {result}
                                    </motion.p>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FuturisticContact;
