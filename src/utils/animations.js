import { TweenMax, Power3 } from "gsap";

export const introPageAnimation = (node, fullPath) => {
  switch (node.id) {
    case "about": {
      aboutIntroAnimation();
      break;
    }
    case "craftmanship": {
      craftmanshipIntroAnimation();
      break;
    }
    case "collection": {
      collectionIntroAnimation();
      break;
    }
    case "resources": {
      resourcesIntroAnimation();
      break;
    }
    default:
      homeIntroAnimation();
      break;
    // return null;
  }
};

export const outroPageAnimation = (node, fullPath) => {
  const path = fullPath.split("/")[1];
  switch (node.id) {
    case "about": {
      aboutOutroAnimation();
      break;
    }
    case "craftmanship": {
      craftmanshipOutroAnimation();
      break;
    }
    case "collection": {
      if (path !== "collection") {
        collectionOutroAnimation();
      }
      break;
    }
    case "resources": {
      if (path !== "resources") {
        // console.log('here')
        resourcesOutroAnimation();
      }
      break;
    }
    default:
      homeOutroAnimation();
      break;
    // return null;
  }
};

const homeIntroAnimation = () => {
  TweenMax.fromTo(
    "#home",
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
  );
};

const homeOutroAnimation = () => {
  TweenMax.fromTo(
    "#home",
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

const aboutIntroAnimation = () => {
  TweenMax.fromTo(
    "#about",
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
  );
};

const aboutOutroAnimation = () => {
  TweenMax.fromTo(
    "#about",
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

const craftmanshipIntroAnimation = () => {
  TweenMax.fromTo(
    "#craftmanship",
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
  );
};

const craftmanshipOutroAnimation = () => {
  TweenMax.fromTo(
    "#craftmanship",
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

const collectionIntroAnimation = () => {
  TweenMax.to("#collection", 0.4, {
    opacity: 1,
    ease: Power3.easeOut,
    delay: 0.3
  });
};

const collectionOutroAnimation = () => {
  TweenMax.fromTo(
    "#collection",
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

const resourcesIntroAnimation = () => {
  TweenMax.to("#resources", 0.4, {
    opacity: 1,
    ease: Power3.easeOut,
    delay: 0.3
  });
};

const resourcesOutroAnimation = () => {
  TweenMax.fromTo(
    "#resources",
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
  // console.log('OUTRO')
  TweenMax.fromTo(
    node,
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

