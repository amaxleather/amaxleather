import { TweenMax, Power3 } from "gsap";

export const introPageAnimation = (node) => {
  TweenMax.fromTo(
    "#" + node.id,
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
  );
};

export const outroPageAnimation = (node) => {
  TweenMax.fromTo(
    "#" + node.id,
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

export const collectionSubIntro = node => {
  TweenMax.fromTo(
    node,
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.6 }
  );
};

export const collectionSubOutro = node => {
  TweenMax.fromTo(
    node,
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

export const resourcesSubIntro = node => {
  TweenMax.fromTo(
    node,
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.6 }
  );
};

export const resourcesSubOutro = node => {
  TweenMax.fromTo(
    node,
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

