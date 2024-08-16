var tl = gsap.timeline({scrollTrigger :{
    trigger : "#main",
    // markers : true ,
    start: "75% 50%", 
    end :"100% 50%",
    scrub : 3,
    duration : 1,
    pin : true,
}})
.to (".img",{
    width : "100%",
    height : "100vh",
})