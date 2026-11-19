"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, Smartphone, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3dccf9fd-0d54-4d79-93f9-7b9a3672fd60", // Replace this with your Web3Forms Access Key
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "New Message from Portfolio",
          message: formState.message,
          from_name: "Tanvir Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting Web3Forms contact form", error);
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Direct Email",
      value: "ti414815@gmail.com",
      href: "mailto:ti414815@gmail.com",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-secondary" />,
      label: "Phone Number",
      value: "+880 1742-582808",
      href: "+880 1742-582808",
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      label: "My Location",
      value: "Faridpur, Dhaka, Bangladesh",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact Tanvir Islam Tamim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Information cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
            <p className="text-zinc-400 leading-relaxed">
              Have an idea, project, or full-time opportunity you&apos;d like to discuss? Drop me a message. I respond to all inquiries within 24 hours.
            </p>

            <div className="space-y-4 pt-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass p-4 rounded-2xl border-white/5 hover:border-zinc-700/60 hover:-translate-x-1 transition-all duration-300 group"
                >
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-zinc-800 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 font-bold block">{info.label}</span>
                    <span className="text-sm text-zinc-200 group-hover:text-white font-medium transition-colors">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-8 border-white/5 shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-zinc-900/50 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-zinc-900/50 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-zinc-900/50 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Your Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Hi John, I'd like to talk to you about a project..."
                    className="w-full bg-zinc-900/50 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button & Status Alerts */}
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-gradient-to-r from-accent via-purple-600 to-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Status Alerts */}
                  {status === "success" && (
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/20 border border-emerald-900 px-4 py-3 rounded-xl text-sm font-medium">
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      <span>Message sent successfully! I will get back to you soon.</span>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-rose-400 bg-rose-950/20 border border-rose-900 px-4 py-3 rounded-xl text-sm font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Failed to send. Please check your inputs and try again.</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
