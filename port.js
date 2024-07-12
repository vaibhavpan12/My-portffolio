

function mouse3deffect() {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        document.querySelectorAll('.layer').forEach(Layer => {

            const speed = Layer.getAttribute('data-speed')
            const x = (window.innerWidth - e.pageX * speed) / 500
            const y = (window.innerWidth - e.pageY * speed) / 500
            Layer.style.transform = `translate(${x}px) translate(${y}px)`;
            Layer.style.zIndex = "999"
        });

    }
}
mouse3deffect()

function smoothscroll(){
    function smootscrolling(){}
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
}
smoothscroll()

function scroll() {

    let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.page2',
            // pin: true, // pin the trigger element while active
            start: '0% 50%', // when the top of the trigger hits the top of the viewport
            end: '50% 50%', // end after scrolling 500px beyond the start
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollba
            // markers: true

        }
    });
    tl.to("#myimg", {
        bottom: "-300px",
        width: "150px",
        left: 0,

    }, 0)
    tl.to(".imagbg", {
        scale: 1
    }, 0)
    tl.to("#myimg", {
        opacity: 0
    }, 0)

}
scroll()

function skillanimaiton() {
    let t2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.main-section',
            pin: true,
            start: '50% 50%',
            end: '150% 50%',
            scrub: true,
            // markers: true,
        }
    });

    t2.to("#animation", {
        opacity: 1,
        filter: "blur(0px)"
    })
        .to(".main-section h1", {
            opacity: 1,

        }, 0)
        .to("#logo", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#social", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#seo", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#adobe", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#reels", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#html", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#digital", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#webflow", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#figma", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#javascript", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#wordpress", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
        .to("#css", {
            opacity: 1,
            filter: "blur(0px)",
            delay: -0.3
        })
    // .to(".page3", {
    //     transform: 'translateY(-900px)',
    //     // top:"-500px",
    //     // delay:-0.1
    // })
}

skillanimaiton()

function nameanimation() {
    gsap.from(".name", {

        y: 50,
        opacity: 0,
        delay: 0.2,

    }, 0)
    gsap.from(".profestion", {
        opacity: 0,
        delay: 0.2
    }, 0)
}
nameanimation()


function page3animation() {
    let t3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.page3',
            // pin: true,
            start: '0% 50%',
            end: '50% 50%',
            scrub: true,
            // markers: true,
        }
    });

    t3.from(".page3 h1", {
        y: 50,
        opacity: 0,

    })
    t3.from(".starbucksimage", {
        y: 50,
        opacity: 0,

    })
    t3.from(".swtimage", {
        y: 50,
        opacity: 0,

    })
    t3.from(".flaashnetimage", {
        y: 50,
        opacity: 0,

    })
    t3.from(".geminiimage", {
        y: 50,
        opacity: 0,

    })
    t3.from(".shoppersimage", {
        y: 50,
        opacity: 0,

    })
}

page3animation()




function mousemove() {
    var circle = document.getElementById("circle")
    document.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        circle.style.top = y + "px";
        circle.style.left = x + "px";
    })
    var page3 = document.querySelector(".page1")
    page3.addEventListener("mouseenter", function () {
        circle.style.scale = 1;

    })
    page3.addEventListener("mouseleave", function () {
        circle.style.scale = 0;

    })
}
mousemove()



function footeranimaiton() {
    let t4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.page4',
            // pin: true,
            start: '5% 50%',
            end: '45% 50%',
            scrub: 1,
            // markers: true,
        }
    });

    t4.from(".mail", {
        y: 50,
        opacity: 0
    })
    t4.from(".navi a", {
        y: 50,
        opacity: 0
    })
    t4.from(".contact-form input ", {
        y: 50,
        opacity: 0
    })
    t4.from(".form-group textarea ", {
        y: 50,
        opacity: 0
    })
    // t4.from(".form-group button",{
    //     y:50,
    //     opacity:0
    // })
    // t4.from(".but a",{
    //     y:50,
    //     opacity:0
    // })
    t4.from(".navcon a", {
        y: 50,
        opacity: 0
    })
    t4.from("#copyright", {
        y: 50,
        opacity: 0
    })
}
footeranimaiton()

function navbaranimaiton() {
    navbar = document.querySelector(".menubar img")
    wrong = document.querySelector(".wrong")
    menu = document.querySelector(".menunav")
    navbar.addEventListener("click", function () {
        console.log("hello");
        menu.style.transform = "translateX(0px)";

    })
    wrong.addEventListener("click", function () {
        console.log("hello");
        menu.style.transform = "translateX(300px)";

    })

}
navbaranimaiton()


function bgrotaion() {
    let t1 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.page2',
            // pin: true, // pin the trigger element while active
            start: '0% 50%', // when the top of the trigger hits the top of the viewport
            end: '50% 50%', // end after scrolling 500px beyond the start
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollba
            // markers: true

        }
    });
    t1.to(".bg", {
        //   transform: 'rotate(100deg)'
        // top:'900px',
        rotate: 180

    })


    let t2 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.page3',
            // pin: true, // pin the trigger element while active
            start: '0% 50%', // when the top of the trigger hits the top of the viewport
            end: '50% 50%', // end after scrolling 500px beyond the start
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollba
            // markers: true

        }
    });
    t2.to(".bg", {

        rotate: 360

    })


    let t3 = gsap.timeline({

        scrollTrigger: {
            trigger: '.page4',
            start: '0% 50%',
            end: '50% 50%',
            scrub: true,
            // markers: true

        }
    });
    t3.to(".bg", {
        rotate: 530

    })
}
bgrotaion()

