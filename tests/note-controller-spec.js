(function() {
  var description = "instantiate a Note Controller";
  var testController = createNoteController();
  assert.isTrue(testController instanceof NoteController, description);
  if (testController instanceof NoteController === false) {
    throw new Error("NoteController is not instantiated");
  }
})();

(function() {
  var description = "Note Controller displays notes in app html element";
  createNoteController().display();
  assert.isTrue(document.getElementById('app').innerHTML.includes("Javascript SUCKS"), description);
})();
