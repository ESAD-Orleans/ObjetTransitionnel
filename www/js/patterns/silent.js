var SilentPattern = function(options){
    var pattern = new Pattern(options);
    var prototype = {
        Setup:function(){
            this.startTime = (new Date()).getTime();
            options.cycleCount = 1;
            options.cycleDuration = options.duration;
        },
        Draw:function(){
            if(options.fade){
            fill(0,30);
            rect(0,0,width,height);
            }
        }
    }
    return _.extend(pattern,prototype);
}
