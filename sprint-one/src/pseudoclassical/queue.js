var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.firstCount = 0;
  this.lastCount = 0;
  this.storage = {};
};

Queue.prototype.size = function(){
  return this.count;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.lastCount] = value;
  this.count++;
  this.lastCount++;
};

Queue.prototype.dequeue = function(){
  if (this.count === 0){
  	return;
  } else {
    this.count--;
    var value = this.storage[this.firstCount];
    delete this.storage[this.firstCount];
    this.firstCount++;
    return value;
  }
};

var stack = new Queue();


