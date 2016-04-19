/**
 * Created by vanhung on 4/11/2016.
 */

var app=angular.module('app',[]);

app.controller("Mycontroller",Mycontroller);
Mycontroller.$inject=['$http','$window']
function Mycontroller($http,$window)
{
    var vm=this;
    vm.doSomthing= function () {
        alert("test");
    }

    $http.get('http://localhost:8081/').then(function (res) {

        vm.name=res.data;

    }, function (err) {
        
    })
}
