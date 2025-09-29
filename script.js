document.addEventListener("DOMContentLoaded", () => {
  /* ----------------------------- MOBILE MENU TOGGLE ----------------------------- */
  const hamburger = document.querySelector(".js-hamburger-menu");
  const navLinks = document.querySelector(".js-mobile-menu");
  const closeBtn = document.querySelector(".js-close-menu");

  if (hamburger && navLinks) {
    // Open the mobile menu when hamburger is clicked
    hamburger.addEventListener("click", () => {
      navLinks.classList.add("is-open");
    });
  }

  if (closeBtn && navLinks) {
    // Close the mobile menu when the close button (X) is clicked
    closeBtn.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
    });
  }

  /* ----------------------------- FAQ ACCORDION LOGIC ----------------------------- */
  const faqItems = document.querySelectorAll(".js-faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".js-faq-question");
    const answerContainer = item.querySelector(".faq-answer-container");
    const toggleIcon = item.querySelector(".faq-toggle-icon");

    answerContainer.style.height = "0";

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("is-active");

      if (isActive) {
        // Collapse this FAQ item
        answerContainer.style.height = "0";
        item.classList.remove("is-active");
        toggleIcon.textContent = "+";
      } else {
        // Collapse any other open FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem.classList.contains("is-active")) {
            const otherIcon = otherItem.querySelector(".faq-toggle-icon");
            otherItem.querySelector(".faq-answer-container").style.height = "0";
            otherItem.classList.remove("is-active");
            otherIcon.textContent = "+";
          }
        });

        // Expand the clicked FAQ item
        const innerAnswer = answerContainer.querySelector(".faq-answer");
        answerContainer.style.height = innerAnswer.scrollHeight + "px";
        item.classList.add("is-active");
        toggleIcon.textContent = "–";
      }
    });
  });
});
