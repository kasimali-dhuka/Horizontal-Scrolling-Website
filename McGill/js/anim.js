gsap.registerPlugin(ScrollTrigger);

// let target = gsap.utils.toArray('.main-container');
// let target = document.getElementsByClassName('main-container')[0];
let target = document.getElementById('container');
console.log(target);


ScrollTrigger.matchMedia({
    "(min-width: 992px)": function(){
        gsap.to(target, {
            x: () => -(target.scrollWidth - document.documentElement.clientWidth) + 'px',
            ease: Linear.easeNone,
            scrollTrigger: {
                trigger: target,
                invalideOnRefresh: true,
                pin: true,
                scrub: 1,
                end: () => '+=' + 5000
            }
        });
    }
});




$(document).ready(function () {

    ScrollTrigger.matchMedia({

// ****************************************************************************
// ------------------------- min width 992px ----------------------------------
// ****************************************************************************

        "(min-width: 1025px) and (min-height: 799px)": function(){
            
            // Scroll to target section on btn click
            $("#goto-btn").click(function(event){
                if(this.hash !== ""){
                    
                    event.preventDefault();
                    
                    var hash = 600;
                    
                    $("html, body").animate({
                        scrollTop: hash
                    },{
                        duration: 500,
                        easing: "linear"
                    });
            
                }
        
            });

            $("#goto-btn-2").click(function(event){
                if(this.hash !== ""){
                    
                    event.preventDefault();
                    
                    // var hash = this.hash;
                    
                    $("html, body").animate({
                        scrollTop: 2700
                    },{
                        duration: 500,
                        easing: "linear"
                    });
            
                }
        
            });
            // ----------------------------------------------

            // For the index page heading
            gsap.from(".a-title", {
                duration: 0.5,
                opacity: 0,
                y: 150,
                stagger: 0.3,
            });
            // -----------------------------------------------


            // Section 2 animation.............
            let section2 = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: ".content2",
                    // markers: false,
                    horizontal: false,
                    start: $('.div-content.content2').offset().top,
                    end: "bottom center"
                }
            });
            section2.from(".content2-child", {
                y: 50,
                opacity: 0,
                stagger: 0.3
            })
            section2.to(".content2-child", {
                y: 0,
                opacity: 1
            });
            // -----------------------------------------------


            // Section 3 animation..............
            let section3 = gsap.timeline({
                deafults: {
                    duration: 1
                },
                scrollTrigger: {
                    trigger: ".section3",
                    markers: false,
                    horizontal: false,
                    start: $('.section-img').offset().top + 500,
                    end: "+=100"
                }
            });
            section3.from(".section-img",{x: -100, opacity: 0})
                .from(".img-caption", {opacity: 0, y: 50}, 0.5)
                .to(".section-img", {x: 0, opacity: 1});
            // -----------------------------------------------


            // Section 4 animation ..................
            let section4 = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: ".section4",
                    markers: false,
                    horizontal: false,
                    start: $('.content4').offset().top + 900,
                    end: "+=200"
                }
            });
            
            section4.from(".content4-wrapper", {
                y: 50,
                opacity: 0,
                stagger: 0.3
            })
            .to(".content4-wrapper",{
                y: 0,
                opacity: 1
            });
            // ------------------------------------------------

            // Section 5 animation .....................
            let section5 = gsap.timeline({
                default: {duration: 1},
                scrollTrigger: {
                    trigger: ".section5",
                    markers: false,
                    horizontal: false,
                    start: $('.content5').offset().top + 1300,
                    end: "+=100"
                }
            });
            section5
            .from(".content5", {y: 50, opacity: 0, stagger: 0.2}, 0.5)
            .to(".content5", { y: 0, opacity: 1 }, 0.5);
            // -------------------------------------------------
            
            
            // Section 6 animation .......................
            let section6 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section6",
                    markers: false,
                    horizontal: false,
                    start: $('.content5').offset().top + 1500,
                    end: "+=100"
                }
            });
            section6
            .from(".section6", {x: -100, opacity: 0, stagger: 0.3})
            .from(".content6-title", { y: 150 , opacity: 0, stagger: 0.3 }, 0.5)
            .to(".content6-title", { y: 0, opacity: 1 });


            // Section 6 Parallax effect...................
            // let parallax6 = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: ".content6",
            //         markers: true,
            //         horizontal: false,
            //         scrub: true,
            //         start: $('.content5').offset().top + 1400,
            //         end: "+=1200"
            //     }
            // });
            // parallax6.from(".content6-title", {
            //     x: -650, stagger: 0.1, duration: 10
            // })
            // .to(".content6-title", {
            //     x: 360, duration: 10
            // });
            // -------------------------------------------------


            
            // Section 7 animation ..........................
            let section7 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section7",
                    markers: false,
                    horizontal: false,
                    start:  $('.map-img').offset().top + 2350,
                    end: "+=100"
                }
            });
            section7.from(".map-img", {x:-100, opacity: 0})
            .from(".map-img-caption", {y: 50, opacity: 0, duration: 1.5})
            .to(".map-img", {x:0, opacity: 1});
            // -------------------------------------------------


            // Section 8 animation ..........................
            let section8 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section8",
                    markers: false,
                    horizontal: false,
                    start: $('.content8').offset().top + 2500,
                    end: "+=100"
                }
            });
            section8.from(".content8-child", { y: 150, opacity: 0, stagger: 0.3})
            .to(".content8-child", {y: 0, opacity: 1});
            // -------------------------------------------------
            
            
            // Section 9 animation .........................
            let section9 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section9",
                    markers: false,
                    horizontal: false,
                    start: $('.roof-img').offset().top + 3000,
                    end: "+=100"
                }
            });
            section9.from(".roof-img", {x:-100, opacity: 0, duration: 1})
            .to(".roof-img", {x: 0, opacity: 1, duration: 1})
            .from(".roof-img-caption", {y: 50, opacity: 0}, 1);
            // -------------------------------------------------
            
            
            // Section 10 animation .........................
            let section10 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section10",
                    markers: false,
                    horizontal: false,
                    start: $('.content10').offset().top + 3500,
                    end: "+=100"
                }
            });
            section10.from(".features-panel", {y: 150, opacity: 0, stagger: 0.3})
            .to(".features-panel", {y: 0, opacity: 1});
            // -------------------------------------------------
            
            
            // Section 11 animation ..........................
            let section11 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section11",
                    markers: false,
                    horizontal: false,
                    start: $('.content11').offset().top + 3700,
                    end: "+=100"
                }
            });
            section11.from(".content11-wrapper", { y: 150, opacity: 0});
            // -------------------------------------------------
            
            
            // Section 12 animation ..........................
            let section12 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section12",
                    markers: false,
                    horizontal: false,
                    start: $('.interior-img').offset().top + 4000,
                    end: "+=100"
                }
            });
            section12.from(".interior-img", {x:-100, opacity: 0, duration: 1})
            .to(".interior-img", {x:0, opacity: 1, duration: 1})
            .from(".interior-img-caption", {y: 50, opacity: 0}, 1);
            // -------------------------------------------------
            
            
            // Section 13 animation ..........................
            let section13 = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: ".section13",
                    markers: false,
                    horizontal: false,
                    start: $('.content13').offset().top + 4300,
                    end: "+=100"
                }
            });
            section13.from(".content13-child", {
                y: 50,
                opacity: 0,
                stagger: 0.3
            })
            section13.to(".content13-child", {
                y: 0,
                opacity: 1
            });
            // -------------------------------------------------
            
            
            // Section 14 animation .........................
            let section14 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section14",
                    markers: false,
                    horizontal: false,
                    start: $('.interior-img2').offset().top + 4600,
                    end: "+=100"
                }
            });
            section14.from(".interior-img2", {x: -100, opacity: 0})
            .to(".interior-img2", {x: 0, opacity: 1})
            .from(".interior-img-caption2", {y: 50, opacity: 0}, 1);
            // --------------------------------------------------

        },

