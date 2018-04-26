var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.storage = {};
  obj.firstCount = 0;
  obj.lastCount = 0;
  return obj;
};

var queueMethods = {
  size : function(){
  	return this.count;
  },
  enqueue : function(value){
  	this.storage[this.lastCount] = value;
  	this.count++;
  	this.lastCount++;
  },
  dequeue : function(){
  	if (this.count === 0){
  		return;
  	} else {
  	  this.count--;
  	  var value = this.storage[this.firstCount];
      delete this.storage[this.firstCount];
  	  this.firstCount++;
  	  return value;
    }
  }
  
};

var stack = Queue();


