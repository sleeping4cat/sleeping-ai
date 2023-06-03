const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-theme');
});

window.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    
    function toggleFooterVisibility() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.classList.add("show-footer");
      } else {
        footer.classList.remove("show-footer");
      }
    }
    
    toggleFooterVisibility();
    window.addEventListener("scroll", toggleFooterVisibility);
  });
  

window.addEventListener("DOMContentLoaded", function () {
    const revealTexts = function (elements) {
      elements.forEach(function (element) {
        const text = element.textContent;
        element.textContent = "";
  
        for (let i = 0; i < text.length; i++) {
          const charSpan = document.createElement("span");
          charSpan.textContent = text[i];
          charSpan.style.animationDelay = `${i * 50}ms`;
          element.appendChild(charSpan);
        }
      });
    };
  
    const projectTitles = document.querySelectorAll(".research-item h2");
    const projectDescriptions = document.querySelectorAll(".research-item p");
  
    revealTexts(projectTitles);
    revealTexts(projectDescriptions);
  });
  