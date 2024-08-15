import { useState } from "react";

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    fetch("https://formspree.io/f/xdkndodp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setStatusMessage(response.ok ? "Message sent!" : "Message failed.");
        setIsSending(false);
      })
      .catch(() => {
        setStatusMessage("Greška prilikom slanja poruke.");
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="bg-gray-100 p-5">
      <div className="mb-12 text-center">
        <h3 className="text-xl text-gray-600">Get in touch</h3>
        <h2 className="mt-2 text-2xl font-semibold">Contact me</h2>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col rounded-lg border bg-white p-6 shadow-lg md:w-3/4 lg:w-2/3 xl:w-1/2"
        >
          <label htmlFor="name" className="mb-2 block text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            placeholder="Your name"
            required
          />
          <label htmlFor="email" className="mb-2 block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            placeholder="Your email"
            required
          />
          <label htmlFor="message" className="mb-2 block text-lg font-medium">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            rows="4"
            placeholder="Your message..."
            required
          ></textarea>
          <button
            type="submit"
            className={`w-full rounded-md p-3 font-semibold text-white ${isSending ? "bg-gray-400" : "bg-gray-700 hover:bg-gray-800"}`}
            disabled={isSending}
          >
            {isSending ? "Sending to..." : "Send"}
          </button>
          {statusMessage && (
            <p className="mt-4 text-center text-lg font-medium text-gray-800">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Kontakt;
