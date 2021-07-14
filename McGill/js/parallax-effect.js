$(document).ready(function () {

    ScrollTrigger.matchMedia({
        "(min-width: 993px)": function(){
            
            gsap.to('.title-overlay', {
                scrollTrigger : {
                    trigger: '#content1',
                    markers: false,
                    horizontal: false,
                    scrub: 1,
                    start: "center center",
                    end: "+=400"
                },
                x: 300,
                stagger: 0.1,
                duration: 3
            });
        
            // gsap.to('.title-wrapper', {
            //     scrollTrigger: {
            //         trigger: '.parallax-container',
            //         markers: true,
            //         horizontal: false,
            //         scrub: 1,
            //         start: $('.parallax-container').offset().top + 1900,
            //         end: "+=800"
            //     },
            //     x: 500,
            //     stagger: 0.3,
            //     duration: 5
            // });
        
            let parallaxEffect = gsap.timeline({
                default: {
                    duration: 6,
                    stagger: 0.3,
                    ease: 'none'
                },
                scrollTrigger: {
                    trigger: '.parallax-container',
                    markers: false,
                    scrub: 1,
                    start: $('.parallax-container').offset().top + 1600,
                    end:"+=1000"
                }
            });
        
            parallaxEffect.to('.title-wrapper', {x: 300});
        }
    });

});