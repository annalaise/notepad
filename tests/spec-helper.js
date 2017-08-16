var createNote = function() {
  return new Note('Javascript SUCKS');
};

var createNoteList = function() {
  var list = new List();
  list.addNote(createNote());
  return list;
};

var createNoteController = function() {
  var noteController = new NoteController(createNoteList());
  console.log(noteController);
  return noteController;
};
