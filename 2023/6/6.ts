export function part1() {
    const time: number[] = [35, 69, 68, 87];
    const distance: number[] = [213, 1168, 1086, 1248];

    let grandTotal = 1;
    time.forEach(currentTime => {
        let total = 0;
        for (let holdTime = 0; holdTime <= currentTime; holdTime++) {
            let res = holdTime * (currentTime - holdTime)
            if (res > distance[time.indexOf(currentTime)]) {
                total++;
            }
        }
        grandTotal *= total;
    })
    console.log("Part 1 Result: " + grandTotal)
}

export function part2() {
    let res = 0;

    for (let index = 0; index <= 35696887; index++) {
        let currentRes = index * (35696887 - index);
        if (currentRes >= 213116810861248) {
            res += 1;
        }
    }
    console.log("Part 2 Result: " + res);
}


part1();
part2();