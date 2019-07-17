/*********************TABLE OF CONTENTS************************/
/* INDIVIUALLY CODED WHITE DOTS */
/* BIG DOTS ORANGE PULSE */
/* MAV PULSER */
/* AGD PULSER */
/* PIKE PULSER */
/* ARKON PULSER */
/* HOLLCO PULSER */
/* AGD AUSTRALIA PULSER */
/* TRAFFIC GROUP PULSER */
/* CENTRAL TEXT POP UPS*/
/* THE MAV INFORMATION */
/* THE AGD INFORMATION */
/* THE PIKE INFORMATION */
/* THE ARKON INFORMATION */
/* THE HOLLCO INFORMATION */
/* THE AGD AUSTRALIA INFORMATION */
/* THE TRAFFIC GROUP INFORMATION */
/*********************TABLE OF CONTENTS************************/



/**********************INDIVIDUALLY CODED WHITE DOTS/BIG DOTS*******************************/
jQuery(document).ready(function($){
var $theend = $('#theend'),

$270degB = $('.circle270'),
$circa270deg = $('.circa270'),
$toprightone = $('.topright1'),
$toprighttwo = $('.topright2'),
$toprightthree = $('.topright3'),
$toprightfour = $('.topright4'),
$toprightfive = $('.topright5'),
$toprightsix = $('.topright6');


$thirdlogo = $('.logo3pike')
$45degA = $('.circle45')
$circa45deg = $('.circa45')
$bottomrightone = $('.bottomright1')
$bottomrighttwo = $('.bottomright2')
$bottomrightthree = $('.bottomright3')
$bottomrightfour = $('.bottomright4')
$bottomrightfive = $('.bottomright5')
$bottomrightsix = $('.bottomright6')

$fourthlogo = $('.logo4arkon')
$90degB = $('.circle90')
$circa90deg = $('.circa90')
$bottomleftone = $('.bottomleft1')
$bottomlefttwo = $('.bottomleft2')
$bottomleftthree = $('.bottomleft3')
$bottomleftfour = $('.bottomleft4')
$bottomleftfive = $('.bottomleft5')
$bottomleftsix = $('.bottomleft6')





$firstlogo = $('.logo1mav') 
$205degA = $('.circle205')
$circa205deg = $('.circa205')
$lefttopone = $('.rightsidetop1')
$lefttoptwo = $('.rightsidetop2')
$lefttopthree = ('.rightsidetop3')
$lefttopfour = $('.rightsidetop4')
$lefttopfive = $('.rightsidetop5')
$lefttopsix = $('.rightsidetop6')

$secondlogo = $('.logo2agd')
$360degA = $('.circle360')
$circa360deg = $('.circa360')
$leftbottomone = $('.rightsidebottom1')
$leftbottomtwo = $('.rightsidebottom2')
$leftbottomthree = $('.rightsidebottom3')
$leftbottomfour = $('.rightsidebottom4')
$leftbottomfive = $('.rightsidebottom5')
$leftbottomsix = $('.rightsidebottom6')

$fithlogo = $('.logo5hollco')
$125degA = $('.circle125')
$circa125deg = $('.circa125')
$rightbottomone = $('.minicircleleftsidebottom1')
$rightbottomtwo = $('.minicircleleftsidebottom2')
$rightbottomthree = $('.minicircleleftsidebottom3')
$rightbottomfour = $('.minicircleleftsidebottom4')
$rightbottomfive = $('.minicircleleftsidebottom5')
$rightbottomsix = $('.minicircleleftsidebottom6')
  
$sixthlogo = $('.logo6agdtraffic')
$180degB = $('.circle180')
$circa180deg = $('.circa180')
$righttopone = $('.minicircleleftsidetop1')
$righttoptwo = $('.minicircleleftsidetop2') 
$righttopthree = $('.minicircleleftsidetop3')
$righttopfour = $('.minicircleleftsidetop4')
$righttopfive = $('.minicircleleftsidetop5')
$righttopsix = $('.minicircleleftsidetop6')








$seventhlogo = $('.logo7trafficgroup')
$170degA = $('.circle170')
$circa170deg = $('.circa170')
$topleftone = $('.topleft1')
$toplefttwo = $('.topleft2')
$topleftthree = $('.topleft3')
$topleftfour = $('.topleft4')
$topleftfive = $('.topleft5')
$topleftsix = $('.topleft6')

$270degC = $('.circle270'),
$circa270 = $('.circa270'),
$205degC = $('.circle205'),
$circa205 = $('.circa205'),
$360degC = $('.circle360'),
$circa360 = $('.circa360'),
$45degC = $('.circle45'),
$circa45 = $('.circa45'),
$90degC = $('.circle90'),
$circa90 = $('.circa90'),
$125degC = $('.circle125'),
$circa125 = $('.circa125'),
$180degC = $('.circle180'),
$circa180 = $('.circa180'),
$170degC = $('.circle170'),
$circa170 = $('.circa170');

    // initialize controller
  var controller = new ScrollMagic.Controller();
  controller.scrollTo(500);

  // build timeline with animation tweens
  var scrollAnimation = new TimelineMax();
  scrollAnimation.set($theend, {autoAlpha: 1})

/**1ST**/
.to($270degB, 0, {autoAlpha: 1, backgroundColor:"orange", opacity: 1, ease:Linear.easeOut, delay:0.75, scale:1.5}, "trans1")
  .to($toprightone, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:0.75}, "trans1")
    .to($toprighttwo, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:1.75}, "trans1")
      .to($toprightthree, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:2.75}, "trans1")
        .to($toprightfour, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:3.75}, "trans1")
          .to($toprightfive, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:4.75}, "trans1")
            .to($toprightsix, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:5.75}, "trans1")

