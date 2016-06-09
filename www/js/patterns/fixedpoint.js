var FixedPointPattern = function(options){
    var pattern = new Pattern(options);
    var prototype = {
        centerX:parseFloat(options.centerX),
        centerY:parseFloat(options.centerY),
        diameter:parseFloat(options.diameter),
        //
        Setup:function(){
            this.startTime = (new Date()).getTime();
        },
        Draw:function(){
            var t = this.CurrentTimeInCyclePosition()
            var baseColor = color(options.color);
            var fillColor = color(red(baseColor),green(baseColor),blue(baseColor),cos((t-1)*PI)*250)
            fill(fillColor);
            this.DrawDot(this.centerX,this.centerY,(t)*DOT_DIAMETER);
        }
    }
    return _.extend(pattern,prototype);
}
