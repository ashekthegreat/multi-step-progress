(function () {
    angular.module('ui.multiStepProgress', [])
        .directive('multiStepProgress', [
            function () {
                var multiStepProgress = function ($scope) {
                    //$scope.progressValues = [100, 30];
                    /*$scope.steps = [
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
                    ];*/

                    $scope.statuses = [];

                    function init(){
                        var isAlreadyFound = false;
                        for(var i=0; i<$scope.steps.length; i++){
                            if($scope.progressValues[i]==0){
                                $scope.statuses[i] = isAlreadyFound?"msp-waiting":"msp-in-progress";
                                isAlreadyFound = true;
                            } else if($scope.progressValues[i]>=100){
                                $scope.statuses[i] = "msp-done";
                            } else {
                                if(isAlreadyFound){
                                    $scope.progressValues[i] = 0;
                                    $scope.statuses[i] = "msp-waiting";
                                } else{
                                    $scope.statuses[i] = "msp-in-progress";
                                    isAlreadyFound = true;
                                }
                            }
                        }
                    }
                    $scope.$watchCollection(
                        "progressValues",
                        function( newValue, oldValue ) {
                            init();
                        }
                    );



                    $scope.getStyle = function (index) {
                        return {
                            "width": $scope.progressValues[index] + "%"
                        }
                    };
                    $scope.getLabel = function (index) {
                        var result = $scope.steps[index].waitingText;
                        if ($scope.progressValues[index] > 0) {
                            result = $scope.steps[index].waitingText;
                        }
                        if ($scope.progressValues[index] >= 100) {
                            result = $scope.steps[index].waitingText;
                        }
                        return result;
                    };
                    $scope.getStatus = function (index) {
                        var result = '&#8987;';
                        if ($scope.progressValues[index] > 0) {
                            result = $scope.progressValues[index] + "%";
                        }
                        if ($scope.progressValues[index] >= 100) {
                            result = '&#10004;';
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
                        steps: '=steps',
                        progressValues: '='
                    },
                    templateUrl: 'multistepprogress.html',
                    replace: true
                };
            }
        ])
        .filter('to_trusted', ['$sce', function ($sce) {
            return function (text) {
                return $sce.trustAsHtml(text);
            };
        }]);
}());