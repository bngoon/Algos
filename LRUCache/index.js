class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        if (this.map.has(key)) {
            const val = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, val); // Move the key to the end to show that it was recently used
            return val;
        } else {
            return -1;
        }
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key); // Remove the key if it exists to update the order
        }
        this.map.set(key, value); // Insert the key-value pair into the map

        if (this.map.size > this.capacity) {
            const firstItem = this.map.keys().next().value; // Get the first (least recently used) item
            this.map.delete(firstItem); // Remove the least recently used item
        }
    }
}
