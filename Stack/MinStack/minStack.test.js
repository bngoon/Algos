// minStack.test.js
const MinStack = require('./index'); // Import MinStack from index.js

// Write your tests
describe('MinStack', () => {
    let minStack;

    beforeEach(() => {
        minStack = new MinStack();
    });

    test('push and getMin should work correctly', () => {
        minStack.push(3);
        minStack.push(5);
        expect(minStack.getMin()).toBe(3);  // 3 is the minimum

        minStack.push(2);
        expect(minStack.getMin()).toBe(2);  // 2 is the new minimum
    });

    test('pop should work and update getMin correctly', () => {
        minStack.push(3);
        minStack.push(5);
        minStack.push(2);
        minStack.pop();
        expect(minStack.getMin()).toBe(3);  // After popping, 3 is the minimum again
    });

    test('top should return the correct top element', () => {
        minStack.push(1);
        minStack.push(6);
        expect(minStack.top()).toBe(6);  // The top element is 6
    });

    test('empty stack should return correct values', () => {
        expect(minStack.top()).toBeUndefined();  // Top of an empty stack
        expect(minStack.getMin()).toBeUndefined();  // Min of an empty stack
    });
});
