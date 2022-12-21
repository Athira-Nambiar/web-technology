var RestrauntAppModule = angular.module("RestrauntApp", []);  
RestrauntAppModule.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
 RestrauntAppModule.controller("RestrauntCtrl", function ($scope,$http) {    
   $http.get('agjson.json')    
   .success(function(data){    
     $scope.Food_Items = data;    
   })    
   .error(function(data,status){    
     console.error('Fail to load data', status, data);    
     $scope.Food_Items = { };    
   });    
 });  