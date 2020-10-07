import {type} from 'os';
import {print} from 'util';

export enum Operation {
    SUM,
    SUB,
    DIV,
    MUL
}

export default class Calculator {

    private _currentResult: number = 0;
    private _leftVal: number = 0;
    private _rightVal: number = 0;
    private _currentOperation: Operation;

    public calculate() {
            // если есть операция -- выполняем её
            switch (this._currentOperation) {
                case Operation.SUM:
                    return this._currentResult = this._leftVal + this._rightVal;
                case Operation.SUB:
                    return this._currentResult = this._leftVal - this._rightVal;
                case Operation.DIV:
                    if (this._rightVal !== 0) {
                        return this._currentResult = this._leftVal / this._rightVal;
                    } else {
                        throw new Error('Zero Devision');
                    }
                case Operation.MUL:
                    return this._currentResult = this._leftVal * this._rightVal;
            }
        }

    setLeftValue(value: string) {
        this._leftVal = Number(value);
    }

    getLeftValue() {
        return this._leftVal;
    }

    setRightValue(value: string) {
        this._rightVal = Number(value);
    }

    getRightValue() {
        return this._rightVal;
    }


    set currentOperation(operation: Operation) {
        this._currentOperation = operation;
    }

    get currentResult() {
        return this._currentResult;
    }


    public clear() {
        this._leftVal = 0;
        this._rightVal = 0;
        this._currentResult = 0;
    }


}
