var menu = document.querySelector(".nav i")
var close = document.querySelector(".full ul i")

var tl = gsap.timeline() //paused:true -> pauses the whole timeline
tl.to(".full",{
    right: 0,
    duration: 0.5
})
tl.from(".full ul li",{
    x:1000,
    duration:0.5,
    stagger: 0.2,
    opacity: 0
})
tl.from(".full ul i",{
    opacity: 0
})
tl.pause() // 2nd way - pauses the whole timeline

menu.addEventListener("click", function(){
    tl.play()
})
close.addEventListener("click", function(){
    tl.reverse() // 2nd way - pauses the whole timeline
})


