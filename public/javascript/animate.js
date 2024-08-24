const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const topMenu = document.getElementById("top-menu");
const closeMenuIcon = document.getElementById("close-menu-icon");

// Function to show the top menu
function openMenu() {
  gsap.to(topMenu, {
    duration: 0.5,
    top: 40,
    ease: "power2.out",
  });
  gsap.to(hamburgerIcon, {
    duration: 0.5,
    opacity: 0,
    rotate: 90,
    ease: "power2.out",
    onComplete: () => {
      hamburgerIcon.style.display = "none";
      closeIcon.style.display = "block";
      topMenu.style.position = "relative";
      gsap.to(closeIcon, {
        duration: 0.5,
        opacity: 1,
        rotate: 0,
        ease: "power2.in",
      });
    },
  });
}

// Function to hide the top menu
function closeMenu() {
  gsap.to(topMenu, {
    duration: 0.5,
    top: -500,
    ease: "power2.in",
  });
  gsap.to(closeIcon, {
    duration: 0.5,
    opacity: 0,
    rotate: -90,
    ease: "power2.in",
    onComplete: () => {
      closeIcon.style.display = "none";
      hamburgerIcon.style.display = "block";
      topMenu.style.position = "absolute";
      gsap.to(hamburgerIcon, {
        duration: 0.5,
        opacity: 1,
        rotate: 0,
        ease: "power2.out",
      });
    },
  });
}

// Event listeners for opening and closing the menu
hamburgerIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
