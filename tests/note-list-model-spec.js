var beforeEach = function(){
  this.testList = new List();
  this.testNote1 = new Note("testing 123");
  this.testNote2 = new Note("Simples!");
};


(function() {
  beforeEach();
  var description = "test to initiatise a note with list model";
  assert.isTrue(testList.notes() !== null, description);
  if (testList.notes() === null) {
    throw new Error("no list");
  }
})();

(function() {
  beforeEach();
  var description = "Test to addNote to list";
  testList.addNote(testNote1);
  assert.isTrue(testList.notes()[0].text === testNote1.getText(), description);
  if(testList.notes()[0].text !== testNote1.getText()) {
    throw new Error("no note added");
  }
})();

(function(){
  beforeEach();
  var description = "Test to add unique id to note";
  testList.addNote(testNote1);
  testList.addNote(testNote2);
  id0 = testList.notes()[0].getId();
  id1 = testList.notes()[1].getId();
  assert.isTrue(id0 === 0 && id1 === 1, description);
  if(!id0 === 0 && !id1 === 1) {
    throw new Error("Add unique id to note failed");
  }
})();
