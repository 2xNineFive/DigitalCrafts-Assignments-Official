(function($) {
    // your code here
    
let getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};

let width = 400;
let height = 400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

let clicks = 0;

$('#map').click(function (event) {

    console.log(clicks);
    clicks++


    let getDistance = function(event, target) {
        var diffX = event.offSetX - target.x;
        var diffY = event.offSetY - target.y;
        return Math.sqrt((diffX * diffX) + (diffY * diffY));
    };

    var getDistanceHint = function (distance) {
        if (distance < 10) {
          return "Boiling hot!";
        } else if (distance < 20) {
          return "Really hot";
        } else if (distance < 40) {
          return "Hot";
        } else if (distance < 80) {
          return "Warm";
        } else if (distance < 160) {
          return "Cold";
        } else if (distance < 320) {
          return "Really cold";
        } else {
          return "Freezing!";
        }
      };

      var distance = getDistance(event, target);
var distanceHint = getDistanceHint(distance);
$("#distance").text(distanceHint);
});

})(window.jQuery);



// const cool = document.getElementById('heading')
// cool.innerText = "Frankie is Mad Dope!"