export const activeLinks = [
  { title: "Home", id: "#home" },
  { title: "About Us", id: "#about" },
  { title: "Features", id: "#features" },
  { title: "Pricing", id: "#pricing" },
  { title: "Testimonials", id: "#testimonials" },
  { title: "Contact Us", id: "#faqs" },
];

// export const scrollToSection = (id) => {
//   const section = document.querySelector(id);
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth" });
//   }
// };

// export const scrollToSection = (id) => {
//   const section = document.querySelector(id);
//   if (section) {
//     const yOffset = -77; // Negative value to offset by 77px upwards
//     const y =
//       section.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//   }
// };

export const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    let yOffset = 0; // Default no offset
    if (window.innerWidth < 640) {
      // Apply offset if screen is less than 'sm' size
      yOffset = -77; // Negative value to offset by 77px upwards
    }

    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
