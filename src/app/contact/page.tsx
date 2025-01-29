import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="text-5xl">Contact</h1>
      <ContactForm />
    </article>
  );
}
