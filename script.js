```javascript
// ==============================
// نجوم وقلوب في الخلفية
// ==============================

const stars = document.getElementById("stars");

const symbols = ["✦", "✧", "♡", "⋆", "✿"];

for (let i = 0; i < 35; i++) {

  const star = document.createElement("span");

  star.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.fontSize =
    (8 + Math.random() * 14) + "px";

  star.style.animationDuration =
    (3 + Math.random() * 5) + "s";

  star.style.animationDelay =
    Math.random() * 4 + "s";

  stars.appendChild(star);
}


// ==============================
// ظهور العناصر أثناء النزول
// ==============================

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          revealObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// ==============================
// قلوب تظهر عند الضغط
// ==============================

document.addEventListener("click", function (event) {

  const heart = document.createElement("div");

  heart.textContent =
    ["♡", "♥", "✦", "✧"][
      Math.floor(Math.random() * 4)
    ];

  heart.style.position = "fixed";
  heart.style.left = event.clientX + "px";
  heart.style.top = event.clientY + "px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "9999";
  heart.style.color =
    ["#df78a5", "#c59aed", "#f09aba"][
      Math.floor(Math.random() * 3)
    ];
  heart.style.fontSize =
    (18 + Math.random() * 18) + "px";

  document.body.appendChild(heart);

  heart.animate(

    [
      {
        transform: "translateY(0) scale(.5)",
        opacity: 1
      },
      {
        transform:
          `translateY(-100px) translateX(${Math.random() * 60 - 30}px) scale(1.3)`,
        opacity: 0
      }
    ],

    {
      duration: 1000,
      easing: "ease-out"
    }

  );

  setTimeout(() => {
    heart.remove();
  }, 1000);

});


// ==============================
// تأثير بسيط للماوس
// ==============================

document.addEventListener("mousemove", (event) => {

  const x =
    (event.clientX / window.innerWidth - 0.5) * 10;

  const y =
    (event.clientY / window.innerHeight - 0.5) * 10;

  document.querySelectorAll(".sparkle").forEach((item, index) => {

    const speed = (index + 1) * 0.5;

    item.style.transform =
      `translate(${x * speed}px, ${y * speed}px)`;

  });

});
```
