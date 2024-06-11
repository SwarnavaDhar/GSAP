// window.addEventListener("wheel", function(dets){
//     console.log(dets.deltaY) // Gives value according to scrol wheels, up down motion
// })

function ScrollAnimation(){
    window.addEventListener("wheel", function(dets){
        if(dets.deltaY>0){
            gsap.to(".marquee",{
                transform: 'translateX(-200%)',
                duration: 5,
                repeat: -1,
                ease: "none"
            })
            gsap.to(".marquee img",{
                rotate: 180 
            })
        }
        else{
            gsap.to(".marquee",{
                transform: 'translateX(100%)',
                duration: 5,
                repeat: -1,
                ease: "none"
            })
            gsap.to(".marquee img",{
                rotate: 0 
            })
        }   
    })
}

ScrollAnimation()