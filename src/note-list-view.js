"use strict";

(function(exports) {

  function View(list) {
    this._list = list;
  }

  View.prototype.listHtml = function() {
    var noteList = [];

    this._list.forEach(function(note) {
      noteList.push(note.text.substring(0,20));
    });

    return "<ul><li><div>" + noteList.join("</div></li><li><div>") + "</div></li></ul>";
  };

exports.View = View;
})(this);
