"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputFile = fs.readFileSync('sampleInput.txt', 'utf8').split(/\r?\n/);
function setTickets(input) {
    var tickets = [];
    var counter = 0;
    input.forEach(function (card) {
        tickets.push({
            lotteryNbrs: card.split(': ')[1].split(/\s*\|\s*/)[0].split(/\s+/),
            cardNbrs: card.split(': ')[1].split(/\s*\|\s*/)[1].split(/\s+/),
            points: 0,
            id: counter
        });
        counter++;
    });
    countPoints(tickets);
}
function countPoints(lotteryTickets) {
    var totalPoints = 0;
    var id = 1;
    lotteryTickets.forEach(function (ticket) {
        ticket.cardNbrs.forEach(function (cardNbr) {
            if (ticket.lotteryNbrs.includes(cardNbr)) {
                ticket.points++;
            }
        });
        if (ticket.points >= 2) {
            ticket.points = Math.pow(2, (ticket.points - 1));
        }
        totalPoints += ticket.points;
        id++;
    });
    console.log("Total Points: " + totalPoints);
    console.log(lotteryTickets);
    countTotalPoints(lotteryTickets, totalPoints);
}
function countTotalPoints(lotteryTickets, totalPoints) {
    var realTotal = totalPoints;
    for (var index = lotteryTickets.length - 1; index >= 0; index--) {
        for (var rounds = 0; rounds < lotteryTickets[index].points; rounds++) {
            if (lotteryTickets[index + rounds] < lotteryTickets.length) {
                realTotal += lotteryTickets;
            }
        }
    }
    console.log(realTotal);
}
setTickets(inputFile);
