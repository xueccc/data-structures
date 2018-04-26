class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.count = 0;
  	this.firstCount = 0;
  	this.lastCount = 0;
  	this.storage = {};
  }

  size() {
    return this.count;
  }

  enqueue(value) {
  	this.storage[this.lastCount] = value;
    this.count++;
    this.lastCount++;
  }

  dequeue() {
  	if(this.count === 0){
  	  return;
  	} else {
  	  var value = this.storage[this.firstCount];
      delete this.storage[this.firstCount];
      this.firstCount++;
      this.count--;
      return value;
    }
  }

}

var stack = new Queue;