// ****************************************************************************
// ---------------- min width 992px and max height 800px ----------------------
// ****************************************************************************

        "(min-width: 992px) and (max-height: 800px)": function(){

            // Scroll to target section on btn click
            $("#goto-btn").click(function(event){
                if(this.hash !== ""){
                    
                    event.preventDefault();
                    
                    var hash = 430;
                    
                    $("html, body").animate({
                        scrollTop: hash
                    },{
                        duration: 500,
                        easing: "linear"
                    });
            
                }
        
            });

            $("#goto-btn-2").click(function(event){
                if(this.hash !== ""){
                    
                    event.preventDefault();
                    
                    // var hash = this.hash;
                    
                    $("html, body").animate({
                        scrollTop: 2400
                    },{
                        duration: 500,
                        easing: "linear"
                    });
            
                }
        
            });
            // ----------------------------------------------
            
            // For the index page heading
            gsap.from(".a-title", {
                duration: 0.5,
                opacity: 0,
                y: 150,
                stagger: 0.3,
            });
            // -----------------------------------------------


            // Section 2 animation.............
            let section2 = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: ".content2",
                    markers: false,
                    horizontal: false,
                    start: $('.div-content.content2').offset().top,
                    end: "bottom center"
                }
            });
            section2.from(".content2-child", {
                y: 50,
                opacity: 0,
                stagger: 0.3
            })
            section2.to(".content2-child", {
                y: 0,
                opacity: 1
            });
            // -----------------------------------------------


            // Section 3 animation..............
            let section3 = gsap.timeline({
                deafults: {
                    duration: 1
                },
                scrollTrigger: {
                    trigger: ".section3",
                    markers: false,
                    horizontal: false,
                    start: $('.section-img').offset().top + 500,
                    end: "+=100"
                }
            });
            section3.from(".section-img",{x: -100, opacity: 0})
                .from(".img-caption", {opacity: 0, y: 50}, 0.5)
                .to(".section-img", {x: 0, opacity: 1});
            // -----------------------------------------------


            // Section 4 animation ..................
            let section4 = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: ".section4",
                    markers: false,
                    horizontal: false,
                    start: $('.content4').offset().top + 800,
                    end: "+=200"
                }
            });
            
            section4.from(".content4-wrapper", {
                y: 50,
                opacity: 0,
                stagger: 0.3
            })
            .to(".content4-wrapper",{
                y: 0,
                opacity: 1
            });
            // ------------------------------------------------

            // Section 5 animation .....................
            let section5 = gsap.timeline({
                default: {duration: 1},
                scrollTrigger: {
                    trigger: ".section5",
                    markers: false,
                    horizontal: false,
                    start: $('.content5').offset().top + 1200,
                    end: "+=100"
                }
            });
            section5
            .from(".content5", {y: 50, opacity: 0, stagger: 0.2}, 0.5)
            .to(".content5", { y: 0, opacity: 1 }, 0.5);
            // -------------------------------------------------
            
            
            // Section 6 animation .......................
            let section6 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section6",
                    markers: false,
                    horizontal: false,
                    start: $('.content5').offset().top + 1500,
                    end: "+=100"
                }
            });
            section6
            .from(".section6", {x: -100, opacity: 0, stagger: 0.3})
            .from(".content6-title", { y: 150 , opacity: 0, stagger: 0.3 }, 0.5)
            .to(".content6-title", { y: 0, opacity: 1 });
            // -------------------------------------------------


            
            // Section 7 animation ..........................
            let section7 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section7",
                    markers: false,
                    horizontal: false,
                    start:  $('.map-img').offset().top + 2150,
                    end: "+=100"
                }
            });
            section7.from(".map-img", {x:-100, opacity: 0})
            .from(".map-img-caption", {y: 50, opacity: 0, duration: 1.5})
            .to(".map-img", {x:0, opacity: 1});
            // -------------------------------------------------


            // Section 8 animation ..........................
            let section8 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section8",
                    markers: false,
                    horizontal: false,
                    start: $('.content8').offset().top + 2400,
                    end: "+=100"
                }
            });
            section8.from(".content8-child", { y: 150, opacity: 0, stagger: 0.3})
            .to(".content8-child", {y: 0, opacity: 1});
            // -------------------------------------------------
            
            
            // Section 9 animation .........................
            let section9 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section9",
                    markers: false,
                    horizontal: false,
                    start: $('.roof-img').offset().top + 2850,
                    end: "+=100"
                }
            });
            section9.from(".roof-img", {x:-100, opacity: 0, duration: 1})
            .to(".roof-img", {x: 0, opacity: 1, duration: 1})
            .from(".roof-img-caption", {y: 50, opacity: 0}, 1);
            // -------------------------------------------------
            
            
            // Section 10 animation .........................
            let section10 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section10",
                    markers: false,
                    horizontal: false,
                    start: $('.content10').offset().top + 3200,
                    end: "+=100"
                }
            });
            section10.from(".features-panel", {y: 150, opacity: 0, stagger: 0.3})
            .to(".features-panel", {y: 0, opacity: 1});
            // -------------------------------------------------
            
            
            // Section 11 animation ..........................
            let section11 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section11",
                    markers: false,
                    horizontal: false,
                    start: $('.content11').offset().top + 3550,
                    end: "+=100"
                }
            });
            section11.from(".content11-wrapper", { y: 150, opacity: 0});
            // -------------------------------------------------
            
            
            // Section 12 animation ..........................
            let section12 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section12",
                    markers: false,
                    horizontal: false,
                    start: $('.interior-img').offset().top + 3850,
                    end: "+=100"
                }
            });
            section12.from(".interior-img", {x:-100, opacity: 0, duration: 1})
            .to(".interior-img", {x:0, opacity: 1, duration: 1})
            .from(".interior-img-caption", {y: 50, opacity: 0}, 1);
            // -------------------------------------------------
            
            
            // Section 13 animation ..........................
            let section13 = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: ".section13",
                    markers: false,
                    horizontal: false,
                    start: $('.content13').offset().top + 4200,
                    end: "+=100"
                }
            });
            section13.from(".content13-child", {
                y: 50,
                opacity: 0,
                stagger: 0.3
            })
            section13.to(".content13-child", {
                y: 0,
                opacity: 1
            });
            // -------------------------------------------------
            
            
            // Section 14 animation .........................
            let section14 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section14",
                    markers: false,
                    horizontal: false,
                    start: $('.interior-img2').offset().top + 4600,
                    end: "+=100"
                }
            });
            section14.from(".interior-img2", {x: -100, opacity: 0})
            .to(".interior-img2", {x: 0, opacity: 1})
            .from(".interior-img-caption2", {y: 50, opacity: 0}, 1);
            // --------------------------------------------------

        },

