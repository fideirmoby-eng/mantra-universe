import { useState } from "react";
import commissionOptions from "../../data/commissionOptions";

export default function CommissionForm() {
  const [selectedProject, setSelectedProject] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    description: "",
    timeline: "",
    budget: "",
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const buildMessage = () => {
    return `
Project:
${selectedProject}

Name:
${formData.name}

Email:
${formData.email}

Country:
${formData.country}

Timeline:
${formData.timeline}

Budget:
${formData.budget}

Description:
${formData.description}
`.trim();
  };

  const handleTelegram = () => {
    const message = encodeURIComponent(buildMessage());

    window.open(
      `https://t.me/mantra_universe?text=${message}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    const message = encodeURIComponent(buildMessage());
    const subject = encodeURIComponent(
      "MANTRA Universe — Commission Inquiry"
    );

    window.location.href = `mailto:mantrauniverse1@gmail.com?subject=${subject}&body=${message}`;
  };

  return (
    <section className="mx-auto mt-40 max-w-4xl">
      <div className="mb-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
          Start Your Commission
        </p>

        <h2 className="font-serif text-4xl md:text-5xl">
          Let's begin the conversation.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          Every commission begins with an idea. Share as much or as little as
          you like the goal is simply to start the conversation.
        </p>
      </div>

      <form className="space-y-12">
        <div>
          <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-white/50">
            Your Name
          </label>

          <input
            type="text"
            value={formData.name}
            onChange={handleChange("name")}
            placeholder="John Smith"
            className="w-full border-b border-white/20 bg-transparent py-4 outline-none transition focus:border-white"
          />
        </div>

        <div>
          <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-white/50">
            Email Address
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            placeholder="john@email.com"
            className="w-full border-b border-white/20 bg-transparent py-4 outline-none transition focus:border-white"
          />
        </div>

        <div>
          <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-white/50">
            Country
          </label>

          <input
            type="text"
            value={formData.country}
            onChange={handleChange("country")}
            placeholder="Spain"
            className="w-full border-b border-white/20 bg-transparent py-4 outline-none transition focus:border-white"
          />
        </div>

        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-white/50">
            What kind of project are you imagining?
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commissionOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedProject(option)}
                className={`p-5 text-left transition ${
                  selectedProject === option
                    ? "border border-white bg-white text-black"
                    : "border border-white/15 hover:border-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-white/50">
            Tell me about your vision
          </label>

          <textarea
            value={formData.description}
            onChange={handleChange("description")}
            rows={8}
            placeholder="Describe the idea, atmosphere, references or anything that helps me understand what you'd like to create."
            className="w-full border border-white/15 bg-transparent p-5 outline-none transition focus:border-white"
          />
        </div>

        <div>
          <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-white/50">
            Preferred Timeline (optional)
          </label>

          <input
            type="text"
            value={formData.timeline}
            onChange={handleChange("timeline")}
            placeholder="December 2026"
            className="w-full border-b border-white/20 bg-transparent py-4 outline-none transition focus:border-white"
          />
        </div>

        <div>
          <label className="mb-3 block text-sm uppercase tracking-[0.2em] text-white/50">
            Estimated Budget (optional)
          </label>

          <input
            type="text"
            value={formData.budget}
            onChange={handleChange("budget")}
            placeholder="€500 €1000"
            className="w-full border-b border-white/20 bg-transparent py-4 outline-none transition focus:border-white"
          />
        </div>

        <div className="flex flex-col gap-4 pt-10 md:flex-row">
          <button
            type="button"
            onClick={handleEmail}
            style={{ border: "1px solid rgba(255, 255, 255, 1)" }}
            className="flex-1 px-8 py-5 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Continue by Email
          </button>

          <button
            type="button"
            onClick={handleTelegram}
            style={{ border: "1px solid rgba(255, 255, 255, 1)" }}
            className="flex-1 px-8 py-5 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Continue with Telegram
          </button>
        </div>
      </form>
    </section>
  );
}