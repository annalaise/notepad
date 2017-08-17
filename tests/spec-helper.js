var createNote = function(string) {
  return new Note(string);
};


var createNoteList = function() {
  var list = new List();
  list.addNote(createNote("Javascript SUCKS and Javascript SUCKS and Javascript SUCKS and still Javascript SUCKS."));
  return list;
};

var createNoteController = function() {
  var note = new Note("Javascript SUCKS and Javascript SUCKS and Javascript SUCKS and still Javascript SUCKS.");
  var list = new List().addNote(note);
  return new NoteController(list);
};
