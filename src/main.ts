import { callbackify } from 'util';
import Calculator, {Operation} from './Calc';

document.addEventListener('DOMContentLoaded', function () {

    const resultBlock: HTMLDivElement = document.getElementById('result') as HTMLDivElement;

    const calc: Calculator = new Calculator();
    /**
    @param value
    */
    function printResult(value: number) {
        resultBlock.innerText = `${value}`;
    }

    for (let i = 0; i < 10; i++) {
        let btn: HTMLButtonElement = document.getElementById('btn' + i) as HTMLButtonElement;

        btn.onclick = function () {
            calc.apply(i);
            calc.operation = null;
            printResult(calc.currentResult);
        };

    }

    document.getElementById('sum').onclick = function () {
        calc.operation = Operation.SUM;
    };

    document.getElementById('sub').onclick = function () {
        calc.operation = Operation.SUB;
    };

    document.getElementById('div').onclick = function () {
        calc.operation = Operation.DIV;
    };

    document.getElementById('mul').onclick = function () {
        calc.operation = Operation.MUL;
    };

    document.getElementById('pow').onclick = function () {
        calc.operation = Operation.POW;
    };

    document.getElementById('sep').onclick = function () {
        calc.operation = Operation.SEP;
    };

    document.getElementById('delete').onclick = function () {
        calc.delete()
        printResult(calc.currentResult)
    };

});
