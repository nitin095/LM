var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

var page = 1;

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        page--;
        // gsap.to(Obj2.position, 4, { x: 0, ease: Expo.easeOut });
        gsap.to(Obj2.rotation, 4, { y: page, ease: Expo.easeOut });
        // gsap.to(Obj3.position, 4.5, { x: 0, ease: Expo.easeOut });
        gsap.to(Obj3.rotation, 4.5, { y: page, ease: Expo.easeOut });
        // gsap.to(Obj4.position, 5, { x: 0, ease: Expo.easeOut });
        gsap.to(Obj4.rotation, 5, { y: page, ease: Expo.easeOut });
        // gsap.to(Obj5.position, 5.5, { x: 0, ease: Expo.easeOut });
        gsap.to(Obj5.rotation, 5.5, { y: page, ease: Expo.easeOut });
        console.log(page)
    } else {
        page++;
        // gsap.to(Obj2.position, 4, { x: 1, ease: Expo.easeOut });
        gsap.to(Obj2.rotation, 4, { y: -page, ease: Expo.easeOut });
        // gsap.to(Obj3.position, 4.5, { x: 1, ease: Expo.easeOut });
        gsap.to(Obj3.rotation, 4.5, { y: -page, ease: Expo.easeOut });
        // gsap.to(Obj4.position, 5, { x: 1, ease: Expo.easeOut });
        gsap.to(Obj4.rotation, 5, { y: -page, ease: Expo.easeOut });
        // gsap.to(Obj5.position, 5.5, { x: 1, ease: Expo.easeOut });
        gsap.to(Obj5.rotation, 5.5, { y: -page, ease: Expo.easeOut });
        console.log(page)
    }
    // var tp = new TimelineMax();
    // tp.to('#mainText,#lowerText', 0, { opacity: 0, scale: 1.2, ease: Circ.easeOut });
    // tp.to('#mainText', 1, { scale: 1, rotationZ: 0.01, ease: Circ.easeOut });
    // tp.to('#mainText', 0, { opacity: 1 }, "-0.9");
    // tp.to('#lowerText', 0, { opacity: 1 });
    // tp.to('#lowerText', 1, { scale: 1, rotationZ: 0.01, ease: Circ.easeOut });

    document.querySelectorAll('#lowerText .letter').forEach(l => l.style.opacity = 0);

    var tp2 = new TimelineMax();
    tp2.to('#navBtn', 0.5, { scaleX: 0, ease: Circ.easeOut })
    tp2.to('#navBtn', 1, { scaleX: 1, ease: Circ.easeOut, delay: 1 })


    anime.timeline()
        .add({
            targets: '#mainText .letter',
            translateY: [50, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2800,
            delay: (el, i) => 300 + 30 * i
        }).add({
            targets: '#lowerText .letter',
            translateY: [50, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2800,
            offset: '-=2800',
            delay: (el, i) => 300 + 30 * i
        });


}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}