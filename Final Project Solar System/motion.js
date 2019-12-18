var diameter = 500 ; 
TweenMax.to("#venus", 5 ,{
bezier:{curviness:1.5,values:[{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]}
,ease:Power0.easeNone,repeat:-1});

var starWrapper = $('#starWrapper');
var cWidth = starWrapper.width();
var cHeight = starWrapper.height();

var numStars = 1000; 

for(var i=0; i<numStars ; i++){
    var xTarget = Math.floor(Math.random() * cWidth);
    var yTarget = Math.floor(Math.random() * cHeight);
    var glowNumber = Math.floor(Math.random() * 13);

 $('#starWrapper').append("<div class='star glow" + glowNumber + "' style='top:" + yTarget + "px;left:" + xTarget + "px;'></div>");
}


    