import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-6 min-h-screen flex flex-col items-center justify-center relative bg-[#1a1c23] overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] -z-10 rounded-full blur-3xl opacity-10 bg-[#7C3AED]/20"
      />

      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Terminal label */}
        <p className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-3">
          $ ./contact --open
        </p>

        {/* Heading */}
        <h2 className="font-clash font-semibold tracking-wide text-4xl md:text-5xl text-white mb-3">
          Get In <span className="text-[#7C3AED]">Touch</span>
        </h2>

        {/* Subheading */}
        <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto mb-12">
          Have a project in mind? Let's bring it to life. Whether it's a website,
          web service, or fullstack application &mdash; I'm open to meaningful work.
        </p>

        {/* Contact Info Row */}
        <div className="flex items-center justify-center gap-8 mb-10 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-white/30">Email</span>
            <span className="font-mono text-xs text-white/30">&rarr;</span>
            <a
              href="mailto:ifeoluwa.bankole05@gmail.com"
              className="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ifeoluwa.bankole05@gmail.com
            </a>
          </div>
          <div className="w-[1px] h-4 bg-white/10 hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-white/30">Phone</span>
            <span className="font-mono text-xs text-white/30">&rarr;</span>
            <a
              href="tel:+2347067770855"
              className="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              +234 706 777 0855
            </a>
          </div>
        </div>

        {/* Form */}
        <form className="w-full space-y-4 text-left" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="space-y-1">
            <label className="font-mono text-xs text-white/30 tracking-widest uppercase">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-transparent border-b border-white/10 focus:border-purple-500 outline-none py-3 text-white/70 text-sm font-mono placeholder:text-white/20 transition-colors duration-200"
              required
            />
          </div>

          {/* Email and Subject grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="font-mono text-xs text-white/30 tracking-widest uppercase">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-transparent border-b border-white/10 focus:border-purple-500 outline-none py-3 text-white/70 text-sm font-mono placeholder:text-white/20 transition-colors duration-200"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-xs text-white/30 tracking-widest uppercase">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion"
                className="w-full bg-transparent border-b border-white/10 focus:border-purple-500 outline-none py-3 text-white/70 text-sm font-mono placeholder:text-white/20 transition-colors duration-200"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label className="font-mono text-xs text-white/30 tracking-widest uppercase">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full bg-transparent border-b border-white/10 focus:border-purple-500 outline-none py-3 resize-none text-white/70 text-sm font-mono placeholder:text-white/20 transition-colors duration-200"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6 text-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-full font-mono text-sm transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              Send Message &rarr;
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="w-full max-w-2xl mx-auto text-center py-8 border-t border-white/5 mt-16">
        <p className="font-mono text-xs text-white/20 tracking-widest">
          &copy; 2026 Ife-Banks. Built with React & TailwindCSS
        </p>
      </div>
    </section>
  );
}

export default Contact;