/**2ND**/
.to($firstlogo, 0, {autoAlpha: 1, css: { 'filter': 'grayscale(0%)' }, opacity: 1, ease:Linear.easeOut, delay:6}, "trans1")
  .to($205degA, 0, {autoAlpha: 1, backgroundColor:"orange", opacity: 1, ease:Linear.easeOut, delay:5.75, scale:1.5}, "trans1")
    .to($lefttopone, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:11.5}, "trans1")
      .to($lefttoptwo, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:10.75}, "trans1")
        .to($lefttopthree, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:9.75}, "trans1")
          .to($lefttopfour, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:8.75}, "trans1")
            .to($lefttopfive, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:7.75}, "trans1")
              .to($lefttopsix, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:6.75}, "trans1")

/**3RD**/
.to($secondlogo, 0, {autoAlpha: 1, css: { 'filter': 'grayscale(0%)'}, opacity: 1, ease:Linear.easeOut, delay:11.75}, "trans1")
  .to($360degA, 0, {autoAlpha: 1, backgroundColor:"orange", opacity: 1, ease:Linear.easeOut, delay:11.65, scale:1.5}, "trans1")
    .to($leftbottomone, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:12.75}, "trans1")
      .to($leftbottomtwo, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:13.75}, "trans1")
        .to($leftbottomthree, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:14.75}, "trans1")
          .to($leftbottomfour, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:15.75}, "trans1")
            .to($leftbottomfive, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:16.75}, "trans1")
              .to($leftbottomsix, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:17.75}, "trans1")

/**4TH**/
.to($thirdlogo, 0, {autoAlpha: 1, css: { 'filter': 'grayscale(0%)'}, opacity: 1, ease:Linear.easeOut, delay:17.75}, "trans1")
  .to($45degA, 0, {autoAlpha: 1,backgroundColor:"orange", opacity: 1, ease:Linear.easeOut, delay:17.75, scale:1.5}, "trans1")
    .to($bottomrightone, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:18.75}, "trans1")
      .to($bottomrighttwo, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:19.75}, "trans1")
        .to($bottomrightthree, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:20.75}, "trans1")
          .to($bottomrightfour, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:21.75}, "trans1")
            .to($bottomrightfive, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:22.75}, "trans1")
              .to($bottomrightsix, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:23.75}, "trans1")

