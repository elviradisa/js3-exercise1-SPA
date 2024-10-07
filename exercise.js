// 1. Namngiven - dvs du kan anropa den genom att använda dess namn. function name(){}
function helloWorld () {
    console.log('Hello World');
}
helloWorld();

// 2. Anonym i en variabel: const f = function() {}
// Anropas genom variabeln
const hello = function() {
    console.log('Hello Variable');
}
hello();

// 3. Pil-funktion: () => { }
// Anropas genom variabeln
const helloArrow = () => {
    console.log('Hello Arrow');
}
helloArrow();

// 4. Objekt
// Skapa ett objekt som innehåller attribut och metoder. Du har en spargris. Denna kan innehålla ett antal
// pengar - du kan; stoppa i pengar, ta ut pengar, ser hur mycket pengar som finns.
const savings = {
    balance: 0,
    deposit: function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Put ${amount} in savings`)
        } 
    },
    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`You've taken ${amount} from savings`);
        } else if (amount > this.balance) {
            console.log('Not enough money in savings');
        }
    },
    checkBalance: function() {
        console.log(`There is ${this.balance} in your savings `);
        return this.balance;
    }
}

savings.deposit(1000); //1000 in savings
savings.checkBalance(); //check balance
savings.withdraw(150); //withdraw 150
savings.checkBalance(); //check balance

// 5. Klasser
// Skapa en klass som har samma funktionalitet som spargrisen. Skapa spargrisar till "Anders" och
// "Lotta" från klassen.
class PiggyBank {
    constructor(owner) {
        this.owner = owner //ägarens namn
        this.balance = 0;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${this.owner} put ${amount} in piggybank`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${this.owner} has taken ${amount} from piggybank`);
        } else if (amount > this.balance) {
            console.log(`${this.owner} doesn't have enough money`)
        }
    }
    checkBalance() {
        console.log(`${this.owner} has ${this.balance} in piggybank`);
        return this.balance;
    }
}

const anders = new PiggyBank('Anders');
const lotta = new PiggyBank('Lotta');

anders.deposit(100);
anders.checkBalance();
anders.withdraw(50);
anders.checkBalance();

lotta.deposit(5000);
lotta.checkBalance();
lotta.withdraw(2500);
lotta.checkBalance();

// 6. Callbacks
// Callbacks används mycket när man arbetar med asynkron kod. Dvs vi väntar inte på att koden blir klar,
// utan får "en callback" när den är färdig istället.
// setInterval() är en asynkron funktion som använder att callback. Använd setInterval för att betala ut
// veckopeng till Lottas spargris. Lotta är ett krävande barn och vill få 10 pengar istoppat i spargrisen var
// 10e sekund
class LottaPiggyBank {
    constructor(owner) {
        this.owner = owner;
        this.balance = 0;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${this.owner} gets ${amount} put in piggybank`);
        }
    }
    checkBalance() {
        console.log(`${this.owner} has ${this.balance} in their piggybank`);
    }
}

const lottaPiggyBank = new LottaPiggyBank('Lotta');

// const weeklyAllowance = () => {
//     lottaPiggyBank.deposit(10); //stoppa i 10 kr
//     lottaPiggyBank.checkBalance();
// }

// //weeklyAllowance varje 10:e sekund (10 000 millisekunder)
// const allowanceInterval = setInterval(weeklyAllowance, 10000);

// setTimeout(() => {
//     clearInterval(allowanceInterval);
//     console.log('Weekly allowance has stopped');
// }, 60000); // Stoppar efter 60 sekunder (1 minut)

// 7. Promise
// Använd setTimeout() för att skapa ett promise som "resolvar" efter 30 sekunder. När det sker skall du
// ta 10 pengar från Lisas spargris och stoppa in dem i Anders gris. Skriv ut i webbläsarens konsoll hur
// mycket pengar som finns kvar i bådas spargrisar.
class AndersLottaPiggy {
    constructor(owner) {
        this.owner = owner;
        this.balance = 0;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${this.owner} gets ${amount} put in piggybank`)
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${this.owner} has taken ${amount} from piggybank`);
        } else if (amount > this.balance) {
            console.log(`${this.owner} doesn't have enough money`);
        }
    }
    checkBalance() {
        console.log(`${this.owner} has ${this.balance} in their piggybank`);
    }
}

//skapa varsen piggybank för anders o lotta
const andersaPiggyBank = new AndersLottaPiggy('Anders');
const lottasPiggyBank = new AndersLottaPiggy('Lotta');

//sätt in belopp i bådas 
andersaPiggyBank.deposit(100);
lottasPiggyBank.deposit(100);

const transfer = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 10000);
    })
}

transfer()
    .then(() => {
        console.log('30 seconds have passed. Transfer 10 from Lottas piggybank');
        lottasPiggyBank.withdraw(10); // ta 10
        andersaPiggyBank.deposit(10); // lägg in 10

        lottasPiggyBank.checkBalance();
        andersaPiggyBank.checkBalance();
    })
