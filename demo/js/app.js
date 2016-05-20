(function () {
    angular.module('app', ['ui.multiStepProgress'])
        .controller("MainController", function ($scope, $interval) {
            $scope.steps1 = [
                {
                    waitingText: 'File load',
                    inProgressText: 'Loading file ...',
                    doneText: 'File loaded'
                }
            ];
            $scope.steps2 = [
                {
                    waitingText: 'File load',
                    inProgressText: 'Loading file ...',
                    doneText: 'File loaded'
                },
                {
                    waitingText: 'Validation',
                    inProgressText: 'Validating data ...',
                    doneText: 'Data validated'
                }
            ];
            $scope.steps3 = [
                {
                    waitingText: 'File load',
                    inProgressText: 'Loading file ...',
                    doneText: 'File loaded'
                },
                {
                    waitingText: 'Validation',
                    inProgressText: 'Validating data ...',
                    doneText: 'Data validated'
                },
                {
                    waitingText: 'Synchronization',
                    inProgressText: 'Synchronizing data ...',
                    doneText: 'Data synchronized'
                }
            ];
            $scope.progressValues1 = [0];
            $scope.progressValues2 = [0, 0];
            $scope.progressValues3 = [0, 0, 0];
            $scope.progressValues4 = [0, 0, 0];

            $scope.start = function (progressValues) {
                for (var i = 0; i < progressValues.length; i++) {
                    progressValues[i] = 0;
                }
                $interval(function () {
                    for (var i = 0; i < progressValues.length; i++) {
                        if (progressValues[i] < 100) {
                            progressValues[i] += 2;
                            break;
                        }
                    }
                }, 200)
            }
        });
}());