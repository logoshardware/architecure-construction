export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white text-black">

      <div className="max-w-xl mx-auto text-center">

        <h2 className="text-4xl font-semibold mb-6">
          Let’s build something
        </h2>

        <input
          placeholder="Email"
          className="w-full p-4 border mb-4"
        />

        <textarea
          placeholder="Message"
          className="w-full p-4 border mb-4"
        />

        <button className="bg-black text-white px-6 py-3">
          Send
        </button>

      </div>

    </section>
  );
}