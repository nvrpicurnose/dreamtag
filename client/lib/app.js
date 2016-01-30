var DreamTag = angular.module('DreamTag', 
	['angular-meteor', 
		'ui.router', 
		'ui.bootstrap', 
		'angularMoment', 
		'accounts.ui', 
		'angularUtils.directives.dirPagination'
	]);

DreamTag.run(function(amMoment){
	amMoment.changeLocale('en');
});