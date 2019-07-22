import { TweenMax, Power3 } from "gsap";

export const introPageAnimation = (node, history, location) => {
  if (history.split('/')[1] !== location.split('/')[1]) {
    TweenMax.fromTo(
      node,
      0.3,
      { opacity: 0 },
      { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
    );
  } else {
    const subNode = document.querySelector('.collection, .resources');
    TweenMax.fromTo(
      subNode,
      0.3,
      { opacity: 0 },
      { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
    );
  }
};

export const outroPageAnimation = (node, history, location) => {
  if (history.split('/')[1] !== location.split('/')[1]) {
    TweenMax.fromTo(
      node,
      0.3,
      { opacity: 1 },
      { opacity: 0, ease: Power3.easeOut }
    );
  } else {
    const subNode = document.querySelector('.collection, .resources');
    TweenMax.fromTo(
      subNode,
      0.3,
      { opacity: 0 },
      { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
    );
  }
};
