angular
  .module('tasks', [])
  .controller('TasksCtrl', function($scope){
    $scope.projects = [
      {
        todo: 'learn angular',
        complete: false
      },
      {
        todo: 'make a remove button',
        complete: false
      },
      {
        todo: 'change over to accept objects',
        complete: false
      },
      {
        todo: 'make ui claim',
        complete: false
      },
      {
        todo: 'pack for cali',
        complete: true
      }
    ];
    $scope.addTask = function(){
      $scope.projects.push($scope.task);
      $scope.task = null;
    };
    $scope.removeTask = function(project){
      var indexToRemove = $scope.projects.indexOf(project);
      $scope.projects.splice(indexToRemove, 1);
    };
  });
