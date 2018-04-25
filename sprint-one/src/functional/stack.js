var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size === 0){
      return size;
    } else {
      size--;
    
    
      var itemRemoved = storage[size];
      delete storage[size];
      return itemRemoved;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
