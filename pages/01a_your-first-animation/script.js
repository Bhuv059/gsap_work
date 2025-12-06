gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });
    // box-shadow pulse
    gsap.to(".card", {
      boxShadow: "0 20px 80px rgba(29,298,98,0.8)", // stronger shadow
      repeat: -1,
      yoyo: true,
      //ease: "power1.inOut",
      duration: 1,
    });
  },
});
