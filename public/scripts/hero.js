let tl = gsap.timeline({
    scrollTrigger: {
        // markers:true,
        trigger: "#nameProject",
        pin: true,
        start: "center center-=10%",
        end: "center center-=50%",
        scrub: 3,
        snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1
        }
    },
});

tl.addLabel('start')
tl.from("#ppunk", { rotation: 45, scale: 7, ease: "power.in" });
tl.from("#nameProject", { scale: 0.5 }, "<");
tl.from("#hero", { scale: 0.5, ease: "power.in" }, "<");
tl.addLabel('end')



