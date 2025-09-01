function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("hidden");
  });
  // Show selected section
  document.getElementById(sectionId).classList.remove("hidden");
}
// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent.");
});