class GuessingGame {
    constructor() {
        this.variant = null;
        this.min = null;
        this.max = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let avg = Math.round((this.min + this.max)/2);
        this.variant = avg;
        return this.variant;
    }

    lower() {
        this.max = this.variant;
        this.variant = Math.round((this.variant + this.min)/2);
        return this.variant;
    }

    greater() {
        this.min = this.variant;
        this.variant = Math.round((this.variant + this.max)/2);
        return this.variant;
    }
}

module.exports = GuessingGame;
