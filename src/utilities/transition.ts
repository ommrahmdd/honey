import gsap, { Power3, Power0 } from "gsap";

export let fromLeft = (el: Element | null) => {
  gsap.to(el, {
    duration: 1,
    ease: Power3.easeInOut,
    display: "flex",
    width: "100%",
    delay: 0.18,
    opacity: 1,
  });
};
export let toLeft = (el: Element | null) => {
  gsap.to(el, {
    duration: 1,
    ease: Power3.easeInOut,
    display: "none",
    width: "0",
    delay: 0.5,
    opacity: 0,
  });
};
export let fadeIn = (el: Element | null) => {
  gsap.to(el, {
    duration: 0.4,
    ease: Power0.easeInOut,
    delay: 0.5,
    opacity: 1,
  });
};
export let fadeOut = (el: Element | null) => {
  gsap.to(el, {
    duration: 0.4,
    ease: Power0.easeInOut,
    // delay: 0.5,
    opacity: 0,
  });
};
