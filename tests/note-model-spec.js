(function(exports) {
  function testNoteModeltakesnote() {
    var text = "My favourite language is JavaScript";
    var note = new Note(text);

    if (note.text !== text) {
      throw new Error("text does not match what was entered")
    }
  };

   testNoteModeltakesnote();
   console.log("Note has been successfully added")
})(this);
