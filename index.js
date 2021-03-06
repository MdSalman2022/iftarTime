(function() {
    var start = new Date;
    start.setHours(18, 22, 0); 
  
    function pad(num) {
      return ("0" + parseInt(num)).substr(-2);
    }
  
    function tick() {
      var now = new Date;
      if (now > start) { 
        start.setDate(start.getDate() + 1);
      }
      var remain = ((start - now) / 1000);
      var hh = pad((remain / 60 / 60) % 60);
      var mm = pad((remain / 60) % 60);
      var ss = pad(remain % 60);
      
      document.querySelector('.hours').innerHTML = hh;

      document.querySelector('.mins').innerHTML = mm;

      document.querySelector('.sec').innerHTML = ss;
      setTimeout(tick, 1000);
    }
  
    document.addEventListener('DOMContentLoaded', tick);
  })();
