import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function validate() {
    if (!form.name || !form.email || !form.message)
      return "Please fill all fields.";
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!re.test(form.email)) return "Please enter a valid email.";
    return null;
  }

  async function submit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ ok: false, msg: err });
      return;
    }

    // Send to Formspree / Netlify function / EmailJS etc.
    // Example (Formspree):
    // const res = await fetch('https://formspree.io/f/your-id', { method: 'POST', body: JSON.stringify(form), headers: {'Content-Type':'application/json'} })

    // For demo, we'll just simulate success:
    setTimeout(
      () => setStatus({ ok: true, msg: "Message sent. Thank you!" }),
      600
    );
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-sm">Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border px-3 py-2 rounded h-32"
        />
      </div>
      <div>
        <button type="submit" className="button-primary">
          Send Message
        </button>
      </div>
      {status && (
        <div
          className={`mt-2 p-2 rounded ${
            status.ok
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status.msg}
        </div>
      )}
    </form>
  );
}
