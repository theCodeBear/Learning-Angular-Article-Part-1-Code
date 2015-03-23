angular.module('learningAngular', [])

.controller('practiceCtrl', ['$scope', function($scope) {

  $scope.name = 'Josephine';

  $scope.alertMe = function() {
    alert('Congrats! You used ng-click!');
  };

  $scope.willShow = true;

  $scope.toggleDiv = function() {
    $scope.willShow = !$scope.willShow;
  };

  $scope.puppies = ['Rex', 'Fido', 'Rover', 'Archie'];
  $scope.classGrades = {
    Max: 'A',
    Joan: 'B+',
    Jay: 'A-',
    Charlie: 'C'
  };

}]);
