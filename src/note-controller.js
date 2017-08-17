document.getElementById('app').innerHTML = 'howdy';


(function(exports){
  function NoteController(list) {
    this.noteListView = new View(list);
  }

  NoteController.prototype = {
    displayNotesList: function() {
      exports.document.getElementById('app').innerHTML = this.noteListView.listHtml();
    },

    displayNoteWithId: function(id) {
      exports.document.getElementById('singleNoteView').innerHTML = this.noteListView.singleNoteHtmlForId(id);
    }
  };

  exports.NoteController = NoteController;
})(this);


(function makeUrlChangeToDisplayNoteContent() {
  window.addEventListener("hashchange", showNoteContentForCurrentPage);
})();

function showNoteContentForCurrentPage() {
  NoteController.displayNoteWithId(getNoteIdFromUrl());
};

function getNoteIdFromUrl() {
  console.log(Number(location.hash.split("/")[1]));
  return Number(location.hash.split("/")[1]);
};
