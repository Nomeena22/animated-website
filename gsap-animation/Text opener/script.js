var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    start : "50% 50%",
    end : "100% 50%",
    markers :"true",
    scurb : 2,
    pin: true,
    delay : 2,
    duration: 3,

}});
tl.to("#top", {
    top: "-50%"
},'same')
.to("#bottom", {
    bottom : "-50%"
},'same')
.to("#toph1", {
    top : "80%"
},'same')
.to("#bottomh1", {
    bottom : "-80%"
},'same')
// .to("#center", {
//     top : "0%"
// })
.to (".content", {
    marginTop : "0%",
    dealy : -0.2,
<<<<<<< HEAD
})
=======
})
>>>>>>> f670a9458dcf3bec91cb9dee7e304217c3d3c2d6
