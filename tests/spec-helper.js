var createNote = function() {
  return new Note('Javascript SUCKS');
};

var createNoteList = function() {
  var list = new List();
  list.addNote(createNote());
  return list;
};

var createNoteController = function() {
  var note = new Note("Javascript SUCKS");
  var list = new List().addNote(note);
  return new NoteController(list);
};
