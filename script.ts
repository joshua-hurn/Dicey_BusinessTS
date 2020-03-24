const container = <HTMLDivElement>document.getElementById('dice-container'),
    generateButton = <HTMLButtonElement>document.getElementById('generate-die'),
    rollButton = <HTMLButtonElement>document.getElementById('roll-die'),
    sumButton = <HTMLButtonElement>document.getElementById('sum-die');
let numOfDice: number = 0,
    diceArr: Die[] = [];

// Create a new dice object.
generateButton.addEventListener('click', () => new Die(null));

// Roll the dice.
rollButton.addEventListener('click', () => diceArr.forEach(die => die.roll()));

// Sum the dice.
sumButton.addEventListener('click', () => {
    if (diceArr.length === 0) {
        alert('no dice!');
    } else {
        let sum = 0;
        diceArr.forEach(die => sum = sum + die.value);
        alert(sum);
    }
});

class Die {
    div: HTMLDivElement;
    value: number;
    constructor(value) {
        this.value = value;
        this.render();
        diceArr.push(this);
    }

    render() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.id = (numOfDice++).toString();
        this.roll();
        this.div.textContent = this.value.toString();
        container.appendChild(this.div);
        this.div.addEventListener('click', () => this.roll());
        this.div.addEventListener('dblclick', () => {
            const index: number = diceArr.indexOf(this);
            if (index > -1) {
                diceArr.splice(index, 1);
            }
            container.removeChild(this.div);
        });
    }

    roll() {
        let randomVal: number = Math.floor((Math.random() * 6) + 1);
        this.value = randomVal;
        this.div.textContent = this.value.toString();
    }
}
