var SpiralPattern = function(options){
    var pattern = new Pattern(options);
    var prototype = {
        centerX:parseFloat(options.centerX),
        centerY:parseFloat(options.centerY),
        x:0,
        y:0,
        rotationDirection:options.rotationDirection=="clockwise"?1:-1,
        width:parseFloat(options.width),
        scaleY:parseFloat(options.scaleY),
        //
        Draw:function(){
            fill(options.color);
            this.DrawDot(this.x,this.y);
        },
        UpdatePosition:function(){
            var ctp = this.CurrentTimeInCyclePosition(),
                turns = 4,
                ta = 2*acos(ctp)/PI,
                t = ctp*TWO_PI,
                tt = t*turns,
                rd = this.rotationDirection,
                h = this.height,
                w = this.width/2;
            this.x = this.centerX + cos(tt)*w*ctp;
            //x position
            this.y = this.centerY + sin(tt)*w*ctp;
            //this.x = this.centerX + cos(ctp*TWO_PI*rd)*w;
            //this.y = this.centerY + sin(ctp*TWO_PI*2*rd)*h;
        }
    }
    return _.extend(pattern,prototype);
}
