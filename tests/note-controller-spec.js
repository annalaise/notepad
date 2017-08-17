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
  createNoteController().displayNotesList();
  assert.isTrue(document.getElementById('app').innerHTML.includes("Javascript SUCKS and"), description);
})();

(function(){
  var description = "Note controller displays a single note in app html element";
  createNoteController().displayNoteWithId(0);
  assert.isTrue(document.getElementById('singleNoteView').innerHTML.includes("<ul><li><div>Javascript SUCKS and Javascript SUCKS and Javascript SUCKS and still Javascript SUCKS.</div></li></ul>"), description);
})();
