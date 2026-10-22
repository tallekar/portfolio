import { Github, Linkedin, LoaderCircle, Mail, Send } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? "https://niket-talekar.onrender.com" : "")
).replace(/\/+$/, "");

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  function validate(values) {
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    if (!name) {
      errors.name = "Name is required.";
    } else if (name.length < 2) {
      errors.name = "Name must be at least 2 characters long.";
    } else if (name.length > 120) {
      errors.name = "Name must be 120 characters or fewer.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (email.length > 254) {
      errors.email = "Email must be 254 characters or fewer.";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!message) {
      errors.message = "Message is required.";
    } else if (message.length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    } else if (message.length > 5000) {
      errors.message = "Message must be 5000 characters or fewer.";
    }

    return errors;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setFieldErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setStatus((current) => ({
      ...current,
      error: "",
      success: "",
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(formData);
    const hasErrors = Object.values(validationErrors).some(Boolean);

    if (hasErrors) {
      setFieldErrors(validationErrors);
      setStatus({
        loading: false,
        error: "Please fix the highlighted fields before submitting.",
        success: "",
      });
      return;
    }

    setFieldErrors({
      name: "",
      email: "",
      message: "",
    });

    setStatus({
      loading: true,
      error: "",
      success: "",
    });

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.headers.get("content-type")?.includes("application/json")) {
        throw new Error(
          "The contact service returned an unexpected response. Please try again later.",
        );
      }

      const result = await response.json();

      if (!response.ok || result.success !== true || result.email_sent !== true) {
        if (result.errors) {
          setFieldErrors((current) => ({
            ...current,
            ...result.errors,
          }));
        }

        const joinedErrors = result.errors ? Object.values(result.errors).join(" ") : "";

        throw new Error(result.message || joinedErrors || "Something went wrong.");
      }

      setStatus({
        loading: false,
        error: "",
        success:
          "Message sent successfully! Thank you for reaching out. I've received your message and will get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setFieldErrors({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to send your message right now. Please try again.",
        success: "",
      });
    }
  }

  function inputClass(error) {
    return `w-full rounded-2xl border bg-white/5 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/30 focus:bg-white/[0.08] ${error
        ? "border-red-400/50 focus:border-red-400/60"
        : "border-white/10 focus:border-neon-cyan/40"
      }`;
  }

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass-panel spotlight-card p-8 sm:p-10">
            <span className="section-kicker">Contact</span>
            <h2 className="section-heading">Let&apos;s build something remarkable.</h2>
            <div className="eyebrow-line" />
            <p className="mt-6 text-base leading-8 text-white/65">
              If you&apos;re working on AI products, data systems, or polished digital
              experiences, I&apos;d love to connect. Send a message using the form and I&apos;ll
              get back to you.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:nikettalekar@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/80 transition duration-300 hover:border-neon-cyan/30 hover:bg-white/10 hover:text-white"
              >
                <Mail size={18} className="text-neon-cyan" />
                nikettalekar@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/niket-talekar/"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/80 transition duration-300 hover:border-neon-cyan/30 hover:bg-white/10 hover:text-white"
              >
                <Linkedin size={18} className="text-neon-cyan" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/tallekar"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/80 transition duration-300 hover:border-neon-cyan/30 hover:bg-white/10 hover:text-white"
              >
                <Github size={18} className="text-neon-cyan" />
                GitHub Projects
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="glass-panel p-8 sm:p-10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/60">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  maxLength={120}
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status.loading}
                  className={inputClass(fieldErrors.name)}
                />
                {fieldErrors.name && (
                  <p className="mt-2 text-sm text-red-300">{fieldErrors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-white/60">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nikettalekar@gmail.com"
                  maxLength={254}
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status.loading}
                  className={inputClass(fieldErrors.email)}
                />
                {fieldErrors.email && (
                  <p className="mt-2 text-sm text-red-300">{fieldErrors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your idea..."
                  maxLength={5000}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status.loading}
                  className={inputClass(fieldErrors.message)}
                />
                {fieldErrors.message && (
                  <p className="mt-2 text-sm text-red-300">{fieldErrors.message}</p>
                )}
              </div>

              {status.error && (
                <div role="alert" className="rounded-2xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                  {status.error}
                </div>
              )}

              {status.success && (
                <div role="status" className="rounded-2xl border border-neon-cyan/25 bg-neon-cyan/10 px-4 py-3 text-sm text-neon-cyan">
                  {status.success}
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-indigo px-6 py-3 font-medium text-space-975 transition duration-300 hover:-translate-y-1 hover:shadow-neon"
              >
                {status.loading ? (
                  <>
                    Sending...
                    <LoaderCircle size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
