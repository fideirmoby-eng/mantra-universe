import ContactHero from "../components/contact/ContactHero";
import ContactGeneral from "../components/contact/ContactGeneral";
import ContactCollect from "../components/contact/ContactCollect";
import ContactCommission from "../components/contact/ContactCommission";
import ContactAlternative from "../components/contact/ContactAlternative";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ContactHero />
      <ContactGeneral />
      <ContactCollect />
      <ContactCommission />
      <ContactAlternative />
    </main>
  );
}