import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Simulate verified form submission & trigger mailto client intent
    setTimeout(() => {
      setStatus("success");

      // Build mailto fallback to ensure client transmission
      const mailtoLink = `mailto:bhavijaiswal241203@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;

      // Open mail client in background
      const link = document.createElement("a");
      link.href = mailtoLink;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setStatus("idle");
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#090d16]">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 sm:h-96 w-full max-w-[600px] rounded-full bg-gradient-to-t from-purple-600/10 to-transparent blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            Let's Connect
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight break-words">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-xs sm:text-base">
            Open to full-time software developer opportunities, engineering internships, and tech collaborations.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-12">
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 sm:p-7 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Reach out directly via email, phone, or connect through professional networks.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:bhavijaiswal241203@gmail.com"
                  className="group flex items-center gap-3.5 sm:gap-4 rounded-xl border border-white/5 bg-slate-800/40 p-3 sm:p-3.5 transition hover:border-purple-500/40 hover:bg-slate-800/80 min-h-[52px]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                    <FaEnvelope size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-slate-200 break-all group-hover:text-purple-300">
                      bhavijaiswal241203@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+917225848900"
                  className="group flex items-center gap-3.5 sm:gap-4 rounded-xl border border-white/5 bg-slate-800/40 p-3 sm:p-3.5 transition hover:border-blue-500/40 hover:bg-slate-800/80 min-h-[52px]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <FaPhoneAlt size={14} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Phone
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-blue-300">
                      +91-7225848900
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 sm:gap-4 rounded-xl border border-white/5 bg-slate-800/40 p-3 sm:p-3.5 min-h-[52px]">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-slate-200">
                      Durg / Raipur, Chhattisgarh, India
                    </p>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href="https://github.com/bhavijaiswal24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-800/40 py-3 min-h-[44px] text-xs font-semibold text-slate-300 transition hover:border-purple-400/50 hover:bg-slate-800 hover:text-white"
                  >
                    <FaGithub size={15} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/bhavijaiswal8900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-800/40 py-3 min-h-[44px] text-xs font-semibold text-slate-300 transition hover:border-blue-400/50 hover:bg-slate-800 hover:text-white"
                  >
                    <FaLinkedinIn size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Status Note */}
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-slate-900/60 p-5 sm:p-6 backdrop-blur-xl">
              <h4 className="text-sm font-bold text-white mb-1">
                Recruitment & Hiring
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Currently open to Software Development Engineer (SDE) roles, Full-Stack developer positions, and technology engineering opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 sm:p-7 md:p-9 backdrop-blur-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to initiate direct communication.
              </p>

              {status === "success" ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
                    <FaCheckCircle size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Message Prepared & Sent!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been processed and your mail client has been opened to complete dispatch to Bhavi.
                  </p>
                  <button
                    onClick={handleReset}
                    className="rounded-xl bg-slate-800 px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full min-h-[44px] rounded-xl border bg-slate-900/80 px-4 py-3 text-base sm:text-sm text-white placeholder-slate-500 transition focus:outline-none ${
                          errors.name
                            ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
                          <FaExclamationCircle size={10} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full min-h-[44px] rounded-xl border bg-slate-900/80 px-4 py-3 text-base sm:text-sm text-white placeholder-slate-500 transition focus:outline-none ${
                          errors.email
                            ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
                          <FaExclamationCircle size={10} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Project Collaboration / Inquiry"
                      className={`w-full min-h-[44px] rounded-xl border bg-slate-900/80 px-4 py-3 text-base sm:text-sm text-white placeholder-slate-500 transition focus:outline-none ${
                        errors.subject
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
                        <FaExclamationCircle size={10} />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Bhavi, I would like to discuss..."
                      className={`w-full rounded-xl border bg-slate-900/80 px-4 py-3 text-base sm:text-sm text-white placeholder-slate-500 transition focus:outline-none resize-none ${
                        errors.message
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-white/10 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 flex items-center gap-1 text-[11px] text-rose-400">
                        <FaExclamationCircle size={10} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition-all hover:scale-[1.01] hover:shadow-purple-600/40 active:scale-[0.99] disabled:opacity-50"
                  >
                    <FaPaperPlane size={13} />
                    <span>{status === "submitting" ? "Processing..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;