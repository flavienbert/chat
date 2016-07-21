module.exports = function (io) {
  'use strict';
  io.on('connection', function (socket) {
    socket.broadcast.emit('user connected');

    socket.on('message', function (from, msg, type) {
      io.sockets.emit('broadcast', {
        message: msg,
        nickname: from,
        type: type
      });
    });
  });
};

