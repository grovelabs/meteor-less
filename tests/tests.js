describe('Less plugin tests', function(){
  var div;
  beforeAll( function(test) {
    div = document.createElement('div');
    document.body.appendChild(div);
    Blaze.render(Template.foo, div);
  });

  afterAll( function(test) {
    document.body.removeChild(div);
  });

  it('Simple loading and Less functionality', function(test, waitFor){
    var h1 = div.querySelector('h1');
    test.equal(getComputedStyle(h1).width, "100px");
  });

  // XX How do I write tests that need the configuration json files present to
  // be tested? Which is basically all of the tests that actually matter here

});