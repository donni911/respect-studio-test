import gsap from "gsap";

export const translateUp = (el,from='15') => {
	gsap.fromTo(
		el,
		{
			translateY: `${from}%`,
		},
		{
			translateY: "0%",
			duration: 1,
			ease: "power2.out",
		},
	);
};

export const scaleImage = (el, parentTrigger = el) => {
	gsap.to(el, {
		scale: 1,
		duration: 1,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: parentTrigger,
			start: "top 65%",
			end: "bottom bottom",
		},
	});
};
