
var diameter = 400 ; 
TweenMax.to("#venus", 3,{
bezier:{curviness:1.5,values:[{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]}
,ease:Power0.easeNone,repeat:-1});

diameter = 1000 ; 
TweenMax.to("#earth", 9 ,{
bezier:{curviness:1.5,values:[{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]}
,ease:Power0.easeNone,repeat:-1});

diameter = 300 ; 
TweenMax.to("#moon", 1 , {
bezier:{curviness:1.5,values:[{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]}
,ease:Power0.easeNone,repeat:-1});

diameter = 1500; 
TweenMax.to("#pluto", 100,{
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


    