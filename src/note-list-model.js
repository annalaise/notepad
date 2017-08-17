"use strict";

(function(exports) {
  function List() {
    this._notes = [];
  }

  List.prototype = {
    notes: function() {
      return this._notes;
    },

    addNote: function(note) {
      note.setId(this._getNewNoteId());
      this._notes.push(note);
      return this._notes;
    },

    _getNewNoteId: function(){
      if(this.notes().length === 0) {
        return 0;
      } else {
        return this.notes().length;
      };
    }
  };

exports.List = List;
})(this);
