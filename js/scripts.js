$(document).ready(function() {
    s=$('form#shipper').submit(function(event) {
        event.preventDefault();

        var inputted_distance = parseInt($("input#distance").val());
        var inputted_weight = parseInt($("input#weight").val());
        var inputted_speed = parseInt($("input#speed").val());
        var cost = { distance: inputted_distance,
                     weight: inputted_weight,
                     speed: inputted_speed,
                     shipper: function() {
                         0.05*this.distance + 2*this.weight + -1.5*this.speed;
                     }};
    });
});
