// Generated by CoffeeScript 1.5.0
(function() {

  this.JSONApiServerURI = function() {
    var baseURI;
    baseURI = URI(window.location);
    baseURI.path("/Inspect");
    return baseURI.clone();
  };

}).call(this);