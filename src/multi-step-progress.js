angular.module('ui.multiStepProgress', [])
    .directive('multiStepProgress', [
        function () {
            var multiStepProgress = function ($scope) {
                //$scope.progressValues = [100, 30];
                //$scope.steps = [
                //    {
                //        waiting: 'File load',
                //        inProgress: 'Loading file ...',
                //        done: 'File loaded'
                //    },
                //    {
                //        waiting: 'Validation',
                //        inProgress: 'Validating data ...',
                //        done: 'Data validated'
                //    }
                //];

                $scope.getStyle = function (index) {
                    return {
                        "width": $scope.progressValues[index] + "%"
                    }
                };
                $scope.getLabel = function (index) {
                    var result = $scope.steps[index].waiting;
                    if ($scope.progressValues[index] > 0) {
                        result = $scope.steps[index].inProgress;
                    }
                    if ($scope.progressValues[index] >= 100) {
                        result = $scope.steps[index].done;
                    }
                    return result;
                };
                $scope.getStatus = function (index) {
                    var result = 'waiting';
                    if ($scope.progressValues[index] > 0) {
                        result = $scope.progressValues[index] + "%";
                    }
                    if ($scope.progressValues[index] >= 100) {
                        result = 'Done';
                    }
                    return result;
                };
            };

            return {
                controller: [
                    '$scope',
                    multiStepProgress
                ],
                scope: {
                    steps: '=',
                    progressValues: '='
                },
                templateUrl: 'multistepprogress.html',
                replace: true
            };
        }
    ]);