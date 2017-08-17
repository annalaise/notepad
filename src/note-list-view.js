"use strict";

(function(exports) {

  function View(list) {
    this._list = list;
  }

  View.prototype.listHtml = function() {
    var htmlToReturn = "<ul>";
    this._list.forEach(function(note) {
      htmlToReturn += ("<li><div><a href=\"#notes/" + note.getId() + "\">" + note.getText().substring(0,20) + "</a></div></li>");
    });
    htmlToReturn += "</ul>";
    return htmlToReturn;
  };

  View.prototype.singleNoteHtmlForId = function(id) {
    var htmlToReturn = "<ul><li><div>";
    this._list.forEach(function(note){
      if(note.getId() === id) {
        htmlToReturn += note.getText();
      };
    });
    htmlToReturn += "</div></li></ul>";
    return htmlToReturn;
  };

  exports.View = View;
})(this);
