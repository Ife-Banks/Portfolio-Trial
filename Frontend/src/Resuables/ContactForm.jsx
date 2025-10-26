import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

function FuturisticContact() {
    const [result, setResult] = useState("");
    const [focusedField, setFocusedField] = useState(null);
    const [fieldValues, setFieldValues] = useState({});
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Watch all fields to track their values
    const watchAllFields = watch();

    const onSubmit = async (data) => {
        setResult("sending");

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
            setResult("success");
            reset();
            setFieldValues({});
            // No auto-dismiss - user can manually dismiss
        } else {
            setResult("error");
            // No auto-dismiss - user can manually dismiss
        }
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const FormField = ({ label, id, type = "text", required = false, rows, error }) => {
        const isTextarea = type === "textarea";
        const InputComponent = isTextarea ? "textarea" : "input";
        const hasValue = watchAllFields[id] && watchAllFields[id].length > 0;

        return (
            <motion.div variants={itemVariants} className="relative">
                <div className="relative group">
                    {/* Glowing border effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#871BE6] to-[#C4B5FD] rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500 ${
                        focusedField === id ? 'opacity-30' : ''
                    }`} />

                    {/* Input Container */}
                    <div className={`relative bg-gradient-to-br from-[#2A2C38] to-[#1f2128] rounded-xl border transition-all duration-300 ${
                        focusedField === id
                            ? 'border-[#871BE6] shadow-lg shadow-[#871BE6]/20'
                            : error
                                ? 'border-red-500/50'
                                : 'border-white/10 hover:border-white/20'
                    }`}>
                        {/* Label */}
                        <label
                            htmlFor={id}
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                                focusedField === id || hasValue
                                    ? 'top-2 text-xs text-[#871BE6]'
                                    : 'top-5 text-base text-[#95A3B9]'
                            }`}
                        >
                            {label}{required && <span className="text-[#871BE6] ml-1">*</span>}
                        </label>

                        {/* Input Field */}
                        <InputComponent
                            id={id}
                            type={type}
                            rows={rows}
                            {...register(id, { required })}
                            onFocus={() => setFocusedField(id)}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-transparent outline-none text-white px-4 ${
                                isTextarea ? 'pt-8 pb-3 resize-none' : 'pt-7 pb-2'
                            } text-base`}
                        />

                        {/* Field Icon */}
                        <div className={`absolute right-4 ${isTextarea ? 'top-8' : 'top-1/2 -translate-y-1/2'} transition-colors duration-300 ${
                            focusedField === id ? 'text-[#871BE6]' : 'text-[#95A3B9]'
                        }`}>
                            {id === 'name' && (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            )}
                            {id === 'email' && (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            )}
                            {id === 'location' && (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            )}
                            {id === 'subject' && (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            )}
                            {id === 'message' && (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                <AnimatePresence>
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-2 ml-2 flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {label} is required
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    const ContactInfo = ({ icon, label, value, href }) => (
        <motion.a
            href={href}
            variants={itemVariants}
            whileHover={{ scale: 1.02, x: 5 }}
            className="group relative"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#871BE6] to-[#C4B5FD] rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
            <div className="relative bg-gradient-to-br from-[#2A2C38] to-[#1f2128] p-4 rounded-xl border border-white/10 group-hover:border-[#871BE6]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#871BE6]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#871BE6]/30 transition-colors">
                        {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-[#95A3B9] text-sm font-medium mb-1">{label}</h3>
                        <p className="text-white font-semibold text-base break-all">{value}</p>
                    </div>
                </div>
            </div>
        </motion.a>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a1c23] via-[#27292F] to-[#1a1c23] pt-24 lg:pt-32 pb-16 lg:pb-24 px-4 lg:px-8 relative overflow-hidden" id="contact">
            {/* Animated Background Orbs */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-[#871BE6]/5 rounded-full blur-3xl pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-[#C4B5FD]/5 rounded-full blur-3xl pointer-events-none"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, -30, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.div
                className="max-w-6xl mx-auto relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Header */}
                <motion.div className="text-center mb-12 lg:mb-16" variants={itemVariants}>
                    <motion.div
                        className="inline-block mb-4 px-4 py-2 bg-[#2A2C38]/50 backdrop-blur-sm rounded-full border border-white/10"
                        whileHover={{ scale: 1.05, borderColor: 'rgba(135, 27, 230, 0.5)' }}
                    >
                        <span className="text-[#871BE6] font-mono text-xs lg:text-sm tracking-wider uppercase font-semibold">
                            GET IN TOUCH
                        </span>
                    </motion.div>
                    <motion.h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6" variants={itemVariants}>
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#871BE6] to-[#C4B5FD]">Connect</span>
                    </motion.h2>
                    <motion.p className="text-[#95A3B9] text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4" variants={itemVariants}>
                        Open to new opportunities, collaborations, and meaningful conversations. To discuss a potential project or view the portfolio deck, feel free to reach out.
                    </motion.p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
                    {/* Contact Info - Left Side */}
                    <motion.div className="lg:col-span-1 space-y-6" variants={containerVariants}>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                <svg className="w-6 h-6 text-[#871BE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Contact Information
                            </h3>
                        </motion.div>

                        <ContactInfo
                            icon={
                                <svg className="w-6 h-6 text-[#871BE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            }
                            label="Email"
                            value="Ifeoluwa.bankole05@gmail.com"
                            href="mailto:Ifeoluwa.bankole05@gmail.com"
                        />

                        <ContactInfo
                            icon={
                                <svg className="w-6 h-6 text-[#871BE6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            }
                            label="Phone"
                            value="+234 706 777 0855"
                            href="tel:+2347067770855"
                        />

                        <motion.div variants={itemVariants} className="pt-4">
                            <p className="text-[#95A3B9] text-sm leading-relaxed">
                                Available for freelance opportunities and full-time positions. Response time: 24-48 hours.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Form - Right Side */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-2 relative"
                    >
                        {/* Animated background glow */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#871BE6]/10 to-[#C4B5FD]/10 rounded-3xl blur-3xl"
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="relative bg-gradient-to-br from-[#2A2C38]/80 to-[#1f2128]/80 backdrop-blur-xl rounded-3xl p-6 lg:p-10 border border-white/10 shadow-2xl"
                        >
                            <input type="hidden" name="from_name" value="IfeBanks' Portfolio" />

                            <motion.div
                                className="space-y-6"
                                variants={containerVariants}
                            >
                                {/* Name & Email Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        label="Name"
                                        id="name"
                                        required
                                        error={errors.name}
                                    />
                                    <FormField
                                        label="Email"
                                        id="email"
                                        type="email"
                                        required
                                        error={errors.email}
                                    />
                                </div>

                                {/* Location & Subject Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        label="Location"
                                        id="location"
                                    />
                                    <FormField
                                        label="Subject"
                                        id="subject"
                                        required
                                        error={errors.subject}
                                    />
                                </div>

                                {/* Message */}
                                <FormField
                                    label="Message"
                                    id="message"
                                    type="textarea"
                                    rows={5}
                                    required
                                    error={errors.message}
                                />

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={result === "sending"}
                                    className="relative group w-full md:w-auto"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#871BE6] to-[#C4B5FD] rounded-xl opacity-70 group-hover:opacity-100 blur transition duration-300" />
                                    <div className="relative flex items-center justify-center gap-2 px-8 py-4 bg-[#871BE6] hover:bg-[#9a3aed] rounded-xl transition-colors">
                                        {result === "sending" ? (
                                            <>
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                <span className="text-white font-semibold">Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-white font-semibold text-lg">Send Message</span>
                                                <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </div>
                                </motion.button>
                            </motion.div>

                            {/* Status Messages */}
                            <AnimatePresence>
                                {result && result !== "sending" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className={`mt-6 p-4 rounded-xl flex items-start gap-3 ${
                                            result === "success"
                                                ? 'bg-green-500/20 border border-green-500/50'
                                                : 'bg-red-500/20 border border-red-500/50'
                                        }`}
                                    >
                                        <div className="flex-1 flex items-start gap-3">
                                            {result === "success" ? (
                                                <>
                                                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div>
                                                        <p className="text-green-400 font-semibold">Message sent successfully!</p>
                                                        <p className="text-green-300/70 text-sm">I'll get back to you soon.</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div>
                                                        <p className="text-red-400 font-semibold">Something went wrong</p>
                                                        <p className="text-red-300/70 text-sm">Please try again later.</p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => setResult("")}
                                            className="text-white/50 hover:text-white transition-colors flex-shrink-0"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default FuturisticContact;