gsap.from(".page1 .box",{
    scale:0,
    duration:1,
    delay:1,
    rotate:180
})
// gsap.from(".page2 .box",{
//     scale:0,
//     duration:1,
//     delay:1,
//     rotate:180
// })

// gsap.from(".page3 .box",{
//     scale:0,
//     duration:1,
//     delay:1,
//     rotate:180
// })

// Now we are implementing the scroll trigger functionality (easy way)

// gsap.from(".page2 .box",{
//     scale:0,
//     duration:1,
//     delay:1,
//     rotate:180,
//     scrollTrigger : ".page2 .box" // element names
// })

// Now we are implementing the scroll trigger functionality (hard way // best way)
gsap.from(".page2 .box",{
    scale:0,
    duration:1,
    delay:1,
    rotate:180,
    backgroundColor:'red',
    scrollTrigger : { /// by creating objects in scrollTrigger
        trigger: ".page2 .box", // element names
        scroller: "body",
        markers: true, // just to check the start and end point of markers
        start : "top 50%" // just to check the start and end point of markers
    } 
})

gsap.from(".page3 .box h1",{
    opacity:0,
    y:200,
    duration:1,
    delay:1,
    rotate:180,
    scrollTrigger : { // by creating objects in scrollTrigger
        trigger: ".page3 .box h1", // element names
        scroller: "body",
    } 
})

gsap.from(".page3 .box",{
    scale:2,
    opacity:0,
    x:100,
    duration:1,
    delay:1,
    rotate:360,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        scrub:2, // It is basically happens with scrolling, whenever we scroll over screen tha animation takes place, this basically happens within the, scroller-start and scroller-end
        pin:true // It works work with scrolling, as we scroll, the element will apply all the mentioned gsap properties
    }
})


