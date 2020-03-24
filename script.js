var container = document.getElementById('dice-container'), generateButton = document.getElementById('generate-die'), rollButton = document.getElementById('roll-die'), sumButton = document.getElementById('sum-die');
var numOfDice = 0, diceArr = [];
// Create a new dice object.
generateButton.addEventListener('click', function () { return new Die(null); });
// Roll the dice.
rollButton.addEventListener('click', function () { return diceArr.forEach(function (die) { return die.roll(); }); });
// Sum the dice.
sumButton.addEventListener('click', function () {
    if (diceArr.length === 0) {
        alert('no dice!');
    }
    else {
        var sum_1 = 0;
        diceArr.forEach(function (die) { return sum_1 = sum_1 + die.value; });
        alert(sum_1);
    }
});
var Die = /** @class */ (function () {
    function Die(value) {
        this.value = value;
        this.render();
        diceArr.push(this);
    }
    Die.prototype.render = function () {
        var _this = this;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.id = (numOfDice++).toString();
        this.roll();
        this.div.textContent = this.value.toString();
        container.appendChild(this.div);
        this.div.addEventListener('click', function () { return _this.roll(); });
        this.div.addEventListener('dblclick', function () {
            var index = diceArr.indexOf(_this);
            if (index > -1) {
                diceArr.splice(index, 1);
            }
            container.removeChild(_this.div);
        });
    };
    Die.prototype.roll = function () {
        var randomVal = Math.floor((Math.random() * 6) + 1);
        this.value = randomVal;
        this.div.textContent = this.value.toString();
    };
    return Die;
}());
