(function(exports) {
  function NoteControllerTest() {
    var testController = createNoteController();

    if (testController instanceof NoteController === false) {
      throw new Error("NoteController is not instantiated");
    }
  }

  NoteControllerTest();
  console.log("NoteControllerTest Passed!");
})(this);

(function(exports) {
  function NoteControllerHTMLTest() {
    var testController = createNoteController();
    testController.display();

    if (document.getElementById('app').innerHTML.includes("Javascript SUCKS") == false) {
      throw new Error("NoteController display not working");
    }
  }

  NoteControllerHTMLTest();
  console.log("NoteControllerTest Passed!");
})(this);
