import gsap, { Power3 } from "gsap";

// let animation = (
//   el: Element | null,
//   duration: number,
//   opacity: number,
//   top: string,
//   display: string
// ) => {
//   gsap.to(el, {
//     duration: duration,
//     opacity: opacity,
//     display: display,
//     top: top,
//     ease: Power3.easeInOut,
//   });
// };
export let handleOpenOverlay = (el: Element | null) => {
  let tl = new (gsap.timeline as any)();
  tl.to(el, {
    duration: 0.4,
    opacity: 2,
    display: "flex",
    top: "0",
    ease: Power3.easeInOut,
  }).to(el?.childNodes[2].childNodes, {
    duration: 0.25,
    opacity: 2,
    ease: Power3.easeInOut,
    stagger: 0.1,
    delay: 0.1,
  });
};
export let handleCloseOverlay = (el: Element | null) => {
  let tl = new (gsap.timeline as any)();
  tl.to(el?.childNodes[2].childNodes, {
    duration: 0.25,
    opacity: 0,
    stagger: 0.1,
    delay: -0.1,
    ease: Power3.easeInOut,
  }).to(el, {
    duration: 0.5,
    opacity: 0,
    display: "none",
    top: "-100%",
    ease: Power3.easeInOut,
  });
};

export let handleOpenProfileDash = (el: Element | null) => {
  let tl = new (gsap.timeline as any)();
  tl.to(el, {
    duration: 0.4,
    opacity: 2,
    display: "flex",
    height: "100vh",
    ease: Power3.easeInOut,
  });
};
export let handleCloseProfileDash = (el: Element | null) => {
  let tl = new (gsap.timeline as any)();
  tl.to(el, {
    duration: 0.4,
    opacity: 0,
    display: "none",
    height: "0",
    ease: Power3.easeInOut,
  });
};
