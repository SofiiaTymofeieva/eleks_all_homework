import { calculator } from "../calculator.js";
import { expect } from "chai";

describe('test error message if arguments is not a numbers', () => {
    it('should return error message about invalid arguments', () => {
        expect(calculator('2', 13, '+')).equal('Invalid arguments. First and second arguments should be a numbers!');
        expect(calculator(2, true, '-')).equal('Invalid arguments. First and second arguments should be a numbers!');
        expect(calculator('str', true, '*')).equal('Invalid arguments. First and second arguments should be a numbers!');
        expect(calculator('str', {}, '*')).equal('Invalid arguments. First and second arguments should be a numbers!');
    });
});

describe('test error message if operator is inavalid', () => {
    it('should return error message about invalid operator', () => {
        expect(calculator(2, 13, '@')).equal('Please, enter correct operator "+", "-", "*", "/".');
        expect(calculator(101, 23, true)).equal('Please, enter correct operator "+", "-", "*", "/".');
        expect(calculator(26, -13, false)).equal('Please, enter correct operator "+", "-", "*", "/".');
        expect(calculator(2222, 231, 'Hello world!')).equal('Please, enter correct operator "+", "-", "*", "/".');
        expect(calculator(400, 25, {})).equal('Please, enter correct operator "+", "-", "*", "/".');
    });
});