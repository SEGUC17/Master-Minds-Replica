
angular.module('userApp', ['appRoutes','Ang_RateAndReviewCtrl','userControllers','serviceControllers','Ang_Homepage','Ang_Client_profile','adminApp','NavigationBar','Ang_view_rateandreview'])


.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
