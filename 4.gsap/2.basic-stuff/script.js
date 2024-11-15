console.log("js is ---connected");
gsap.to("#box", {
  x: 400,
  duration: 3,
  delay: 0.5,
  rotate: 360,
});

gsap.from("#box2", {
  x: 400,
  duration: 3,
  delay: 0.5,
});
