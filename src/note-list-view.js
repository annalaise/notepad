
(function(exports) {

function View(list) {
  this._list = list;
}

View.prototype.listHtml = function() {
  var noteList = [];

  this._list.notes.forEach(function(note) {
    noteList.push(note.text);
  });
  return "<ul><li><div>" + noteList.join("</div></li><li><div>") + "</div></li></ul>";
}


exports.View = View;
})(this);
