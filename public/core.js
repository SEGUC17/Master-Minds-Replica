

angular.module('userApp', ['appRoutes','Ang_RateAndReviewCtrl','userControllers','serviceControllers','Ang_Homepage','Ang_Client_profile'])


.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
