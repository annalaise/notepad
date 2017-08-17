"use strict";

(function(exports) {
  function Note(text) {
    this.text = text;
    this.id = null;
  }

  Note.prototype = {
    getText: function() {
      return this.text;
    },

    getId: function() {
      return this.id;
    },

    setId: function(id) {
      this.id = id;      
    }
  };

exports.Note = Note;
})(this);
