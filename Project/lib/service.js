angular.module('todo').factory('todostorage', function() {
  var storage = {
    // todo ...
    
    todos: [
    {
      title: '요가수련',
      completed: false,
      createdAt: Date.now()
    },
    {
      title: '앵귤러학습',
      completed: false,
      createdAt: Date.now()
    },
    {
      title: '운동하기',
      completed: true,
      createdAt: Date.now()
    }
  ],

  get: function() {
    return storage.todos;
    }

  }

  return storage;
});