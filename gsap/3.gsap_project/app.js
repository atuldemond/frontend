let tl = gsap.timeline()

tl.from(".header h3",{
 y:-50,
 opacity:0,
 duration:0.8,
 delay:0.4,
 stagger:0.3

})


tl.from(".div h1",{
    x:-50,
    opacity:0,
    duration:0.8,
    delay:0.4,
    stagger:0.3
   
})

tl.from(".div img",{
    x:100,
    opacity:0,
    duration:0.8,
    delay:0.4,
    stagger:0.5,
    rotate:45

})
