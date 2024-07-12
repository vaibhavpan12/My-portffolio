

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

function smoothscroll() {
    function smootscrolling() { }
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



function skillanimaiton() {
    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.main-section',
            pin: true,
            start: '50% 50%',
            end: '150% 50%',
            scrub: true,
            // markers: true,
        }
    });

    tl1.to("#animation", {
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
        scrollTrigger: {
            trigger: '.page2',
            start: '0% 50%',
            end: '50% 50%',
            scrub: true,
            // markers: true

        }
    });
    t1.to(".bg", {
        rotate: 180

    })
    t1.to("#myimg", {
        bottom: "-300px",
        width: "150px",
        left: 0,

    }, 0)
    t1.to(".imagbg", {
        scale: 1
    }, 0)
    t1.to("#myimg", {
        opacity: 0
    }, 0)


    let t2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.page3',
            start: '2% 50%',
            end: '65% 50%',
            scrub: true,
            // markers: true

        }
    });
    t2.to(".bg", {

        rotate: 360

    }, 0)
    t2.from(".page3 h1", {
        y: 50,
        opacity: 0,

    }, 0)
    t2.from(".starbuks", {
        y: 50,
        opacity: 0,

    })

    t2.from(".swt", {
        y: 50,
        opacity: 0,

    })

    t2.from(".flaashnet", {
        y: 50,
        opacity: 0,

    })

    t2.from(".gemini", {
        y: 50,
        opacity: 0,

    })

    t2.from(".shopper", {
        y: 50,
        opacity: 0,

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
    t3.from(".mail", {
        y: 50,
        opacity: 0
    })
    t3.from(".navi a", {
        y: 50,
        opacity: 0
    })
    t3.from(".contact-form input ", {
        y: 50,
        opacity: 0
    })
    t3.from(".form-group textarea ", {
        y: 50,
        opacity: 0
    })
    t3.from(".navcon a", {
        y: 50,
        opacity: 0
    })
    t3.from("#copyright", {
        y: 50,
        opacity: 0
    })
}
bgrotaion()

