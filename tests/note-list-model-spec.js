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
    var list = new List();
    list.addNote('text');
    console.log(list.notes())

    if(list.notes()[0].text !== 'text') {
      throw new Error("no note added");
    }
  }
  testAddNoteToListModel();
  console.log("test passes");
})(this);
