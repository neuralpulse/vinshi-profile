import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Work with me</h1>
      <p className="mb-6">
        Interested in collaborating? Fill the form and I will get back within 48
        hours.
      </p>
      <ContactForm />
    </div>
  );
}
