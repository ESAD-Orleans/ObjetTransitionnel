var PolygonPattern = function(options){
    var pattern = new Pattern(options),
        points = options.points,
        pointsCount = points.length;
    var prototype = {
        points:options.points,
        distances:[],
        distancesAbsolute:[],
        distanceCycle:0,
        open:options.open,
        //
        Initialize:function(){
          this.CalculateAllDistances()  
        },
        CurrentDistanceInCycle:function(){
            return this.CurrentTimeInCyclePosition()*this.distanceCycle;
        },
        CurrentSegment:function(){
            var n = 0,
                cdic = this.CurrentDistanceInCycle();
            while(this.distancesAbsolute[n] <= cdic){
                n++;
            }
            n--
            var n1 = (n+1+pointsCount)%pointsCount,
                a = points[n],
                b = points[n1],
                d = this.distances[n],
                da = this.distancesAbsolute[n],
                dd = this.CurrentDistanceInCycle() - da,
                dp = dd/d,
                dx = map(dp,0,1,a.x,b.x),
                dy = map(dp,0,1,a.y,b.y),
                segment = [a,b];
            segment.dx = dx;
            segment.dy = dy;
            //console.log(dp);
            return segment;
        },
        CalculateAllDistances:function(){
            for(var n=0; n<pointsCount-(this.open?1:0); n++){
                var n1 = (n+1+pointsCount)%pointsCount,
                    a = points[n],
                    b = points[n1];
                a.x = a[0];
                a.y = a[1];
                b.x = b[0];
                b.y = b[1];
                this.distances[n] = dist(a.x,a.y,b.x,b.y);
                this.distanceCycle+=this.distances[n];
            }
            var d = 0;
            for(var n=0; n<pointsCount-(this.open?1:0); n++){
                this.distancesAbsolute[n] = d;
                d += this.distances[n]
            }
            console.log(this.open,d,this.distancesAbsolute);

        },
        UpdatePosition:function(){
            var segment = this.CurrentSegment(),
                a = segment[0],
                b = segment[1];
            stroke(options.color);
            strokeWeight(2);
            line(a.x,a.y,b.x,b.y);
            noStroke();
            fill(options.color);
            ellipse(segment.dx,segment.dy,DOT_DIAMETER,DOT_DIAMETER);
        },
        Draw:function(){
            fill(options.color);
            ellipse(this.centerX,this.centerY,DOT_DIAMETER,DOT_DIAMETER);
        }
    }
    return _.extend(pattern,prototype);
}