(function() {
  'use strict';

  angular.module('chatApp')
    .directive('message', function() {
      return {
        restrict: 'E',
        scope: {
          nickname: '=',
          message: '=',
          date: '=',
          type: '='
        },
        templateUrl: 'views/message.html',
        link: function (scope) {
          scope.gravatar = 'https://www.gravatar.com/avatar/' + calcMD5(scope.nickname) + '?d=identicon';
        }
      };
    });

}());
