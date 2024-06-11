gsap.to(".page2 h1",{
    transform: "translateX(-170%)",
    scrollTrigger:{
        trigger: ".page2",
        scroller: "body",
        scrub: 1,
        pin:true // Whenever we use pin property we will apply that on the parent div
    }
})

// 1. GSAP used for animate elements
// 2. ScrollTrigger used for animate elements on basis of scrolling
// properties of scrollTrigger
// - trigger: 'select element you wants to trigger',
// -scroller: " body most of the times",
// -start : "animation start point",
// -end: "animation end point",
// -markers : " Boolean" -helps us to make perfect animtion  we can remove it later,
// -scrub: "Boolean or any no. between 1-5" -to make animation back and forth,
// -pin : pin the page while animating elements
//  ** note: while using pin property make sure trigger must be parent element