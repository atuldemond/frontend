gsap.from("#page1 #circle", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
gsap.from("#page2 #circle", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #circle",
    scroller: "body",
    markers: true,
    scrub: 5,
  },
});
gsap.from("#page3 #circle", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
