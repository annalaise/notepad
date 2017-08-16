(function(exports) {
  console.log("test to return a string of HTML that represents the note list model");
  function noteListView() {
    var note = new Note("is this working?");
    var list = new List();
    var testlist = list.addNote(note);
    var view = new View(testlist);

    if(view.listHtml() === "<ul><li><div>is this working?</div></li></ul>") {
      console.log("Test passed: html string returned");
    }
    else {
      console.log("Test failed");
    }
  }

  noteListView();
})(this);
