import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Fill all fields");
      return;
    }
    setLoading(true);
    // Simulate a successful submission and show a friendly confirmation
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-6"
        >
          Contact
        </motion.h2>
        {!sent ? (
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg"
          >
            <div className="grid md:grid-cols-3 gap-4 -mt-2 mb-2">
              <div className="p-4 rounded-lg bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700">
                <div className="text-xs uppercase opacity-70">Email</div>
                <div className="font-medium">mpraveen1432004@gmail.com</div>
              </div>
              <div className="p-4 rounded-lg bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700">
                <div className="text-xs uppercase opacity-70">Phone</div>
                <div className="font-medium">+91 99441 62339</div>
              </div>
              <div className="p-4 rounded-lg bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700">
                <div className="text-xs uppercase opacity-70">Location</div>
                <div className="font-medium">Chennai, India</div>
              </div>
            </div>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 border rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 border rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message"
              className="p-3 border rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center p-12 bg-green-50 dark:bg-green-900 rounded-xl"
          >
            <h3 className="text-xl font-semibold">Thanks, message sent!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I’ll reply soon to your email. You can also reach me at
              {" "}
              <a className="text-indigo-600" href="mailto:mpraveen1432004@gmail.com">mpraveen1432004@gmail.com</a>.
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
export default Contact;
