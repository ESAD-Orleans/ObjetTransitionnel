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
            fill(options.color);
            ellipse(this.centerX,this.centerY,DOT_DIAMETER,DOT_DIAMETER);
        }
    }
    return _.extend(pattern,prototype);
}