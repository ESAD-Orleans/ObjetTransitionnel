document.addEventListener('ontouchstart', function(e) {e.preventDefault()});
document.addEventListener('ontouchmove', function(e) {e.preventDefault()});

var canvas
    , records = []
    , record
    , recording = false,
    exercice,
    momentIndex = 0,
    momentPointIndex = 0;
//

function preload(){
    exercice = loadJSON('json/exercice1.json');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    console.log(exercice);
    background(0);
}

function draw() {
    noStroke();
        ellipseMode(CENTER);
        fill(255, 255, 255,30);
    if (recording) {
        var x0 = touchX - width / 2
            , y0 = touchY - height / 2
            , pointsCount = record.points.length
            , x1 = pointsCount > 0 ? record.points[pointsCount - 1][0] : x0
            , y1 = pointsCount > 0 ? record.points[pointsCount - 1][1] : y0;
            record.points.push([round(x0), round(y0)]);
        
        drawLineBeetween(x0,y0,x1,y1);
        
    
    }
    if(true){
        
        var moment = exercice.moments[momentIndex],
            momentPoints = moment.points,
            point1 = momentPoints[momentPointIndex%momentPoints.length],
            point0 = momentPoints[(momentPointIndex-1)%momentPoints.length];
                
        if(momentPointIndex>0){    
        
            var
            p0x = point0[0],
            p0y = point0[1],
            p1x = point1[0],
            p1y = point1[1]
            ;
            if(moment){
                fill(moment.color);
                drawLineBeetween(p0x,p0y,p1x,p1y);
            }
        }
    
        momentPointIndex+=1;
        if(momentPointIndex>= momentPoints.length){
            momentPointIndex = 0 ;
            momentIndex ++;
            if(momentIndex>=exercice.moments.length){
                momentIndex = 0;
            }
        }
        
        
    }
    fill(0, 10);
    rect(0, 0, width, height);
}
function drawLineBeetween(x0,y0,x1,y1){
    var d0to1 = dist(x0, y0, x1, y1)
        , d0to1Sqrt = pow(d0to1,1.1);//sqrt(1000 * d0to1 + 1);
    //
    if (d0to1>1) {
        push();
        translate(width / 2, height / 2);
        for (var i = 0; i < d0to1Sqrt; i++) {
            var ranAlpha = random(TWO_PI)
                , ranRadius = 0 //sqrt(random(.1)) * 60
                , rDX = cos(ranAlpha) * ranRadius
                , rDY = sin(ranAlpha) * ranRadius
                , rMap = random(1)
                , rX = map(rMap,0,1,x0, x1)
                , rY = map(rMap,0,1,y0, y1)
                , ranDiameter = random(20,40);
            ellipse(rX + rDX, rY + rDY, ranDiameter, ranDiameter);
        }
        pop();
    }
    /*
    push();
    translate(width / 2, height / 2);
    ellipse(x0,y0,20,20);
    pop();
    */
}

function touchStarted() {
    recording = true;
    record = {
        starttime: millis()
        , points: []
    }
}

function touchMoved() {}

function touchEnded() {
    recording = false;
    records.push(record);
    console.log(record);
    record = null;
            console.log(JSON.stringify(records));

}

function keyTyped() {
    if (key == 's') {
        console.log(JSON.stringify(records));
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}