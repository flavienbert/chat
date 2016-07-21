'use strict';

angular.module('chatApp')
.controller('SocketCtrl', function ($log, $scope, chatSocket, nickName) {
  $scope.nickName = nickName;
  $scope.messages = [];

  $scope.sendMessage = function() {
    var matchNickName = $scope.message.match('^\/surnom (.*)');
    var matchGiphy = $scope.message.match('^\/giphy (.*)');
    var type = "message";

    if (angular.isDefined(matchNickName) && angular.isArray(matchNickName) && matchNickName.length === 2) {
      $scope.nickName = matchNickName[1];
      type = "nickname"
    } else if (angular.isDefined(matchGiphy) && angular.isArray(matchGiphy) && matchGiphy.length === 2) {
      $scope.giphy = matchGiphy[1];
      type = "giphy"
    }

      chatSocket.emit('message', $scope.nickName, $scope.message, type);
    $scope.message = '';
  };

  $scope.$on('socket:broadcast', function(event, data) {
    $scope.$apply(function() {
      var message = {
        date: new Date().toLocaleTimeString(),
        nickname: data.nickname,
        message: data.message,
        type: data.type
      };

      $scope.messages.push(message);
    });
  });
});
