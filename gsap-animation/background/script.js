$(document).ready(function(){
    var $scramble = $(".scramble");
    $scramble.scramble(3000, 20, "alphabet" , true)
});

// ye animation dealy krne k liye likha gya hy agar ye nhi likhen gy t animation foran se hojaega
var tl = gsap.timeline();
tl.to(".loading" ,{
    opacity: 0,
    delay : 2.5,

})

//page ko oper bhejne k liye ab ye lines likhe hen
.to(".loader" ,{
    opacity : 0,
    duration: 1 , 
    ease : "Expo.easeInOut",
})
.to(".loader",{
    y:"-100%",
    duration : 1,
})