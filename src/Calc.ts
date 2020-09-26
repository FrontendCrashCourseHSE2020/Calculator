export enum Operation {
    SUM,
    SUB,
    DIV,
    MUL,
    FLOAT
}

export default class Calculator {

    private _currentResult = '0';
    public _stringResult = '';
    // создаем гет-метод для доступа к переменной результата
    public get currentResult(): string {
        return this._currentResult;
    }
    // создаем сет-метод для доступа к переменной результата
    public set currentResult(n: string) {
        this._currentResult = n;
    }
    private lastOperation: Operation = null;

    public apply(value: number) {
        if (this.lastOperation != null) {
            // если есть операция -- выполняем её
            switch (this.lastOperation) {
                case Operation.SUM:
                    this._currentResult = (Number(this._currentResult) + value).toString();
                    break;
                case Operation.SUB:
                    this._currentResult = (Number(this._currentResult) - value).toString();
                    break;
                case Operation.DIV:
                    this._currentResult = (Number(this._currentResult) / value).toString();
                    break;
                case Operation.MUL:
                    this._currentResult = (Number(this._currentResult) * value).toString();
                    break;
                case Operation.FLOAT:
                    if (Number.isInteger(Number(this._currentResult))) this._currentResult += ('.' + value.toString());
                    else this._currentResult += value.toString();
                    break;
            }
        } else {
            // иначе просто делаем выбранное число текущим результатом
            this._currentResult = value.toString();
        }
    }
    set operation(value: Operation) {
        this.lastOperation = value;
    }
}
