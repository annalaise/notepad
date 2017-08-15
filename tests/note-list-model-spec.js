(function(exports) {
  console.log("test to initiatise a note with list model")
  function testNoteModelList() {
    var list = new List();

    if (list.notes() === null) {
      throw new Error("no list")
    }
  };

   testNoteModelList();
   console.log("test passes")
})(this);

(function(exports) {
  console.log("Test to addNote to list");
  function testAddNoteToListModel() {
    var note = new Note("testing 123");
    var list = new List();
    list.addNote(note);

    if(list.notes()[0].text !== 'testing 123') {
      throw new Error("no note added");
    }
  }
  testAddNoteToListModel();
  console.log("test passes");
})(this);
