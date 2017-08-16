(function(exports) {
  function testNoteModeltakesnote() {
    var text = "My favourite language is JavaScript";
    var note = new Note(text);
    assert.isTrue(note.text === text, "Note can add text");
  }
   testNoteModeltakesnote();
})(this);
