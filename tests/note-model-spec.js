(function(){
  var text = "My favourite language is JavaScript";
  this.note = createNote(text);
  this.testText = text;
})();

(function() {
  assert.isTrue(note.text === testText, "Note can add text");
})();

(function(){
  assert.isTrue(note.getId() === null, "Not has an id which is null upon instantiation")
})();
