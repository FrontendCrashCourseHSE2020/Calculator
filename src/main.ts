import Calculator, {Operation} from './Calc';
import apply = Reflect.apply;

var temp: string = '';

function appendElement(element: string) {
    temp += element;
}

document.addEventListener('DOMContentLoaded', function () {
    // находим элемент, в котором будем отображать результат
    const resultBlock: HTMLDivElement = document.getElementById('result') as HTMLDivElement;

    // создадим объект "калькулятор"
    const calc: Calculator = new Calculator();

    /**
     * Функция для вывода результата
     * @param value
     */
    function printResult(value: string) {
        resultBlock.style.color = 'black';
        resultBlock.innerText = `${value}`;
    }

    function handleError(e: Error) {
        resultBlock.style.color = 'red';
        resultBlock.innerText = `${e.message}`;
    }

    // найдём все кнопки с числами
    for (let i = 0; i < 10; i++) {
        let btn: HTMLButtonElement = document.getElementById('btn' + i) as HTMLButtonElement;

        btn.onclick = function () {
            appendElement(i.toString());
            printResult(temp);
        };

    }

    // кнопка плюс
    document.getElementById('plus').onclick = function () {
        calc.currentOperation = Operation.SUM;
        calc.setLeftValue(temp);
        temp = '';
    };

    // кнопка "минус"
    document.getElementById('minus').onclick = function () {
        calc.currentOperation = Operation.SUB;
        calc.setLeftValue(temp);
        temp = '';
    };

    // кнопка "умножить"
    document.getElementById('multi').onclick = function () {
        calc.currentOperation = Operation.MUL;
        calc.setLeftValue(temp);
        temp = '';
    };

    // кнопка "делить"
    document.getElementById('div').onclick = function () {
        try {
            calc.currentOperation = Operation.DIV;
            calc.setLeftValue(temp);
            temp = '';
        }
        catch (e) {
            handleError(e);
        }
    };

    // кнопка запятая
    document.getElementById('comma').onclick = function () {
        appendElement('.');
        printResult(temp);
     //   let printWithComma = `${temp}0`;
       // printResult(Number(printWithComma));
       // console.log(Number(printWithComma));
    };

    // кнопка "очистить"
    document.getElementById('clear').onclick = function () {
        temp = '';
        calc.clear();
        printResult(String(0));
    };

    // кнопка равно
    document.getElementById('equal').onclick = function () {
            calc.setRightValue(temp);
            printResult(String(calc.calculate()));
            temp = '';
            calc.clear();
    };
});
