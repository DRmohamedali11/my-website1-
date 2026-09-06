document.addEventListener("DOMContentLoaded", () => {

/* ظهور الأقسام أثناء النزول */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
(entries) => {

```
  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

},
{
  threshold: 0.12
}
```

);

revealElements.forEach((element) => {
observer.observe(element);
});

/* نجوم وقلوب إضافية */

const starsContainer = document.querySelector(".stars");

if (starsContainer) {

```
const symbols = ["✦", "♡", "✧", "·"];

for (let i = 0; i < 12; i++) {

  const star = document.createElement("span");

  star.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  star.style.left = Math.random() * 95 + "%";
  star.style.top = Math.random() * 95 + "%";

  star.style.fontSize =
    8 + Math.random() * 15 + "px";

  star.style.animationDelay =
    Math.random() * 4 + "s";

  star.style.animationDuration =
    2.5 + Math.random() * 3 + "s";

  starsContainer.appendChild(star);
}
```

}

/* حركة بسيطة لعالم بسملة */

const universe = document.querySelector(".universe-box");

if (universe) {

```
universe.addEventListener("mousemove", (event) => {

  const rect = universe.getBoundingClientRect();

  const x =
    (event.clientX - rect.left) / rect.width - 0.5;

  const y =
    (event.clientY - rect.top) / rect.height - 0.5;

  const center =
    universe.querySelector(".universe-center");

  if (center) {

    center.style.transform =
      `translate(calc(-50% + ${x * 12}px), calc(-50% + ${y * 12}px))`;
  }

});

universe.addEventListener("mouseleave", () => {

  const center =
    universe.querySelector(".universe-center");

  if (center) {

    center.style.transform =
      "translate(-50%, -50%)";
  }

});
```

}

/* حركة خفيفة للبطاقات */

document.querySelectorAll(".thing").forEach((card) => {

```
card.addEventListener("mouseenter", () => {
  card.style.boxShadow =
    "0 25px 50px rgba(180,130,160,.18)";
});

card.addEventListener("mouseleave", () => {
  card.style.boxShadow = "none";
});
```

});

});
