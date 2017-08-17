(function(exports) {
  description = "test to return a string of HTML that represents the note list model";
  function noteListView() {
    var note = new Note("is this working?");
    var list = new List();
    var testlist = list.addNote(note);
    var view = new View(testlist);
    assert.isTrue(view.listHtml() === "<ul><li><div><a href=\"#notes/" + note.getId() + "\">is this working?</a></div></li></ul>", description);
  }
  noteListView();
})(this);

(function(exports) {
  description = "Note list view only shows first 20 characters of a note";
  function noteListView() {
    var note = new Note("Cat ipsum dolor sit amet, be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day. Get video posted to internet for chasing red dot need to chase tail, chase the pig around the house, cat dog hate mouse eat string barf pillow no baths hate everything so hunt anything that moves.");
    var list = new List();
    var testlist = list.addNote(note);
    var view = new View(testlist);
    console.log(view.listHtml())
    assert.isTrue(view.listHtml() === "<ul><li><div><a href=\"#notes/" + note.getId() + "\">Cat ipsum dolor sit </a></div></li></ul>", description);
  }
  noteListView();
})(this);
