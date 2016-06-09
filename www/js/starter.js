document.addEventListener('ontouchstart', function(e) {e.preventDefault()});
document.addEventListener('ontouchmove', function(e) {e.preventDefault()});

var DOT_DIAMETER = 120;

var canvas,
    exercice,
    itemIndex = 0,
    item,
    touchDown = false;
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
    fill(0,3);
    rect(0,0,width,height);
    ellipseMode(CENTER);
    if(!item.Update()){
        itemIndex++;
        itemIndex = itemIndex>=exercice.items.length?0:itemIndex;
        LoadItem();
    }
    if(touchDown){
        fill(200);
        ellipse(touchX,touchY,DOT_DIAMETER,DOT_DIAMETER);
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
        case 'infinite' : item = new InfinitePattern(itemOptions); break;
        case 'spiral' : item = new SpiralPattern(itemOptions); break;
        case 'silent' : item = new SilentPattern(itemOptions); break;
    }
    item.Setup();
}

function touchStarted() {
    touchDown = true;
}

function touchMoved() {
}

function touchEnded() {
        touchDown = false;
}

function keyTyped() {}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}
