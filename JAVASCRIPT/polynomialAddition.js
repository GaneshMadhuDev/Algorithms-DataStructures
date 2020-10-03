const formulaX = '-3x^2 + 2x - 5';
const formulaY = '2x^3 - 7x';
const formulaZ = '-2x + 3';

class Polynomial {
    constructor(formula) {
        const whitespace = /\s+/g;
        const groups = /[+-]?\d+x?(\^\d+)?/g;

        this.count = formula.replace(whitespace, '')
            .match(groups)
            .reduce((all, group) => {
                const [coefficient, power] = this._parseGroup(group);
                return all.set(power, coefficient);
            }, new Map);
    }

    toString() {
        const formula = [...this.count.entries()]
            .sort((a, b) => b[0] - a[0])
            .map(this._toGroup)
            .join('');

        return this._prettifyFormula(formula);
    }

    add(polynomial) {
        for (const [power, coefficient] of polynomial.count) {
            const newCoefficient = (this.count.get(power) || 0) + coefficient;

            // if(newCoefficient === 0) {
            //     this.count.delete(power);
            // } else {
                this.count.set(power, newCoefficient);
            // }
        }
    }

    multiply(polynomial) {
        for(const [power, coefficient] of new Map(this.count)) {
            this.count.delete(power);

            for(const [newPower, newCoefficient] of polynomial.count) {
                const resultingPower = power + newPower;
                const existingCoefficient = this.count.get(resultingPower) || 0;
                const resultingCoefficient = existingCoefficient + coefficient * newCoefficient;

                this.count.set(resultingPower, resultingCoefficient);
            }
        }
    }

    _parseGroup(group) {
        const [coefficient, power] = group.split('x');

        return [Number(coefficient), this._parsePower(power)];
    }

    _parsePower(power) {
        switch (power) {
            case undefined:
                return 0;
            case '':
                return 1;
            default:
                return Number(power.replace('^', ''));
        }
    }

    _prettifyFormula(formula) {
        const operationsInBetween = /(?!^)([+-])/g;
        const plusAtStart = /^\+/;

        return formula.replace('^1', '')
            .replace('x^0', '')
            .replace(operationsInBetween, ' $1 ')
            .replace(plusAtStart, '');
    }

    _toGroup([power, coefficient]) {
        const plus = (coefficient >= 0) ? '+' : '';

        return `${plus}${coefficient}x^${power}`;
    }

}


(function () {
    const x = new Polynomial(formulaX);
    const y = new Polynomial(formulaY);
    const z = new Polynomial(formulaZ);

    x.add(y);
    y.multiply(z);

    console.log('X + Y:', x.toString());
    console.log('Y * Z:', y.toString());
})();
