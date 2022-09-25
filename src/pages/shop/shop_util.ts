import gsap, { Power0, Power3 } from "gsap";
export let handleOpenFilter = () => {
  let tl = new (gsap.timeline as any)();
  tl.to(document.querySelector(".shopPage__overlay"), {
    duration: 0.2,
    ease: Power0.easeInOut,
    display: "block",
    right: 0,
  }).to(document.querySelector(".filter"), {
    duration: 0.6,
    ease: Power0.easeInOut,
    display: "block",
    right: 0,
    delay: -0.3,
  });
};

export let handleCloseFilter = () => {
  let tl = new (gsap.timeline as any)();
  tl.to(document.querySelector(".filter"), {
    duration: 0.9,
    ease: Power3.easeInOut,
    display: "none",
    right: "-100%",
  }).to(document.querySelector(".shopPage__overlay"), {
    duration: 0.8,
    ease: Power3.easeInOut,
    display: "none",
    right: "-100%",
    delay: -0.6,
  });
};
