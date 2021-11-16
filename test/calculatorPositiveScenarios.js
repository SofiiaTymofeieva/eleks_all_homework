import { calculator } from "../calculator.js";
import { expect } from "chai";

describe('test "+" operator', () => {
    it('should succesfully add integers', () => {
        expect(calculator(3, 5, '+')).equal(8);
        expect(calculator(10, 123, '+')).equal(133);
        expect(calculator(389, 520, '+')).equal(909);
    });
});

describe('test "-" operator', () => {
    it('should succesfully minus integers', () => {
        expect(calculator(34, 5, '-')).equal(29);
        expect(calculator(10, 123, '-')).equal(-113);
        expect(calculator(25, 13, '-')).equal(12);
    });
});

describe('test "*" operator', () => {
    it('should succesfully multiple integers', () => {
        expect(calculator(25, 5, '*')).equal(125);
        expect(calculator(10, 0, '*')).equal(0);
        expect(calculator(-2, 13, '*')).equal(-26);
    });
});

describe('test "/" operator', () => {
    it('should succesfully divide integers', () => {
        expect(calculator(25, 5, '/')).equal(5);
        expect(calculator(10, 2, '/')).equal(5);
        expect(calculator(222, -2, '/')).equal(-111);
    });
});