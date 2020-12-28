var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop()  {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
  }

loop();


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}



//Scroll to top button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
















/*scroll-in*/


$(function() {
  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.turqoise", 1, {x: "-110%"}, {x: "13%", ease: Linear.ease});

  /*var blockTween = new TweenMax.to('#block', 1.5, { css: {
    transform: 'translate3d(200px, 0px, 0px)',
    backgroundColor: '#aabd8c'
  }

}); */


  var containerScene = new ScrollMagic.Scene({
      triggerElement: '#container',
			duration: 280,
      offset: -200,
    })

    .setTween(wipeAnimation)
    .setPin('#block')
    .addIndicators()
    .addTo(controller);
});


$(function() {
  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel-1.turqoise", 1, {x: "260%"}, {x: "130%", ease: Linear.ease});

  /*var blockTween = new TweenMax.to('#block', 1.5, { css: {
    transform: 'translate3d(200px, 0px, 0px)',
    backgroundColor: '#aabd8c'
  }

}); */


  var containerScene = new ScrollMagic.Scene({
      triggerElement: '#container-1',
			duration: 280,
      offset: -200,
    })

    .setTween(wipeAnimation)
    .setPin('#block-1')
    .addIndicators()
    .addTo(controller);
});

$(function() {
  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel-2.turqoise", 1, {x: "260%"}, {x: "130%", ease: Linear.ease});

  /*var blockTween = new TweenMax.to('#block', 1.5, { css: {
    transform: 'translate3d(200px, 0px, 0px)',
    backgroundColor: '#aabd8c'
  }

}); */


  var containerScene = new ScrollMagic.Scene({
      triggerElement: '#container-2',
			duration: 280,
      offset: -170,
    })

    .setTween(wipeAnimation)
    .setPin('#block-2')
    .addIndicators()
    .addTo(controller);
});

$(function() {
  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel-3.turqoise", 1, {x: "260%"}, {x: "130%", ease: Linear.ease});

  /*var blockTween = new TweenMax.to('#block', 1.5, { css: {
    transform: 'translate3d(200px, 0px, 0px)',
    backgroundColor: '#aabd8c'
  }

}); */


  var containerScene = new ScrollMagic.Scene({
      triggerElement: '#container-3',
			duration: 280,
      offset: -170,
    })

    .setTween(wipeAnimation)
    .setPin('#block-3')
    .addIndicators()
    .addTo(controller);
});



$(function() {
  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel-4.turqoise", 1, {x: "260%"}, {x: "140%", ease: Linear.ease});

  /*var blockTween = new TweenMax.to('#block', 1.5, { css: {
    transform: 'translate3d(200px, 0px, 0px)',
    backgroundColor: '#aabd8c'
  }

}); */


  var containerScene = new ScrollMagic.Scene({
      triggerElement: '#container-4',
			duration: 280,
      offset: -170,
    })

    .setTween(wipeAnimation)
    .setPin('#block-4')
    .addIndicators()
    .addTo(controller);
});