/**5TH**/
.to($fourthlogo, 0, {autoAlpha: 1, css: { 'filter': 'grayscale(0%)'}, opacity: 1, ease:Linear.easeOut, delay:23.75}, "trans1")
  .to($90degB, 0, {autoAlpha: 1, backgroundColor:"orange", opacity: 1, ease:Linear.easeOut, delay:23.75, scale:1.5}, "trans1")
    .to($bottomleftone, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:24.75}, "trans1")
      .to($bottomlefttwo, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:25.75}, "trans1")
        .to($bottomleftthree, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:26.75}, "trans1")
          .to($bottomleftfour, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:27.75}, "trans1")
            .to($bottomleftfive, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:28.75}, "trans1")
              .to($bottomleftsix, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:29.75}, "trans1")

/**6TH**/
.to($fithlogo, 0, {autoAlpha: 1, css: { 'filter': 'grayscale(0%)' }, opacity: 1, ease:Linear.easeOut, delay:29.75}, "trans1")
  .to($125degA, 0, {autoAlpha: 1, backgroundColor:"orange", opacity: 1, ease:Linear.easeOut, delay:29.75, scale:1.5}, "trans1")
    .to($rightbottomone, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:30.75}, "trans1")
      .to($rightbottomtwo, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:31.75}, "trans1")
        .to($rightbottomthree, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:32.75}, "trans1")
          .to($rightbottomfour, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:33.75}, "trans1")
            .to($rightbottomfive, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:34.75}, "trans1")
              .to($rightbottomsix, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:35.75}, "trans1")

/**7TH**/
.to($sixthlogo, 0, {autoAlpha: 1, css: { 'filter': 'grayscale(0%)'}, opacity: 1, ease:Linear.easeOut, delay:35.75}, "trans1")
  .to($180degB, 0, {autoAlpha: 1, backgroundColor:"orange", opacity: 1, ease:Linear.easeOut, delay:35.75, scale:1.5}, "trans1")
    .to($righttopone, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:36.75}, "trans1")
      .to($righttoptwo, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:37.75}, "trans1")
        .to($righttopthree, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:38.75}, "trans1")
          .to($righttopfour, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:39.75}, "trans1")
            .to($righttopfive, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:40.75}, "trans1")
              .to($righttopsix, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:41.75}, "trans1")  

/**8TH**/
.to($seventhlogo, 0, {autoAlpha: 1, css: { 'filter': 'grayscale(0%)'}, opacity: 1, ease:Linear.easeOut, delay:41.75}, "trans1")
  .to($170degA, 0, {autoAlpha: 1, backgroundColor:"orange", opacity: 1, ease:Linear.easeOut, delay:41.75, scale:1.5}, "trans1")
    .to($topleftone, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:42.75}, "trans1")
      .to($toplefttwo, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:43.75}, "trans1")
        .to($topleftthree, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:44.75}, "trans1")
          .to($topleftfour, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:45.75}, "trans1")
            .to($topleftfive, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:46.75}, "trans1")
              .to($topleftsix, 0, {autoAlpha: 1,backgroundColor:"#ffffff", opacity: 1, ease:Linear.easeOut, delay:47.75}, "trans1")


// build scene and link scrolling to animation
  var scene = new ScrollMagic.Scene({triggerElement: "#spining", duration:3000})
  .setPin("#theend")
  .addTo(controller)
  .addIndicators({name: `dots (duration: 4000)`}) //uncomment to add indicators 
  .setTween(scrollAnimation);
  scene.offset(800);
});
/**********************INDIVIDUALLY CODED WHITE DOTS/BIG DOTS*******************************/










