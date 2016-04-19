/**
 * Created by vanhung on 4/13/2016.
 */


var app=angular.module('app',['ngResource']);

//gán controller cho module
app.controller('demoCtrl',demoCtrl);

//ok mọi việc đã xong giờ chúng ta sẽ khai báo trong view

//định nghĩa controller ở đây

//chúng ta sẽ khai báo sử dụng factory chúng ta vừa định nghia ở dứoi
function demoCtrl(user)
{

        var vm=this;//cái này là theo coding convention của angular js bạn có thể tìm hiểu thêm qua github
        //khai báo một method của controller
        vm.test= function () {

            user.get(function (res) {
            //    chỗ này là xử lí kết quả trả ra
                console.log(res);
            }, function error () {
                //xử lí error ở đây nhé
            })
        };

    //mình sẽ gọi luôn khi controllẻ load xong
    vm.test();
    //ok giờ chạy để xem kết quả nhé

}

//định nghĩa factory để sử dụng trong controller

//ở đây mình có khai báo một factory có tên là User và nó phụ thuộc vào service là $resource
//đây là cách khai báo dependency recommend của google
//mình có tạo một api sử dụng node js đơng giản
//api có link là http://localhost:8081/
//api của mình trả lại đơn giản một object có dạng json là {name:"vanhung"}
app.factory('User',['$resource', function ($resource) {

    return $resource('http://localhost:8081/');
}])

//khai bao dependency cho controller
//do trong controller chung  ta sử dụng tới factory cho nên chúng ta phải khai báo dependency tới factory đó

demoCtrl.$inject=['User'];