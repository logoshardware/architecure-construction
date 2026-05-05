"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setReply("");

    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
    });

    const data = await res.json();

    setReply(data.reply || "No response");
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <p className="text-gray-400">Contact</p>

          <h1 className="text-5xl md:text-7xl font-semibold mt-4">
            Let’s build something
          </h1>

          <p className="text-gray-500 mt-6 max-w-xl mx-auto">
            Tell us about your project. We respond within 24–48 hours.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="min-h-screen px-6 pb-24">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

          {/* INFO */}
          <div>
            <h2 className="text-4xl font-semibold">
              Get in touch
            </h2>

            <p className="text-gray-500 mt-6">
              Architecture studio focused on modern, high-end construction and design.
            </p>

            <div className="mt-10 space-y-4 text-gray-400">
              <p>Email: contact@studio.com</p>
              <p>Phone: +48 000 000 000</p>
              <p>Location: Poland</p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white text-black rounded-2xl p-8">

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                placeholder="Your name"
                className="w-full p-4 border rounded-xl"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-4 border rounded-xl"
                required
              />

              <textarea
                name="message"
                placeholder="Your message..."
                className="w-full p-4 border rounded-xl h-40"
                required
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl hover:scale-[1.02] transition"
              >
                {loading ? "Sending..." : "Send message"}
              </button>

            </form>

            {/* AI RESPONSE */}
            {reply && (
              <div className="mt-6 p-4 border rounded-xl bg-gray-50">
                <p className="text-sm font-medium mb-2">
                  AI Auto Reply:
                </p>
                <p className="text-sm whitespace-pre-wrap">
                  {reply}
                </p>
              </div>
            )}

          </div>

        </div>
      </section>

    </main>
  );
}