var CirclePattern = function(options){
    var pattern = new Pattern(options);
    var prototype = {
        centerX:parseFloat(options.centerX),
        centerY:parseFloat(options.centerY),
        x:0,
        y:0,
        rotationDirection:options.rotationDirection=="clockwise"?1:-1,
        diameter:parseFloat(options.diameter),
        //
        Initialize:function(){
            this.initialAngle = options.initialAngle ? TWO_PI*parseFloat(options.initialAngle)/360 : 0;
        },
        Draw:function(){
            fill(options.color);
            this.DrawDot(this.x,this.y);
        },
        UpdatePosition:function(){
            var ctp = this.CurrentTimeInCyclePosition(),
                ia = this.initialAngle,
                rd = this.rotationDirection,
                r = this.diameter/2;
            this.x = this.centerX + cos(ia+ctp*TWO_PI*rd)*r;
            this.y = this.centerY + sin(ia+ctp*TWO_PI*rd)*r;
            console.log(this.x,this.y);
        }
    }
    return _.extend(pattern,prototype);
}
