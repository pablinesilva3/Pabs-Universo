// Animação suave ao rolar
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 40) {
    header.style.boxShadow = "0 3px 10px rgba(0,0,0,0.2)";
  } else {
    header.style.boxShadow = "none";
  }
});


// Criar glitter automaticamente
const glitter = document.createElement("div");
glitter.classList.add("glitter");
document.body.appendChild(glitter);

function createGlitter() {
    const sparkle = document.createElement("span");
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.animationDuration = 3 + Math.random() * 3 + "s";
    glitter.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 6000);
}

setInterval(createGlitter, 200);

