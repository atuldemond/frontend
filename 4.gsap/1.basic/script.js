console.log("js is ---connected");
var tl = gsap.timeline();
tl.to("#box1", {
  x: 400,
  duration: 3,
  delay: 0.5,
  rotate: 360,
});

tl.from("#box2", {
  x: 400,
  duration: 3,
  delay: 0.5,
});

tl.from("#box3", {
  x: 400,
  duration: 3,
  delay: 0.5,
  scale: 0.5,
});
