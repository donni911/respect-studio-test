import gsap from "gsap";

export const translateUp = (el) => {
  gsap.fromTo(
    el,
    {
      translateY: "15%",
    },
    {
      translateY: "0%",
      duration: 1,
      ease: "power2.out",
    }
  );
};
