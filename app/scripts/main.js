angular
  .module('tasks', [])
  .controller('TasksController', function(){
    var vm = this;

    vm.data = [
      {
        todo: 'Learn Angular',
        complete: false
      }
    ]
  })
