let tl = gsap.timeline({
    scrollTrigger: {
        // markers:true,
        trigger: "#nameProject",
        pin: "#nameProject",
        start: "center center",
        end: "center center-=10%",
        scrub: 3,
        snap: {
            snapTo: 'labels',
            duration: { min: 1, max: 2 },
        }
    },
});
gsap.set("#details",{opacity:0, yPercent:200})
tl.addLabel('start')
tl.to("#ppunk", {rotation: 0, scale: 1.25, xPercent : "-=105", yPercent : -10, ease: "power.in" });
tl.to("#nameProject", { scale: 1 }, "<");
tl.to("#hero", { scale: 1, ease: "power.in" }, "<");
tl.to("#details", {yPercent:0, delay:1, duration:2, opacity:1, ease: "power.in" });
tl.addLabel('end')

if (window.scrollY === 0) {
    // Déclencher l'animation avec GSAP après un délai de 2 secondes
    gsap.to(window, {
      delay: 2,
      duration: 2,
      scrollTo: { y: '#nameProject', autoKill: true },
      ease: "power4.out"
    });
  }
// gsap.to(window,{delay:2, duration:2,scrollTo:{y:'#nameProject', autoKill: true  },ease: "power4.out"})



