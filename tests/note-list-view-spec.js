(function(exports) {
  console.log("test to return a string of HTML that represents the note list model");
  function noteListView() {
    var list = new List();
    var view = new View(list.addNote("test note"));

    if(view.listHtml() === "<ul><li><div>test note</div></li></ul>") {
      console.log("Test passed: html string returned")
    }
    else {
      console.log("Test failed")
    }
  };

  noteListView();
})(this);
