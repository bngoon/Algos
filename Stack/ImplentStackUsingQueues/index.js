class MyStack {
    // Constructor initializes the queue (LIFO behavior simulation)
    constructor() {
        this.que = [];
    }

    // Push method to add a new element to the stack
    push(val) {
        // Add the new element to the back of the queue
        this.que.push(val);

        // Reorder the queue to simulate stack behavior (LIFO)
        // Shift the front element to the back for all elements except the newly added one
        for (let i = 0; i < this.que.length - 1; i++) {
            // Move the first element to the back of the queue
            this.que.push(this.que.shift());
        }
    }

    // Pop method removes the element on top of the stack and returns it
    pop() {
        // The last pushed element is always at the front due to push reordering
        // Remove and return the first element of the queue
        return this.que.shift();
    }

    // Returns the element on top of the stack
    top() {
        // The top of the stack is the first element of the queue
        // Return the first element without removing it
        return this.que[0];
    }

    // Returns true if the stack is empty, false otherwise
    empty() {
        // Check if the queue has any elements
        return this.que.length === 0;
    }
}