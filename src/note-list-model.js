"use strict";

(function(exports) {
  function List() {
    this._notes = [];
  }

  List.prototype.notes = function() {
    return this._notes;
  };

  List.prototype.addNote = function(note) {
    this._notes.push(note);
    return this._notes;
  };

exports.List = List;
})(this);
