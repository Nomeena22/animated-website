const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let tl = gsap.timeline({
    scrollTrigger:{
        trigger : "#two",
        start : "50% 50%",
        end : "120% 50%",
        markers : true,
        scrub : 1 ,
        duration : 2
    },
    
})
tl.to(".text-area-2",{
    width : "100%" ,
    y : "3"
    
},"a")
.tl.to(".text-area-2>span",{
    width : "100%" ,
    y : "3"
    
},"a")