"use strict";
exports.__esModule = true;
exports.part2 = exports.part1 = void 0;
function part1() {
    var time = [35, 69, 68, 87];
    var distance = [213, 1168, 1086, 1248];
    var grandTotal = 1;
    time.forEach(function (currentTime) {
        var total = 0;
        for (var holdTime = 0; holdTime <= currentTime; holdTime++) {
            var res = holdTime * (currentTime - holdTime);
            if (res > distance[time.indexOf(currentTime)]) {
                total++;
            }
        }
        grandTotal *= total;
    });
    console.log("Part 1 Result: " + grandTotal);
}
exports.part1 = part1;
function part2() {
    var res = 0;
    for (var index = 0; index <= 35696887; index++) {
        var currentRes = index * (35696887 - index);
        if (currentRes >= 213116810861248) {
            res += 1;
        }
    }
    console.log("Part 2 Result: " + res);
}
exports.part2 = part2;
part1();
part2();
