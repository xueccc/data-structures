var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var fItemCount = 0;
  var lastItemCount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastItemCount] = value;
    lastItemCount++;
    size++;
  };

  someInstance.dequeue = function() {
   if (size === 0){
      return size;
    } else {
      size--;
      var itemRemoved = storage[fItemCount];
      delete storage[fItemCount];
      fItemCount++;
      return itemRemoved;
    }

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
