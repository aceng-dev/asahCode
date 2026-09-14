import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Fitur Penjumlahan', ()=>{
    //Arrange
    const operandA = 1;
    const operandB = 2;

    //Action
    const actualValue = sum(operandA,operandB);

    //Assert
    const expectedValue = 3;
    assert.equal(actualValue,expectedValue);
})