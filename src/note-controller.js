document.getElementById('app').innerHTML = 'howdy';

(function(exports){
  function NoteController(list) {
    this.noteListView = new View(list);
  }
  NoteController.prototype.display = function() {
    exports.document.getElementById('app').innerHTML = this.noteListView.listHtml();
  };
  exports.NoteController = NoteController;
})(this);
