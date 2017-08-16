(function(exports) {
  function NoteControllerTest() {
    var description = "instantiate a Note Controller";
    var testController = createNoteController();

    assert.isTrue(testController instanceof NoteController, description);
    if (testController instanceof NoteController === false) {
      throw new Error("NoteController is not instantiated");
    }
  }

  NoteControllerTest();
  console.log("NoteControllerTest Passed!");
})(this);

(function(exports) {
  function NoteControllerHTMLTest() {
    var description = "Note Controller displays notes in app html element";
    createNoteController().display();
    assert.isTrue(document.getElementById('app').innerHTML.includes("Javascript SUCKS"), description);
  }
  NoteControllerHTMLTest();
})(this);