// ****************************************************************************
// -------------------------- max width 992px ---------------------------------
// ****************************************************************************

        "(max-width: 992px)": function(){

            // For the index page heading
            gsap.from(".a-title", {
                duration: 1,
                opacity: 0,
                y: 150,
                stagger: 0.3,
            });
            // -----------------------------------------------

            
            // Section 2 animation.............
            let section2 = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: ".section2",
                    markers: false,
                    horizontal: false,
                    start: "-100px center",
                    end: "bottom center"
                }
            });
            section2.from(".content2-child", {
                y: 50,
                opacity: 0,
                stagger: 0.3
            })
            section2.to(".content2-child", {
                y: 0,
                opacity: 1
            });
            // -----------------------------------------------


            // Section 3 animation..............
            let section3 = gsap.timeline({
                deafults: {
                    duration: 1
                },
                scrollTrigger: {
                    trigger: ".section3",
                    markers: false,
                    horizontal: false,
                    start: "-100px center",
                    end: "bottom center"
                }
            });
            section3.from(".section-img",{x: -100, opacity: 0})
              .from(".img-caption", {opacity: 0, y: 50}, 0.5)
              .to(".section-img", {x: 0, opacity: 1});
            // -----------------------------------------------


            // Section 4 animation ..................
              let section4 = gsap.timeline({
                  default: { duration: 1 },
                  scrollTrigger: {
                      trigger: ".section4",
                      markers: false,
                      horizontal: false,
                      start: "-100px center",
                      end: "bottom center"
                  }
              });
              
              section4.from(".content4-wrapper", {
                  y: 50,
                  opacity: 0,
                  stagger: 0.3
              })
              .to(".content4-wrapper",{
                  y: 0,
                  opacity: 1
              });
            // ------------------------------------------------


            // Section 5 animation .....................
            let section5 = gsap.timeline({
                default: {duration: 1},
                scrollTrigger: {
                    trigger: ".section5",
                    markers: false,
                    horizontal: false,
                    start: "-100px center",
                    end: "bottom center"
                }
            });
            section5.from(".content5", {y: 50, opacity: 0, stagger: 0.2})
            .to(".content5", { y: 0, opacity: 1 });
            // -------------------------------------------------


            // Section 6 animation .......................
            let section6 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section6",
                    markers: false,
                    horizontal: false,
                    start: "100px center", 
                    end: "bottom center"
                }
            });
            section6.from(".section6", {x: -100, opacity: 0, stagger: 0.3})
            .from(".content6-title", { y: 150 , opacity: 0, stagger: 0.3 })
            .to(".content6-title", { y: 0, opacity: 1 });
            // -------------------------------------------------

            
            // Section 7 animation ..........................
            let section7 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section7",
                    markers: false,
                    horizontal: false,
                    start: "-100px center",
                    end: "bottom center"
                }
            });
            section7.from(".map-img", {x:-100, opacity: 0})
            .from(".map-img-caption", {y: 50, opacity: 0, duration: 1.5})
            .to(".map-img", {x:0, opacity: 1});
            // -------------------------------------------------


            // Section 8 animation ..........................
            let section8 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section8",
                    markers: false,
                    horizontal: false,
                    start: "-100px center",
                    end: "bottom center"
                }
            });
            section8.from(".content8-child", { y: 150, opacity: 0, stagger: 0.3})
            .to(".content8-child", {y: 0, opacity: 1});
            // -------------------------------------------------
            
            
            // Section 9 animation .........................
            let section9 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section9",
                    markers: false,
                    horizontal: false,
                    start: "-100px center",
                    end: "bottom center"
                }
            });
            section9.from(".roof-img", {x:-100, opacity: 0, duration: 1})
            .to(".roof-img", {x: 0, opacity: 1, duration: 1})
            .from(".roof-img-caption", {y: 50, opacity: 0}, 1);
            // -------------------------------------------------
            
            
            // Section 10 animation .........................
            let section10 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section10",
                    markers: false,
                    horizontal: false,
                    start: "top center",
                    end: "bottom center"
                }
            });
            section10.from(".features-panel", {y: 150, opacity: 0, stagger: 0.3})
            .to(".features-panel", {y: 0, opacity: 1});
            // -------------------------------------------------
            
            
            // Section 11 animation ..........................
            let section11 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section11",
                    markers: false,
                    horizontal: false,
                    start: "-50px center",
                    end: "bottom center"
                }
            });
            section11.from(".content11-wrapper", { y: 150, opacity: 0});
            // -------------------------------------------------
            
            
            // Section 12 animation ..........................
            let section12 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section12",
                    markers: false,
                    horizontal: false,
                    start: "-50px center",
                    end: "bottom center"
                }
            });
            section12.from(".interior-img", {x:-100, opacity: 0, duration: 1})
            .to(".interior-img", {x:0, opacity: 1, duration: 1})
            .from(".interior-img-caption", {y: 50, opacity: 0}, 1);
            // -------------------------------------------------
            
            
            // Section 13 animation ..........................
            let section13 = gsap.timeline({
                default: { duration: 1 },
                scrollTrigger: {
                    trigger: ".section13",
                    markers: false,
                    horizontal: false,
                    start: "-50px center",
                    end: "bottom center"
                }
            });
            section13.from(".content13-child", {
                y: 50,
                opacity: 0,
                stagger: 0.3
            })
            section13.to(".content13-child", {
                y: 0,
                opacity: 1
            });
            // -------------------------------------------------
            
            
            // Section 14 animation .........................
            let section14 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section14",
                    markers: false,
                    horizontal: false,
                    start: "top center",
                    end: "bottom center"
                }
            });
            section14.from(".interior-img2", {x: -100, opacity: 0})
            .to(".interior-img2", {x: 0, opacity: 1})
            .from(".interior-img-caption2", {y: 50, opacity: 0}, 1);
            // --------------------------------------------------
            

        }    
    });    
    






//     // Section 15 animation .........................
//     let section15 = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".section15",
//             markers: false,
//             horizontal: true,
//             start: "-400px center",
//             end: "bottom center"
//         }
//     });
//     section15.from(".content15", { y: 100, opacity: 0});
//     // --------------------------------------------------



});



// ------------------------------------------------

// $("main").on('mousewheel', function(e){
//     let target = document.documentElement.scrollLeft;
//     console.log(target);
//     if( target >= 600){
//         console.log("Done");
//         gsap.to(".content2-child", {
//             duration: 1,
//             y: 0,
//             opacity: 1,
//             stagger: 0.3
//         });
//         $("main").off("mousewheel");
//     }else {
//         console.log("Nope");
//         $(".content2-child").css({
//             "opacity": "0",
//             "transform" : "translateY(300px)"
//         });
//     }
// });



//     // Section 6 Parallax effect...................
//     let parallax6 = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".content6",
//             markers: false,
//             horizontal: true,
//             scrub: true,
//             start: "-60% center",
//             end: "bottom top"
//         }
//     });
//     parallax6.from(".content6-title", {
//         x: -650, stagger: 0.1, duration: 10
//     })
//     .to(".content6-title", {
//         x: 360, duration: 10
//     });
