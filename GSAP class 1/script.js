// gsap.to and from

 
gsap.to(".box",{
    x:900,
    duration:1,
    delay:1,
    rotate:145,
    backgroundColor:"yellow",
    borderRadius:"20%",
    scale:0.5,
    repeat:1,
    yoyo:true
})

gsap.to(".boxx",{
    y:500,
    duration:1,
    delay:3,
    repeat:1, // infinite times
    yoyo:true, // works with repeat property
})

gsap.from("h1",{
    opacity:0,
    delay:1,
    duration:1,
    x:50,
    y:30,
    stagger: 1 // If you have the same html element twice or >twice, then it will show them one by one
})
// Timeline - In timeline, all the things run in proper sequence, like a train boggy
var tl = gsap.timeline()
    tl.to(".rectangle",{
        x:150,
        duration:1,
        delay:5,
        borderRadius:500,
    })
    tl.to(".square",{
        x:250,
        duration:1,
        borderRadius:500
    })
