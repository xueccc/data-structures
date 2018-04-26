var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var obj = {
  	count : 0,
  	storage : {}
  };
 
  _.extend(obj, stackMethods);

  return obj;

};

var stackMethods = {
 
  size : function(){
  	return this.count;

  },

  push : function(value){
  	
  	this.storage[this.count] = value;
  	this.count++;
  },

  pop : function(){
  	if (this.count === 0){
  	  return this.count;
  	} else {
	  this.count--;
	  var value = this.storage[this.count];
	  delete this.storage[this.count];
	  return value;
    }
  }

};

var stack = Stack();


