export enum Operation {
    SUM,
    SUB,
    DIV,
    MUL,
    SEP
}

export default class Calculator {

    private _currentResult = 0

    private lastOperation: Operation = null

    public apply(value: number) {
        if (this.lastOperation != null) {
            switch (this.lastOperation) {
                case Operation.SUM:
                    this._currentResult += value
                    break
                case Operation.SUB:
                    this._currentResult -= value
                    break
                case Operation.DIV:
                    this._currentResult /= value
                    break
                case Operation.MUL:
                    this._currentResult *= value
                    break
                case Operation.SEP:
                    this._currentResult = Number(this._currentResult + '.' + value)
                    break
            }
        } else {
            this._currentResult = value
        }
    }

    public cancel(){
        this.lastOperation = null
        this._currentResult = 0
    }

    set operation(value: Operation) {
        this.lastOperation = value
    }

    get currentResult() {
        return this._currentResult
    }
}
