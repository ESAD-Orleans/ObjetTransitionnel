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
        Draw:function(){
            fill(options.color);
            ellipse(this.x,this.y,DOT_DIAMETER,DOT_DIAMETER);
        },
        UpdatePosition:function(){
            var ctp = this.CurrentTimeInCyclePosition(),
                rd = this.rotationDirection,
                r = this.diameter/2;
            this.x = this.centerX + cos(ctp*TWO_PI*rd)*r;
            this.y = this.centerY + sin(ctp*TWO_PI*rd)*r;
        }
    }
    return _.extend(pattern,prototype);
}