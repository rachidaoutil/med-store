'use strict';

var $ = require('jquery')

module.exports = {
  // Fetch todos from server
  fetch(callback) {
    $.ajax('/todos').done(function(data) {
      callback(null, data);
    }).fail(function(xhr, status, error) {
      callback(error);
    });
  },

  // Save list of todos on the server
   save(client, callback){
      if (client){
        // new Todo!
        $('.btn').addClass("loading")
        $.ajax('/client', {
          method: 'POST',
          data: client
        }).done(function(data) {
          callback(null,data.id);
        }).fail(function(xhr, status, error) {
          $('.btn').removeClass("loading")
          callback(error);
        });
      }
    
  },

  // Remove a TODO from the database
  remove(todos, callback) {
    todos.forEach(function(todo) {
      $.ajax('/todos/'+todo.id, {
        method: 'DELETE'
      }).done(function(data) {
        callback(null);
      }).fail(function(xhr, status, error) {
        callback(error);
      });
    });
  }
};
