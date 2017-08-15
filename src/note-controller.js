(function(exports) {
    function changeGreeting() {
    var elem = document.getElementById('app');
    console.log(elem);
    elem.innerHTML = "howdy";
  }
exports.changeGreeting = changeGreeting;
})(this);
