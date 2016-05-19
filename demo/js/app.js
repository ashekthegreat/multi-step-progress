angular.module('app', ['ui.multiStepProgress'])
    .controller("MainController", function ($scope) {
        $scope.progressValues = [100, 30];
        $scope.steps = [
            {
                waiting: 'File load',
                inProgress: 'Loading file ...',
                done: 'File loaded'
            },
            {
                waiting: 'Validation',
                inProgress: 'Validating data ...',
                done: 'Data validated'
            }
        ];
    });
