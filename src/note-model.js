function Note(text) {
  this.text = text;
}

Note.prototype.text = function () {
  return this.text;
};
