var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
    console.log("in myController...");

    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.message = "";

    $scope.users = [
        // {username:"Sbu1", fullname:"SG. Gabuza", email:"sbu1@gmail.com"},
        // {username:"Sbu2", fullname:"Sb. Gabuza", email:"sbu2@gmail.com"},
        // {username:"Sbu3", fullname:"Sd. Gabuza", email:"sbu3@gmail.com"}
     
    ];

    $scope.saveUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added Successfully!";

    };

    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
       
        
    };

    $scope.updateUser = function(){
        $scope.message = "User Updated Successfully!";

    };

    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.message = "User deleted Successfully!";
    };

    $scope.clearMessage = function(){
        $scope.message = "";
    }
});