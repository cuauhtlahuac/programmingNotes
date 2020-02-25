// Get time values an aplly before and after some function
var today = new Date();
      var time =
        today.getHours() +
        "h: " +
        today.getMinutes() +
        "m: " +
        today.getSeconds() +
        "s: " +
        today.getMilliseconds() +
        "ms";

// Only apply in web browser 
performance.now()
