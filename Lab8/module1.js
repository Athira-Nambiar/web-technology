var app = angular.module("myMod",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
	
	$routeProvider.
	when("/cuisines",{
		templateUrl:'views/cuis.html',
		controller:'cuisines_ctr'
	}).
	when("/about",{
		templateUrl:'views/about.html',
		controller:'about_ctr'
	}).
	when("/food-menu",{
		templateUrl:'views/menu.html',
		controller:'food-menu_ctr'
	}).
	when("/view-more",{
		templateUrl:'views/img.html',
		controller:'view-more_ctr'
	}).
	otherwise({
		redirectTo:'index.html'
	});
	
}]);


app.controller("cuisines_ctr",function($scope){
	
	$scope.cuis = [
		{name:'CHINESE',description:'Chinese cuisine is one of the oldest and most diverse cuisines in the world. Two thousand years before the beginning of our era, people there ate noodles.'},
		{name:'NORTH-INDIAN',description:'Famous for their vast and colourful range of spices and herbs, India hosts some of the greatest food in the world. '},
		{name:'SOUTH-INDIAN',description:'South Indian cuisine includes the cuisines of the five southern states of India—Andhra Pradesh, Karnataka, Kerala, Tamil Nadu and Telangana.'},
		{name:'ITALIAN',description:'Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula.'},
		{name:'FRENCH',description:'French cuisine has set a high standard for centuries, but it is not always complicated.'},
	];
	
});

app.controller("about_ctr",function($scope){
	
	$scope.about = ["We've been making healthy food last for 10 years. The authentic taste comes from family recipes and from fresh, simple, and tasteful ingredients straight from home. We believe in the commitment to our community and in fostering long-term relationships with local farmers and fishermen. Our menus reflect these connections, featuring local, seasonal produce and sustainably sourced seafood and meats."];
	
});

app.controller("food-menu_ctr",function($scope){
	
	$scope.menu = ["Chicken rice bowl","Burger with Fries","Pizza","Mocktails","Dessert","salads","Fried-Rice","Chicken confit","French onion soup"];
	
});

app.controller("view-more_ctr",function($scope){
	
	$scope.pic1 = "images/pic1.jfif";
	$scope.pic2 = "images/pic2.jfif";
	$scope.pic3 = "images/pic3.jpg";
	$scope.pic4 = "images/pic4.jpg";
	$scope.pic5 = "images/pic5.jpg";

});



