// TEMPERATURES
// https://www.codingame.com/training/easy/temperatures

const n = 5;
var b = "-12 -5 -137"

if (b) {
    var temperatures = b.split(' ');
    var sorted_temps = [];

    for (var i = 0; i < temperatures.length; i++) {
        sorted_temps.push(parseInt(temperatures[i]))
    }

    sorted_temps = sorted_temps.sort((a, b) => a - b);

    var options = [];

    var max = sorted_temps.reduce(function(a, b) {return Math.max(a, b)});
    var min = sorted_temps.reduce(function(a, b) {return Math.min(a, b)});

    if (max < 0) {
        console.log(max);
    } else if (min > 0) {
        console.log(min);
    } else {
        for (var i = 0; i , sorted_temps.length; i++) {
            if (sorted_temps[i] > 0) {
                options.push(sorted_temps[i - 1]);
                options.push(sorted_temps[i]);
                break;
            }
        }
    }

    if (options.length > 0) {
        if (Math.abs(options[0]) > options[1]) {
            console.log(options[1]);
        } else if (Math.abs(options[0]) == options[1]) {
            console.log(options[1]);
        } else {
            console.log(options[0]);
        }
    }
} else {
    console.log(0);
}