/*********************************BIG DOTS ORANGE PULSE****************************************/
 jQuery(document).ready(function($){
    var $pulser = $('#makepulsebigger')

      $270degB = $('.circle270'),
      $205degA = $('.circle205'),
      $360degA = $('.circle360'),
      $45degA = $('.circle45'),
      $90degB = $('.circle90'),
      $125degA = $('.circle125'),
      $180degB = $('.circle180'),
      $170degA = $('.circle170');

    //controller 
    var controller = new ScrollMagic.Controller();
    controller.scrollTo(500);
    //initialiser 
    var timeline = new TimelineMax({repeat: -1, repeatDelay: 0.5});
    timeline.set($pulser, {autoAlpha: 1})


    /****************MAV PULSER*****************/
    var timeline = new TimelineMax({repeat: -1, repeatDelay: 0.5});
      var orangeaction205_1 = TweenMax.to($205degA, 0.20, {boxShadow:"0 0 0 0 grey", ease:Linear.easeInOut})
        var orangeaction205_2 = TweenMax.to($205degA, 0.20, {boxShadow:"0 0 0 15px black", ease:Linear.easeInOut})
          var orangeaction205_3 = TweenMax.to($205degA, 0.20, {boxShadow:"0 0 0 10px black", ease:Linear.easeInOut})
            var orangeaction205_4 = TweenMax.to($205degA, 0.20, {boxShadow:"0 0 0 0 lightgrey", ease:Linear.easeInOut})

              timeline.add(orangeaction205_1).add(orangeaction205_2).add(orangeaction205_3).add(orangeaction205_4)
              var timeline = new ScrollMagic.Scene({triggerElement:1, duration:5000})

              .triggerHook("0")
              .addTo(controller)
              .reverse(true)
              .addIndicators({name: 'MAV_pulse'})
              .setTween(timeline)
              timeline.offset(670);


    /****************AGD PULSER*****************/
    var timeline = new TimelineMax({repeat: -1, repeatDelay: 0.5});
      var orangeaction360_1 = TweenMax.to($360degA, 0.20, {boxShadow:"0 0 0 0 grey", ease:Linear.easeInOut})
        var orangeaction360_2 = TweenMax.to($360degA, 0.20, {boxShadow:"0 0 0 15px black", ease:Linear.easeInOut})
          var orangeaction360_3 = TweenMax.to($360degA, 0.20, {boxShadow:"0 0 0 10px black", ease:Linear.easeInOut})
            var orangeaction360_4 = TweenMax.to($360degA, 0.20, {boxShadow:"0 0 0 0 lightgrey", ease:Linear.easeInOut})
    
              timeline.add(orangeaction360_1).add(orangeaction360_2).add(orangeaction360_3).add(orangeaction360_4)
              var timeline = new ScrollMagic.Scene({triggerElement:1, duration:5000})

              .triggerHook("0")
              .addTo(controller)
              .reverse(true)
              .addIndicators({name: 'AUS_pulse'})
              .setTween(timeline)
              timeline.offset(950);


    /****************PIKE PULSER*****************/
    var timeline = new TimelineMax({repeat: -1, repeatDelay: 0.5});
      var orangeaction45_1 = TweenMax.to($45degA, 0.20, {boxShadow:"0 0 0 0 grey", ease:Linear.easeInOut})
        var orangeaction45_2 = TweenMax.to($45degA, 0.20, {boxShadow:"0 0 0 15px black", ease:Linear.easeInOut})
          var orangeaction45_3 = TweenMax.to($45degA, 0.20, {boxShadow:"0 0 0 10px black", ease:Linear.easeInOut})
            var orangeaction45_4 = TweenMax.to($45degA, 0.20, {boxShadow:"0 0 0 0 lightgrey", ease:Linear.easeInOut})
    
              timeline.add(orangeaction45_1).add(orangeaction45_2).add(orangeaction45_3).add(orangeaction45_4)
              var timeline = new ScrollMagic.Scene({triggerElement:1, duration:5000})

              .triggerHook("0")
              .addTo(controller)
              .reverse(true)
              .addIndicators({name: 'PIKE_pulse'})
              .setTween(timeline)
              timeline.offset(1350);


    /****************ARKON PULSER*****************/
    var timeline = new TimelineMax({repeat: -1, repeatDelay: 0.5});
      var orangeaction90_1 = TweenMax.to($90degB, 0.20, {boxShadow:"0 0 0 0 grey", ease:Linear.easeInOut})
        var orangeaction90_2 = TweenMax.to($90degB, 0.20, {boxShadow:"0 0 0 15px black", ease:Linear.easeInOut})
          var orangeaction90_3 = TweenMax.to($90degB, 0.20, {boxShadow:"0 0 0 10px black", ease:Linear.easeInOut})
            var orangeaction90_4 = TweenMax.to($90degB, 0.20, {boxShadow:"0 0 0 0 lightgrey", ease:Linear.easeInOut})
    
              timeline.add(orangeaction90_1).add(orangeaction90_2).add(orangeaction90_3).add(orangeaction90_4)
              var timeline = new ScrollMagic.Scene({triggerElement:1, duration:5000})

              .triggerHook("0")
              .addTo(controller)
              .reverse(true)
              .addIndicators({name: 'ARKON_pulse'})
              .setTween(timeline)
              timeline.offset(1700);


    /***************HOLLCO PULSER******************/
    var timeline = new TimelineMax({repeat: -1, repeatDelay: 0.5});
      var orangeaction125_1 = TweenMax.to($125degA, 0.20, {boxShadow:"0 0 0 0 grey", ease:Linear.easeInOut})
        var orangeaction125_2 = TweenMax.to($125degA, 0.20, {boxShadow:"0 0 0 15px black", ease:Linear.easeInOut})
          var orangeaction125_3 = TweenMax.to($125degA, 0.20, {boxShadow:"0 0 0 10px black", ease:Linear.easeInOut})
            var orangeaction125_4 = TweenMax.to($125degA, 0.20, {boxShadow:"0 0 0 0 lightgrey", ease:Linear.easeInOut})
    
              timeline.add(orangeaction125_1).add(orangeaction125_2).add(orangeaction125_3).add(orangeaction125_4)
              var timeline = new ScrollMagic.Scene({triggerElement:1, duration:5000})

              .triggerHook("0")
              .addTo(controller)
              .reverse(true)
              .addIndicators({name: 'HOLLCO_pulse'})
              .setTween(timeline)
              timeline.offset(2100);


    /****************AGD AUSTRALIA PULSER*****************/
    var timeline = new TimelineMax({repeat: -1, repeatDelay: 0.5});
      var orangeaction180_1 = TweenMax.to($180degB, 0.20, {boxShadow:"0 0 0 0 grey", ease:Linear.easeInOut})
        var orangeaction180_2 = TweenMax.to($180degB, 0.20, {boxShadow:"0 0 0 15px black", ease:Linear.easeInOut})
          var orangeaction180_3 = TweenMax.to($180degB, 0.20, {boxShadow:"0 0 0 10px black", ease:Linear.easeInOut})
            var orangeaction180_4 = TweenMax.to($180degB, 0.20, {boxShadow:"0 0 0 0 lightgrey", ease:Linear.easeInOut})
    
            timeline.add(orangeaction180_1).add(orangeaction180_2).add(orangeaction180_3).add(orangeaction180_4)
            var timeline = new ScrollMagic.Scene({triggerElement:1, duration:5000})

            .triggerHook("0")
            .addTo(controller)
            .reverse(true)
            .addIndicators({name: 'AGD_pulse'})
            .setTween(timeline)
            timeline.offset(2500);



    /***************TRAFFIC GROUP PULSER******************/
    var timeline = new TimelineMax({repeat: -1, repeatDelay: 0.5});
      var orangeaction170_1 = TweenMax.to($170degA, 0.20, {boxShadow:"0 0 0 0 grey", ease:Linear.easeInOut})
        var orangeaction170_2 = TweenMax.to($170degA, 0.20, {boxShadow:"0 0 0 15px black", ease:Linear.easeInOut})
          var orangeaction170_3 = TweenMax.to($170degA, 0.20, {boxShadow:"0 0 0 10px black", ease:Linear.easeInOut})
            var orangeaction170_4 = TweenMax.to($170degA, 0.20, {boxShadow:"0 0 0 0 lightgrey", ease:Linear.easeInOut})
    
            timeline.add(orangeaction170_1).add(orangeaction170_2).add(orangeaction170_3).add(orangeaction170_4)
            var timeline = new ScrollMagic.Scene({triggerElement:1, duration:5000})

            .triggerHook("0")
            .addTo(controller)
            .reverse(true)
            .addIndicators({name: 'TRAFFIC_pulse'})
            .setTween(timeline)
            timeline.offset(2850);
  });
