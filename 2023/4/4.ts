import * as fs from 'fs';

interface LotteryTicket {
    lotteryNbrs: string[];
    cardNbrs: string[];
    points: number;
    nbrCards: number;
}

const inputFile = fs.readFileSync('input.txt', 'utf8').split(/\r?\n/);

function setTickets(input: string[]) {
    let tickets: LotteryTicket[] = [];
    let counter = 0;
    input.forEach(card => {
        tickets.push({
            lotteryNbrs: card.split(': ')[1].split(/\s*\|\s*/)[0].split(/\s+/),
            cardNbrs: card.split(': ')[1].split(/\s*\|\s*/)[1].split(/\s+/),
            points: 0,
            nbrCards: 1
        })
        counter++;
    });

    countPoints(tickets);
}

function countPoints(lotteryTickets: LotteryTicket[]) {
    let totalPoints: number = 0;
    let id = 1;
    lotteryTickets.forEach(ticket => {
        ticket.cardNbrs.forEach(cardNbr => {
            if (ticket.lotteryNbrs.includes(cardNbr)) {
                ticket.points++;
            }
        });

        /* if (ticket.points >= 2) {
            ticket.points = 2 ** (ticket.points - 1);
        } */
        totalPoints += ticket.points
        id++;
    });

    console.log("Total Points: " + totalPoints)
    console.log(lotteryTickets)
    countTotalPoints(lotteryTickets, totalPoints);
}

function countTotalPoints(lotteryTickets: LotteryTicket[], totalPoints: number) {
    let realTotal = 0;
    for (let index = 0; index < lotteryTickets.length; index++) {
        for (let x = 0; x < lotteryTickets[index].nbrCards; x++) {
            for (let points = 0; points < lotteryTickets[index].points; points++) {
                lotteryTickets[index + points + 1].nbrCards++;
            }
        }
    }

    lotteryTickets.forEach(ticket => {
       realTotal += ticket.nbrCards 
    });
    console.log(realTotal)
}

setTickets(inputFile);