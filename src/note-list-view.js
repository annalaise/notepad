"use strict";

(function(exports) {

  function View(list) {
    this._list = list;
  }

  View.prototype.listHtml = function() {
    var noteList = [];
    console.log(this._list[0])

    this._list.forEach(function(note) {
      noteList.push(note.text);
      console.log(noteList);
    });

    return "<ul><li><div>" + noteList.join("</div></li><li><div>") + "</div></li></ul>";
  }

exports.View = View;
})(this);
