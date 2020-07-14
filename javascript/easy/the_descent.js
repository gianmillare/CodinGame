while (true) {
    var max = 0;
    var imax = 0;
    for (var i = 0; i < 8; i++) {
        var mountain_h = parseInt(readline());
        if (mountain_h > max) {
            max = mountain_h;
            imax = i;
        }
    }
    console.log(imax);
}