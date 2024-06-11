const heading = document.querySelector("h1");
console.log(heading); // Output -> "<h1>Sheryians<h1>", It basically gives the whole selector as an output

const headingContent = heading.textContent
console.log(headingContent) // Output -> "Sheryians", It returns the content only, No selectors

// Now to break the whole heading into single elements we wull use ".split()"

function brokenText() {
    const splittedHeading = headingContent.split("")
    console.log(splittedHeading)
    
    var halfValue = (splittedHeading.length/2)
    console.log(halfValue)
    
    var clutter = ""
    
    splittedHeading.forEach(function (elem,index){
        console.log(index)
    
        if(index < halfValue)
            // console.log(elem)
            clutter += `<span class = "a"> ${elem} </span>` // breaks them into single element
        else{
            clutter += `<span class = "b"> ${elem} </span>`
        }
    })
    
    console.log(clutter)
    
    heading.innerHTML = clutter // puts every letter in the <span> tag
}

brokenText()

gsap.from(".a",{
    y:50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger:0.2 // if you give a negative value, the animation will be in reverse order
})
gsap.from(".b",{
    y:50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger:-0.3 // if you give a negative value, the animation will be in reverse order
})