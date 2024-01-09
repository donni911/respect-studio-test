import gsap from "gsap";

export const revealByLetters = (string) => {
  const titleChars = string.textContent.trim().split(" ");

  string.innerHTML = titleChars
    .map(
      (word, index) =>
        `<div>${word
          .split("")
          .map((letter) => `<span>${letter}</span>`)
          .join("")}${index === titleChars.length - 1 ? "" : "&nbsp;"}</div>`
    )
    .join("");

  Array.from(string.children).forEach((el, index) => {
    gsap.from(el.children, {
      opacity: 0,
      delay: 0.1 * index,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom bottom",
      },
    });
  });
};

export const revealByWords = (string, start = "90") => {
  const titleWords = string.textContent.trim().split(" ");

  string.innerHTML = titleWords
    .map(
      (word, index) =>
        `<div>${word}${index === titleWords.length - 1 ? "" : "&nbsp;"}</div>`
    )
    .join("");

  const wordSpans = Array.from(string.children);

  gsap.set(wordSpans, { opacity: 0 });

  gsap.fromTo(
    wordSpans,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      stagger: 0.1,
      ease: "step(1)",
      scrollTrigger: {
        trigger: string,
        start: `top ${start}%`,
        end: "bottom bottom",
      },
    }
  );
};

export const fadeIn = (el, duration = 0.5) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
    },
    {
      duration: duration,
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom bottom",
      },
    }
  );
};
