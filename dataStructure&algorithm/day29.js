// 思路：根据栈顶是谁来确定最小值 利用LIFO原则
var MinStack = function() {
    this.items = [];
    this.minItems = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.minItems.length == 0){
        this.minItems.push(val);
    }else{
        if(val < this.minItems[this.minItems.length - 1]){
            this.minItems.push(val);
        }else{
            this.minItems.push(this.minItems[this.minItems.length - 1])
        }
    }
    
    this.items.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.minItems.length > 0){
        this.minItems.pop();
    }
    return this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minItems[this.minItems.length - 1];
};

var MinStack = new MinStack();
MinStack.push(-2);
MinStack.push(0);
MinStack.push(-3);