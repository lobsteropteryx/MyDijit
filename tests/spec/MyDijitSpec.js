define([
  '/MyDijit.js',
  'dojo/dom-construct'
], function(
  WidgetUnderTest,

  domConstruct
) {
  describe('MyDijit/MyDijit', function() {
    var widget;
    var destroy = function (widget) {
      if (widget && widget.destroyRecursive) {
        widget.destroyRecursive();
        widget = null;
      }
    };

    beforeEach(function() {
      widget = new WidgetUnderTest(null, domConstruct.create('div', null, document.body));
    });

    afterEach(function() {
      destroy(widget);
    });

    describe('Sanity', function() {
      it('should create a MyDijit', function() {
        expect(widget).toEqual(jasmine.any(WidgetUnderTest));
      });
    });
  });
});
