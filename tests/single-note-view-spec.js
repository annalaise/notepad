(function(exports) {
  function SingleNoteInstanceTest() {
    var description = "Single Note View can be instantiated";
    var note = new Note("CATZ rule. Javascript does not");
    var singleNoteView = new SingleNoteView(note);


    assert.isTrue(singleNoteView instanceof SingleNoteView, description);
  }

  SingleNoteInstanceTest();
})(this);

(function(exports) {
  function SingleNoteViewTest() {
    var description = "Single Note View returns a div element containing the single note";
    var note = new Note("CATZ rule. Javascript does not");
    var singleNoteView = new SingleNoteView(note);
    assert.isTrue(singleNoteView.display() === "<div>CATZ rule. Javascript does not</div>", description);
  }

  SingleNoteViewTest();
})(this);
