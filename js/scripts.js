$(document).ready(function() {
    $('form#shipper').submit(function(event) {
        event.preventDefault();

        var inputted_distance = parseInt($("input#distance").val());
        var inputted_weight = parseInt($("input#weight").val());
        var inputted_speed = parseInt($("select#speed").val());
        var cost = { distance: inputted_distance,
                     weight: inputted_weight,
                     speed: inputted_speed,
                     shipper: function() {
                         return ((0.05*this.distance + 2*this.weight) * this.speed).toFixed(2);

                     }};



                $("#result").text(cost.shipper());
                $("#result-shipper").show();


                    $("input#distance").val("");
                    $("input#weight").val("");
                    $("input#speed").val("");


    });
});
