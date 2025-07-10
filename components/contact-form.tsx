"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { api } from "@/lib/api";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    to: "raaghvv0508@gmail.com", // ✅ Destination email to be sent to backend
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const data = await api.contact(formData);
      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
          to: "raaghvv0508@gmail.com",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="card p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Send me a message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="to" value={formData.to} />
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message *
          </label>
          <textarea
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 text-white py-3 rounded-lg"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>

        <AnimatePresence>
          {submitStatus === "success" && (
            <motion.div className="text-green-600 flex gap-2 items-center mt-4">
              <CheckCircle className="w-5 h-5" />
              Message sent successfully!
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div className="text-red-600 flex gap-2 items-center mt-4">
              <AlertCircle className="w-5 h-5" />
              Failed to send message. Try again later.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
