import React from "react";
import Subscribe from "./_components/subscribe";

export default function Page() {
  return (
    <div className=" section-wrapper grid grid-cols-12 *:col-span-12 *:lg:col-span-6 gap-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5135958.664068144!2d5.177766176925525!3d51.05692250101311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2seg!4v1749777826591!5m2!1sen!2seg"
        width="600"
        height="450"
        style={{ border: 0, borderRadius: "10px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>

     <Subscribe/>
    </div>
  );
}
