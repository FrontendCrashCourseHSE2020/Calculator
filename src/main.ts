import Calculator, {Operation} from './Calc'

document.addEventListener('DOMContentLoaded', function () {

    const resultBlock: HTMLDivElement = document.getElementById('result') as HTMLDivElement
    const calc: Calculator = new Calculator()

    /**
     * Функция для вывода результата
     * @param value
     */
    function printResult(value: number) {
        resultBlock.innerText = `${value}`
    }

    for (let i = 0; i < 10; i++) {
        let btn: HTMLButtonElement = document.getElementById('btn' + i) as HTMLButtonElement

        btn.onclick = function () {
            calc.apply(i)
            calc.operation = null
            printResult(calc.currentResult)
        }
    }

    document.getElementById('sum').onclick = function () {
        calc.operation = Operation.SUM
    }

    document.getElementById('subtract').onclick = function () {
        calc.operation = Operation.SUB
    }

    document.getElementById('divide').onclick = function () {
        calc.operation = Operation.DIV
    }

    document.getElementById('multiply').onclick = function () {
        calc.operation = Operation.MUL
    }

    document.getElementById('cancel').onclick = function () {
        calc.cancel()
        printResult(calc.currentResult)
    }

    document.getElementById('separator').onclick = function () {
        calc.operation = Operation.SEP
    }
})
