function openCartBox() {
  const x = document.querySelector("#cartBox");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

const wrapper = document.querySelectorAll(".content")[0];

const up = document.querySelector("#prevButton");
const down = document.querySelector("#nextButton");

const items = document.querySelector(".items");
const products = document.querySelectorAll(".products");
const boxHeight = 116;
const wrapHeight = 696; //(items.height - 1) * boxHeight;
const viewHeight = 348; //wrapper.offsetHeight;

//gsap.set(wrapper, { height: 696 });
//gsap.set(items, { y: (i) => i * boxHeight });

const animation = gsap.to(".items", {
  duration: 1,
  y: "+=" + (wrapHeight + boxHeight),
  ease: "easeOut",
  paused: true,
});

const proxy = document.createElement("div");

Draggable.create(proxy, {
  type: "y",
  trigger: "#wrapper",
  throwProps: true,
  onDrag: updateProgress,
  onThrowUpdate: updateProgress,
  snap: {
    y: gsap.utils.snap(boxHeight)
  }
});

function updateProgress() {
  const val = this.y / wrapHeight;
  animation.progress(gsap.utils.wrap(0, 1, val));
}

const animatePrev = animateCarousel.bind(up, -boxHeight);
const animateNext = animateCarousel.bind(down, boxHeight);

function animateCarousel(delta) {
  gsap.to(items, {
    duration: 0.2,
    y: "+=" + delta,
  });
}

up.addEventListener("click", animatePrev);
down.addEventListener("click", animateNext);
