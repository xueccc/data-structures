var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
  	count : 0,
  	storage: {},
  	firstItemCount : 0,
  	lastItemCount: 0
  };

  _.extend(obj, queueMethods)
  return obj;

};

var queueMethods = {
  size : function(){
  	return this.count;
  },
  enqueue : function(value){
  	this.storage[this.lastItemCount] = value;
  	this.lastItemCount++;
  	this.count++;
  },
  dequeue : function(){
  	if(this.count === 0){
  	  return;
  	} else {

  	  var value = this.storage[this.firstItemCount];
  	  delete this.storage[this.firstItemCount];
  	  this.count--;
  	  this.firstItemCount++;
  	  return value;
    }
  }
}

var queue = Queue ()


