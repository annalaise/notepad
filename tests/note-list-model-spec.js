(function(exports) {
  var description = "test to initiatise a note with list model";
  function testNoteModelList() {
    var list = new List();

    assert.isTrue(list.notes() !== null, description);
    if (list.notes() === null) {
      throw new Error("no list");
    }
  }

   testNoteModelList();
})(this);

(function(exports) {
  var description = "Test to addNote to list";

  function testAddNoteToListModel() {
    var note = new Note("testing 123");
    var list = new List();
    list.addNote(note);

    assert.isTrue(list.notes()[0].text === 'testing 123', description);
    if(list.notes()[0].text !== 'testing 123') {
      throw new Error("no note added");
    }
  }
  testAddNoteToListModel();
})(this);
