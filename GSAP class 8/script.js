function animation(){
    var tl = gsap.timeline()
    tl.from(".logo h1, .navelements ul li, .navelements button",{
        y: -30,
        opacity: 0,
        duration: 0.5,
        delay:1,
        stagger: 0.2
    })
    tl.from(".text h1",{
        x: -200,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".text p",{
        x: -100,
        opacity: 0,
        duration: 0.3
    })
    tl.from(".text button",{
        x: -100,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".banner img",{
        x: 100,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".logos img",{
        y: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 0",
        scrub: 2
    }
});

tl2.from(".service-head h1, .service-head p", {
    x: -200,
    opacity: 0,
});

tl2.from("#first",{
    x: -200,
    opacity: 0,  
})
tl2.from("#second",{
    x: 200,
    opacity: 0,   
})
tl2.from("#third",{
    x: -200,
    opacity: 0,    
})
tl2.from("#fourth",{
    x: 200,
    opacity: 0,
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        scroller: "body",
        scrub: 1
    }
})
tl3.from(".contact",{
    x:-200,
    opacity:0
})
tl3.from("#contact-para",{
    x:200,
    opacity:0,
})




animation()


