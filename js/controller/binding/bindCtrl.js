/**
 * Created by vanhung on 4/18/2016.
 */

var app=angular.module("app",[]);
app.controller("bindCtrl",bindCtrl);
function bindCtrl()
{
    var vm=this;
    vm.list=[

        {name:"vanhung0"},
        {name:"vanhung1"},
        {name:"vanhung2"},
        {name:"vanhung3"}
    ];

    vm.getAll= function () {

        console.log(vm.list);
    }

    vm.changeValue= function () {

        vm.list[0].name="change";
    }
}