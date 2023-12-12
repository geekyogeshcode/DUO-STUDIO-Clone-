let circle=document.querySelector('.circle');
let cursor=document.querySelector(".cursor");
let main1=document.querySelector('main')

let vid=document.querySelector('video')
// function circleMove(xscale1,yscale1){
//     window.addEventListener('mousemove',function(dets){
//         // console.log(dets)
//         circle.style.left=dets.x+5+"px"
//         // circle.style.top=dets.y+5+"px"
//         // circle.style.transform=`scaleX(${xscale1})`
//         // circle.style.transform=`scaleY(${yscale1})`
//         // circle.style.scaleY=yscale1
//         circle.style.transition="all ease-out 0.2s"

//     })
// }
// circleMove()


window.addEventListener('mousemove',function(dets){
    cursor.style.left=dets.x+5+"px"
    cursor.style.top=dets.y+5+"px"

})

vid.addEventListener('mouseenter',function(){
    cursor.style.width="75px"
    cursor.style.height="25px"
    cursor.style.borderRadius="5px"
    cursor.innerHTML="Sound ON"
    cursor.style.mixBlendMode="normal"
    cursor.style.color="black"
})
vid.addEventListener('mouseleave',function(){
    cursor.style.width="20px"
    cursor.style.height="20px"
    cursor.style.borderRadius="50%"
    cursor.innerHTML=""
    cursor.style.mixBlendMode="difference"
})



function locoTrigger(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoTrigger()


let t1=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:"main",
        // markers:true,
        start:"top 30%",
        end:"top 0%",
        scrub:3
    }
})

t1.to('.page1 h1',{
    x:-50,
},"anim")

t1.to(".page1 h2",{
    x:80
},"anim")

t1.to(".page1 video",{
    width:"90%"
},"anim")


let t2=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:"main",
        // markers:true,
        start:"top -130%",
        end:"top 120%",
        scrub:3
    }
})

t2.to("main",{
    backgroundColor:"White"
})

let t3=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:"main",
        // markers:true,
        start:"top -290%",
        end:"top -300%",
        scrub:3
    }
})

t3.to("main",{
    backgroundColor:"#000"
})


let boxes=document.querySelectorAll('.box')

boxes.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        // elem.style.backgroundColor="red"
        let att=elem.getAttribute("data-image")

        cursor.style.width="400px"
        cursor.style.height="300px"
        cursor.style.borderRadius="0"
        cursor.style.backgroundImage=`url(${att})`
        cursor.style.transform="translate(-50%)"
        cursor.style.borderRadius="10px"

    })

    elem.addEventListener('mouseleave',function(){
        elem.style.backgroundColor="transparent"
        cursor.style.height="30px"
        cursor.style.width="30px"
        cursor.style.borderRadius="50%"
        cursor.style.backgroundImage="none"

    })
})