/*********************************BIG DOTS ORANGE PULSE****************************************/







/*********************************CENTRAL TEXT POP UPS****************************************/
jQuery(document).ready(function($){
var $themainone = $('#middle_off')

$thecentralimage = $('.centraltrafficimage')
$thesecondcentralimage = $('.second_themiddleimage')
$thefirstone = $('#centralMAV')
$theseventhone = $('#centralTRAFFIC')
$thesixthone = $('#centralAGD')
$thefithone = $('#centralHOLLCO')
$thefourthone = $('#centralARKON')
$thethirdone = $('#centralPIKE')
$thesecondone = $('#centralAGDAUSTRALIA')

$circa270 = $('.circa270'),
$circa270B = $('.circa270B'),
$circa205 = $('.circa205'),
$circa205B = $('.circa205B'),
$circa360 = $('.circa360'),
$circa360B = $('.circa360B'),
$circle360BB = $('.circa360BB')
$circa45 = $('.circa45'),
$circa45B = $('.circa45B'),
$circa90 = $('.circa90'),
$circa90B = $('.circa90B'),
$circa125 = $('.circa125'),
$circa125B = $('.circa125B'),
$circa180 = $('.circa180'),
$circa180B = $('.circa180B'),
$circa170 = $('.circa170'),
$circa170B = $('.circa170B');


// initialize controller
var controller = new ScrollMagic.Controller();
    controller.scrollTo(100);
//LINK TO SCROLL BAR/ TIMELINE
var scrollAnimation = new TimelineMax();
    scrollAnimation.set($themainone, {autoAlpha: 1})





/********************************THE CENTER IMAGE******/
var CENTERtimeline = new TimelineMax();
  var CENTERinfo1 = TweenMax.to($thecentralimage, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
    var CENTERinfo2 = TweenMax.to($thecentralimage, 1,{opacity:1, delay:1, ease:Linear.easeInOut, duration:100})
      var CENTERinfo3 = TweenMax.to($thecentralimage, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
        CENTERtimeline.add(CENTERinfo1).add(CENTERinfo2).add(CENTERinfo3)

var CENTERinfotimeline = new ScrollMagic.Scene({triggerElement:1, duration:200})
  .setPin("#middle_off")
  .triggerHook("0")
  .addTo(controller)
  .reverse(true)
  .addIndicators({name: 'CENTER IMAGE'})
  .setTween(CENTERinfotimeline)
  CENTERinfotimeline.offset(270);


/****************THE MAV INFORMATION*****************/
var MAVINFOtimeline = new TimelineMax();
  var MAVinfo1 = TweenMax.to($thefirstone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
    var MAVinfo2 = TweenMax.to($thefirstone, 1,{opacity:1, delay:1, ease:Linear.easeInOut, duration:50})
      var MAVinfo3 = TweenMax.to($thefirstone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
        MAVINFOtimeline.add(MAVinfo1).add(MAVinfo2).add(MAVinfo3)

var MAVINFOtimeline = new ScrollMagic.Scene({triggerElement:1, duration:200})
    .setPin("#middle_off")
    .triggerHook("0")
    .addTo(controller)
    .reverse(true)
    .addIndicators({name: 'MAVINFO'})
    .setTween(MAVINFOtimeline)
    MAVINFOtimeline.offset(570);


/****************THE AUSTALIA INFORMATION*****************/
var AUSTINFOtimeline = new TimelineMax();
  var AUSTinfo1 = TweenMax.to($thesecondone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
    var AUSTinfo2 = TweenMax.to($thesecondone, 1,{opacity:1, delay:1, ease:Linear.easeInOut, duration:150})
      var AUSTinfo3 = TweenMax.to($thesecondone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
        AUSTINFOtimeline.add(AUSTinfo1).add(AUSTinfo2).add(AUSTinfo3)

var AUSTINFOtimeline = new ScrollMagic.Scene({triggerElement:1, duration:200})
    .setPin("#middle_off")
    .triggerHook("0")
    .addTo(controller)
    .reverse(true)
    .addIndicators({name: 'AUSTINFO'})
    .setTween(AUSTINFOtimeline)
    AUSTINFOtimeline.offset(950);


/****************THE PIKE INFORMATION*****************/
var PIKEINFOtimeline = new TimelineMax();
  var PIKEinfo1 = TweenMax.to($thethirdone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
    var PIKEinfo2 = TweenMax.to($thethirdone, 1,{opacity:1, delay:1, ease:Linear.easeInOut, duration:150})
      var PIKEinfo3 = TweenMax.to($thethirdone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
        PIKEINFOtimeline.add(PIKEinfo1).add(PIKEinfo2).add(PIKEinfo3)

var PIKEINFOtimeline = new ScrollMagic.Scene({triggerElement:1, duration:200})
    .setPin("#middle_off")
    .triggerHook("0")
    .addTo(controller)
    .reverse(true)
    .addIndicators({name: 'AUSTINFO'})
    .setTween(PIKEINFOtimeline)
    PIKEINFOtimeline.offset(1300);


/****************THE ARKON INFORMATION*****************/
var ARKONINFOtimeline = new TimelineMax();
  var ARKONinfo1 = TweenMax.to($thefourthone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
    var ARKONinfo2 = TweenMax.to($thefourthone, 1,{opacity:1, delay:1, ease:Linear.easeInOut, duration:150})
      var ARKONinfo3 = TweenMax.to($thefourthone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
        ARKONINFOtimeline.add(ARKONinfo1).add(ARKONinfo2).add(ARKONinfo3)

var ARKONINFOtimeline = new ScrollMagic.Scene({triggerElement:1, duration:200})
    .setPin("#middle_off")
    .triggerHook("0")
    .addTo(controller)
    .reverse(true)
    .addIndicators({name: 'AUSTINFO'})
    .setTween(ARKONINFOtimeline)
    ARKONINFOtimeline.offset(1700);


/***************THE HOLLCO INFORMATION*****************/
var HOLLINFOtimeline = new TimelineMax();
  var HOLLinfo1 = TweenMax.to($thefithone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
    var HOLLinfo2 = TweenMax.to($thefithone, 1,{opacity:1, delay:1, ease:Linear.easeInOut, duration:150})
      var HOLLinfo3 = TweenMax.to($thefithone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
        HOLLINFOtimeline.add(HOLLinfo1).add(HOLLinfo2).add(HOLLinfo3)

var HOLLINFOtimeline = new ScrollMagic.Scene({triggerElement:1, duration:200})
    .setPin("#middle_off")
    .triggerHook("0")
    .addTo(controller)
    .reverse(true)
    .addIndicators({name: 'AUSTINFO'})
    .setTween(HOLLINFOtimeline)
    HOLLINFOtimeline.offset(2050);


/****************THE AGD INFORMATION*****************/
var AGDINFOtimeline = new TimelineMax();
  var AGDinfo1 = TweenMax.to($thesixthone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
    var AGDinfo2 = TweenMax.to($thesixthone, 1,{opacity:1, delay:1, ease:Linear.easeInOut, duration:150})
      var AGDinfo3 = TweenMax.to($thesixthone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
        AGDINFOtimeline.add(AGDinfo1).add(AGDinfo2).add(AGDinfo3)

var AGDINFOtimeline = new ScrollMagic.Scene({triggerElement:1, duration:200})
    .setPin("#middle_off")
    .triggerHook("0")
    .addTo(controller)
    .reverse(true)
    .addIndicators({name: 'AUSTINFO'})
    .setTween(AGDINFOtimeline)
    AGDINFOtimeline.offset(2450);


/****************THE TRAFFIC INFORMATION*****************/
var TRAFFICINFOtimeline = new TimelineMax();
  var TRAFFICinfo1 = TweenMax.to($theseventhone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
    var TRAFFICinfo2 = TweenMax.to($theseventhone, 1,{opacity:1, delay:1, ease:Linear.easeInOut, duration:150})
      var TRAFFICinfo3 = TweenMax.to($theseventhone, 1,{opacity:0, delay:1, ease:Linear.easeInOut, duration:100})
        TRAFFICINFOtimeline.add(TRAFFICinfo1).add(TRAFFICinfo2).add(TRAFFICinfo3)

var TRAFFICINFOtimeline = new ScrollMagic.Scene({triggerElement:1, duration:200})
    .setPin("#middle_off")
    .triggerHook("0")
    .addTo(controller)
    .reverse(true)
    .addIndicators({name: 'AUSTINFO'})
    .setTween(TRAFFICINFOtimeline)
    TRAFFICINFOtimeline.offset(2800);
  });
/*********************************CENTRAL TEXT POP UPS****************************************/
