import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Socials from '../data/Socials';

const FuturisticContact = () => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const [result, setResult] = useState("");
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

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
        if (!accessKey) {
            setResult("The contact form is not configured yet. Please email me directly.");
            return;
        }

        setResult("Sending...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    from_name: "IfeBanks' Portfolio",
                    ...data,
                }),
            });

            const json = await response.json();

            if (response.ok && json.success) {
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
            className="relative isolate overflow-hidden bg-[var(--editorial-paper)] px-4 py-16 text-[var(--editorial-ink)] transition-colors duration-500 sm:px-6 sm:py-20 lg:px-8"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-12 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
                <div className="absolute -bottom-48 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-500/5 blur-3xl" />
            </div>

            <motion.div
                className="relative mx-auto w-full max-w-7xl"
                initial={{ opacity: 0, scale: 0.98, y: 18, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="relative overflow-hidden rounded-3xl border border-[var(--editorial-rule)] bg-[var(--editorial-card)] shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-colors duration-500 dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--editorial-accent)]/70 to-transparent" />
                    <div className="relative grid grid-cols-1 gap-10 p-5 sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-12 xl:p-16">
                        <motion.div
                            className="flex flex-col gap-7 sm:gap-8"
                            initial={{ opacity: 0, x: -20, filter: 'blur(7px)' }}
                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300 sm:text-xs sm:tracking-[0.45em]">
                                    Available for Work
                                </span>
                            </div>
                            <div>
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--editorial-muted)]">Have a project in mind?</p>
                                <h2 className="mt-4 max-w-xl font-clash text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[var(--editorial-ink)] sm:text-6xl lg:text-6xl xl:text-7xl">
                                    Let&apos;s build <span className="text-[var(--editorial-accent)]">something great.</span>
                                </h2>
                            </div>
                            <p className="max-w-xl text-base leading-relaxed text-[var(--editorial-muted)] sm:text-lg">
                                Whether it&apos;s a product launch, platform modernization, or custom workflow,
                                I help teams ship thoughtful experiences that people remember.
                            </p>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {contactDetails.map(({ label, value }) => (
                                    <a key={label} href={label === 'Email' ? `mailto:${value}` : `tel:${value.replaceAll(' ', '')}`} className="group min-w-0 rounded-2xl border border-[var(--editorial-rule)] bg-[var(--editorial-paper)] p-4 transition-colors duration-300 hover:border-[var(--editorial-accent)]">
                                        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--editorial-muted)]">
                                            {label}
                                        </p>
                                        <p className="break-words font-medium text-[var(--editorial-ink)] transition-colors group-hover:text-[var(--editorial-accent)] sm:text-xs xl:text-sm">{value}</p>
                                    </a>
                                ))}
                            </div>
                            <div className="space-y-3">
                                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted)]">
                                    Connect
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {contactSocials.map((social) => (
                                        <a
                                            key={social.key}
                                            href={social.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--editorial-rule)] bg-[var(--editorial-paper)] px-4 py-2 font-mono text-xs text-[var(--editorial-ink)] transition-colors duration-200 hover:border-[var(--editorial-accent)] hover:text-[var(--editorial-accent)]"
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
                            initial={{ opacity: 0, y: 20, filter: 'blur(7px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-[var(--editorial-rule)] bg-[var(--editorial-paper)]/70 p-4 sm:p-6 lg:p-7">
                                <div className="mb-6 flex items-center justify-between gap-4 border-b border-[var(--editorial-rule)] pb-4">
                                    <div>
                                        <p className="font-clash text-xl font-semibold text-[var(--editorial-ink)]">Send a message</p>
                                        <p className="mt-1 text-xs text-[var(--editorial-muted)]">I usually reply within 1–2 days.</p>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--editorial-muted)]">01 / 04</span>
                                </div>
                                <div className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-muted)]">
                                            Name*
                                        </label>
                                        <input
                                            type="text"
                                            {...register("name", { required: true })}
                                            className="w-full rounded-xl border border-[var(--editorial-rule)] bg-[var(--editorial-card)] px-4 py-3 text-[var(--editorial-ink)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--editorial-muted)]/70 focus:border-[var(--editorial-accent)] focus:ring-2 focus:ring-[var(--editorial-accent)]/20"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">Name is required</p>}
                                    </div>
                                    <div>
                                        <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-muted)]">
                                            Email*
                                        </label>
                                        <input
                                            type="email"
                                            {...register("email", { required: true })}
                                            className="w-full rounded-xl border border-[var(--editorial-rule)] bg-[var(--editorial-card)] px-4 py-3 text-[var(--editorial-ink)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--editorial-muted)]/70 focus:border-[var(--editorial-accent)] focus:ring-2 focus:ring-[var(--editorial-accent)]/20"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">Email is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-muted)]">
                                        Subject*
                                    </label>
                                    <input
                                        type="text"
                                        {...register("subject", { required: true })}
                                        className="w-full rounded-xl border border-[var(--editorial-rule)] bg-[var(--editorial-card)] px-4 py-3 text-[var(--editorial-ink)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--editorial-muted)]/70 focus:border-[var(--editorial-accent)] focus:ring-2 focus:ring-[var(--editorial-accent)]/20"
                                        placeholder="Project Inquiry"
                                    />
                                    {errors.subject && <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">Subject is required</p>}
                                </div>
                                <div>
                                    <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--editorial-muted)]">
                                        Message*
                                    </label>
                                    <textarea
                                        rows={5}
                                        {...register("message", { required: true })}
                                        className="w-full resize-y rounded-xl border border-[var(--editorial-rule)] bg-[var(--editorial-card)] px-4 py-3 text-[var(--editorial-ink)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--editorial-muted)]/70 focus:border-[var(--editorial-accent)] focus:ring-2 focus:ring-[var(--editorial-accent)]/20"
                                        placeholder="Tell me about your project..."
                                    />
                                    {errors.message && <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">Message is required</p>}
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative w-full overflow-hidden rounded-xl border border-violet-500/30 bg-[#7C3AED] shadow-lg shadow-violet-950/15 transition-colors hover:bg-[#6c21d6] disabled:cursor-not-allowed disabled:opacity-60"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="inline-flex min-h-12 w-full items-center justify-center gap-2 py-3 text-sm font-semibold text-white">
                                        {isSubmitting ? 'Sending…' : 'Send message'} <span aria-hidden="true">↗</span>
                                    </span>
                                </motion.button>
                                {result && (
                                    <motion.p
                                        role="status"
                                        aria-live="polite"
                                        className="text-sm font-medium text-[var(--editorial-muted)]"
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {result}
                                    </motion.p>
                                )}
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FuturisticContact;
