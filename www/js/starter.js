document.addEventListener('ontouchstart', function(e) {e.preventDefault()});
document.addEventListener('ontouchmove', function(e) {e.preventDefault()});

var DOT_DIAMETER = 100;

var canvas,
    exercice,
    itemIndex = 0,
    item;
//

function preload(){
    exercice = loadJSON('json/exercice2.json');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    background(0);
    LoadItem();
}

function draw() {
    noStroke();
    ellipseMode(CENTER);
    background(0);  
    if(!item.Update()){
        itemIndex++;
        itemIndex = itemIndex>=exercice.items.length?0:itemIndex;
        LoadItem();
    }
}

function LoadItem(){
    var itemOptions = exercice.items[itemIndex];
    delete item;
    //
    switch(itemOptions.type){
        case 'circle' : item = new CirclePattern(itemOptions); break;
        case 'fixedpoint' : item = new FixedPointPattern(itemOptions); break;
        case 'polygon' : item = new PolygonPattern(itemOptions); break;
    }
    item.Setup();
}

function touchStarted() {}

function touchMoved() {}

function touchEnded() {}

function keyTyped() {}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}