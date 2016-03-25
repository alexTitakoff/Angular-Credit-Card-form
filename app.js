
angular.module('app', []); 

angular.module('app').controller
( 'MainCtrl'
  , function($scope,$locale) {


    $scope.ccinfo = {type:undefined} 
    $scope.save = function(data){
      if ($scope.paymentForm.$valid){
          console.log(data) // valid data saving stuff here
          // document.getElementById("check").innerHTML = Check:<br> Срок действия карты:<br> data['month']/data['year']
          $scope.data = [{
            year:  data['year'],
            month: data['month'],
            type: data['type'],
            firstname: data['firstname'],
            lastname: data['lastname'],
            number: data['number'],
            val: data['val'],
            sum: data['sum']
          }]
          


        }
      }
    }
    )



angular.module('app').directive
( 'creditCardType'
  , function(){
    var directive =
    { require: 'ngModel'
    , link: function(scope, elm, attrs, ctrl){
      ctrl.$parsers.unshift(function(value){
        scope.ccinfo.type =
        (/^5[1-5]/.test(value)) ? "mastercard"  //(/^5[1-5]/.test(value)) 
        : (/^4/.test(value)) ? "visa"
        : (/^3[47]/.test(value)) ? 'amex'
        : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? 'discover'  //(/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value))
        : (/^30|36|38/.test(value)) ? 'dinners'  
        : (/^34|37|/.test(value)) ? 'american'  

        : undefined
        ctrl.$setValidity('invalid',!!scope.ccinfo.type)
        return value
      })
    }
  }
  return directive
}
)



// angular.module('app').filter
// ( 'range'
//   , function() {
//     var filter = 
//     function(arr, lower, upper) {
//       for (var i = lower; i <= upper; i++) arr.push(i)
//         return arr
//     }
//     return filter
//   }
//   )









