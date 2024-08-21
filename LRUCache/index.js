// class LRUCache {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.map = new Map();
//     }

//     get(key) {
//         if (this.map.has(key)) {
//             const val = this.map.get(key);
//             this.map.delete(key); // Remove the key to update its position as most recently used
//             this.map.set(key, val); // Reinsert the key-value pair to mark it as most recently used
//             return val;
//         } else {
//             return -1; // Return -1 if key is not found
//         }
//     }

//     put(key, value) {
//         if (this.map.has(key)) {
//             this.map.delete(key); // Remove the key if it already exists to update its position
//         }
//         this.map.set(key, value); // Insert the key-value pair

//         if (this.map.size > this.capacity) {
//             const firstItem = this.map.keys().next().value; // Get the first (least recently used) item
//             this.map.delete(firstItem); // Remove the least recently used item
//         }
//     }
// }
    
//     let cache = new LRUCache(2); // Cache capacity of 2

// console.log(cache.put(1, 1)); // Cache is {1=1}
// console.log(cache.put(2, 2)); // Cache is {1=1, 2=2}
// console.log(cache.get(1));    // Returns 1, Cache is {2=2, 1=1}
// console.log(cache.put(3, 3)); // LRU key 2 is evicted, Cache is {1=1, 3=3}
// console.log(cache.get(2));    // Returns -1 (not found)
// console.log(cache.put(4, 4)); // LRU key 1 is evicted, Cache is {3=3, 4=4}
// console.log(cache.get(1));    // Returns -1 (not found)
// console.log(cache.get(3));    // Returns 3, Cache is {4=4, 3=3}
// console.log(cache.get(4));    // Returns 4, Cache is {3=3, 4=4}

class LRUCache {
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key){
        if(this.map.has(key)){
            const val = this.map.get(key)
            this.map.delete(key)
            this.map.set(key,val)
            return val
        } else {
            return -1
        }
    }

    put(key, value){
        if(this.map.has(key)){
            this.map.delete(key)
        }
        this.map.set(key,value)
        if(this.map.size > this.capacity){
            const firstItem = this.map.keys().next().value;
            this.map.delete(firstItem)
        }
    }
}


var LRUCacheOne = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){
        const val = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, val)
        return val
    }else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        this.map.delete(key)
    }
    this.map.set(key, value)
    if(this.map.size > this.capacity){
        const firstItem = this.map.keys().next().value;
        this.map.delete(firstItem)
    }
};