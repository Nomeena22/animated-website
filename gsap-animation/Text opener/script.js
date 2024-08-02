var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    start : "50% 50%",
    end : "100% 50%",
    markers :"true",
    scurb : 2,
    pin: true
}});
tl.to("#top", {
    top: "-50%"
},'same')
.to("#bottom", {
    bottom : "-50%"
},'same')