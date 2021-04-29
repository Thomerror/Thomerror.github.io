const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -120px 0px"
};

const appearOnscroll = new  IntersectionObserver
(function(entries, appearOnscroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnscroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnscroll.observe(fader);
});

function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c ,d){
        t /= d/2;
        if(t<1) return c / 2 * t * t + b;
        t--;
        return -c/2 *(t *(t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

var navLink = document.querySelector('.nav-bar-link1');
navLink.addEventListener('click', function(){
    smoothScroll('.container-home',2000);
});
var navLink = document.querySelector('.nav-bar-link2');
navLink.addEventListener('click', function(){
    smoothScroll('.container-about',2000);
});
var navLink = document.querySelector('.nav-bar-link3');
navLink.addEventListener('click', function(){
    smoothScroll('.container-skill',2000);
});

var navLink = document.querySelector('.nav_mobile_link1');
navLink.addEventListener('click', function(){
    smoothScroll('.container-home',2000);
});
var navLink = document.querySelector('.nav_mobile_link2');
navLink.addEventListener('click', function(){
    smoothScroll('.container-about',2000);
});
var navLink = document.querySelector('.nav_mobile_link3');
navLink.addEventListener('click', function(){
    smoothScroll('.container-skill',2000);
});