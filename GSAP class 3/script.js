var path = "M 10 100 Q 500 100 990 100"
var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector(".string");

// string.addEventListener("mouseenter", function(){
//     console.log("entered")
// });
// string.addEventListener("mouseleave", function(){
//     console.log("left")
// });

string.addEventListener("mousemove", function(dets){
    // console.log("X:", dets.clientX);
    // console.log("Y:", dets.clientY);
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path",{
        attr: {d:path},
        duration:0.5,
        ease:"elastic.out(1,0.2)"
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})


// string.addEventListener("mouseleave", function(dets){
//     console.log(dets)
// })



