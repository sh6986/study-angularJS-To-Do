angular.module('todo').controller('TodoCtrl', function ($scope, todoStorage) {

  $scope.todos = todoStorage.get();

  // $scope.todos = [
  //   {
  //     title: '요가수련',
  //     completed: false,
  //     createdAt: Date.now()
  //   },
  //   {
  //     title: '앵귤러학습',
  //     completed: false,
  //     createdAt: Date.now()
  //   },
  //   {
  //     title: '운동하기',
  //     completed: true,
  //     createdAt: Date.now()
  //   }
  // ];

  $scope.remove = function(todo) {
    // fild todo index in todos
    var idx = $scope.todos.fileIndex(function (item) {
      return item.id === todo.id;
    })

    // remove from todos
    if (idx > -1) {
      $scope.todos.splice(idx, 1);
    }
  };

  $scope.add = function(newTodoTitle) {
    // create new todo
    var newTodo = {
      title: newTodoTitle,
      completed: false,
      createdAt: Date.now()
    };

    // push into todos
    $scope.todos.push(newTodo);

    // empty form
    $scope.newTodoTitle = "";
  };
});
