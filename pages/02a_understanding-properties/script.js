import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotationX: 360,
  background: "#aabbcc",
  borderRadius: "50%",
  scale: 0.8,
  duration: 2,
  x: 200,
  delay: 0.5,
  ease: "bounce",
  /* repeat: -1,
  repeatDelay: 2,
  yoyo: true, 
  paused: true, */
});
