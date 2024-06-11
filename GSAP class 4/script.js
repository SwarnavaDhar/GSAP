const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor")
const image = document.querySelector(".image")

// "dets" value is dependent on the event, it will perform differently
// For example ->   1) for "click" -> "pointerevent", 
//                  2) for "mousemove" -> "mouseevent"

// window.addEventListener("keypress", function(dets){
//     console.log(dets)
// })
// keyboardEvent -> if you press any key on the keyboard


main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration: 1
        // ease: "bounce"
    })
})
image.addEventListener("mousemove", function() {
    cursor.innerHTML = "View"
    gsap.from(cursor,{
        scale: 2,
        backgroundColor: "#ffffff"
    })
})
image.addEventListener("mouseleave", function(dets) {
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
        backgroundColor: "#808080"
    })
})

