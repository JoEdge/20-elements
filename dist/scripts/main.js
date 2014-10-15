// Section 1
//bouncing ball
$ ('#ball').click (function() {

   $('#ball').toggleClass('animate bounce');

});

// hinged

$ ('#hinge').click (function() {

   $('#hinge').toggleClass('animate hinge');

});

//tada

$ ('#magic').hover (function() {

   $('#magic').toggleClass('animated tada');

});

//color transition no jquery

//rubberband effect
$ ('#stretch').hover (function() {

   $('#stretch').toggleClass('animated rubberBand');

});

// Section 2
//shakegif for rotate effect

$ ('#roll').hover (function() {

   $('#roll').toggleClass('animated rotateIn');

});

//fade out effect effect

$ ('#fadeIt').hover (function() {

   $('#fadeIt').toggleClass('animated fadeOutRight');

});

//flip effect

$ ('#flipIt').click (function() {

   $('#flipIt').toggleClass('animated flip');

});

//pulse effect

$ ('#heartbeat').click (function() {
   $('#heartbeat').toggleClass('animated pulse');

});

//zoom in effect

$ ('#zoomed').click (function() {

   $('#zoomed').toggleClass('animated zoomInDown');

});

//Section 3
//wobble effect

$ ('#weeble').keyup (function() {

   $('#weeble').toggleClass('animated wobble');

});
