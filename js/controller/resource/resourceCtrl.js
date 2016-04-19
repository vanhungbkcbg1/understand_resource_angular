/**
 * Created by vanhung on 4/13/2016.
 */


var app = angular.module('app', ['ngResource']);

app.controller('resourceCtrl', resourceCtrl);

function resourceCtrl(user) {
    var vm = this;
    vm.getSinhvien= function () {

        user.get({id:9}, function (user_data,res) {

            user_data.name="vanhung";
            //user_data.$save();
            user_data.$update({id:9,value:'vanhung'});
        });
    }

    vm.getSinhvien();
}

app.factory('User', ['$resource', function ($resource) {

    return $resource('http://localhost:8081/sinhviens/:id/:value',{id:"@id",value:"@value"},{

        update:{method:"PUT"}
    });
}]);

resourceCtrl.$inject = ['User'];