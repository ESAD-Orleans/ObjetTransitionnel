var Pattern = function(options){
    return {
        startTime:0,
        //
        CurrentTime:function(){
          return ((new Date()).getTime() - this.startTime);  
        },
        CurrentTimeInCycle:function(){
            return this.CurrentTime()%this.CycleDuration();
        },
        CurrentTimeInCyclePosition(){
            return this.CurrentTimeInCycle()/this.CycleDuration();
        },
        CycleDuration:function(){
            return parseFloat(options.cycleDuration)*1000;
        },
        CycleCount:function(){
            return parseInt(options.cycleCount);
        },
        CurrentCycle:function(){
            return floor(this.CurrentTime()/this.CycleDuration()) 
        },
        Setup:function(){
            this.startTime = (new Date()).getTime();
            this.Initialize();
        },
        DrawDot:function(x,y,DIAMETER){
            var DOT_R = 5;
                dx = random(-DOT_R,DOT_R),
                dy = random(-DOT_R,DOT_R),
                d = _.isUndefined(DIAMETER)?DOT_DIAMETER:DIAMETER;
            ellipse(x+dx,y+dy,d,d);
        },
        Initialize:function(){
            // do nothing
        },
        UpdatePosition:function(){
            // do nothing
        },
        Update:function(){
            if(this.CurrentCycle()>=this.CycleCount()){
                return false;
            }
            this.UpdatePosition();
            this.Draw();
            return true;
        }
    }
}
