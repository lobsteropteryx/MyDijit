define([
  'dojo/text!./templates/MyDijit.html',
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/on',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dijit/form/Button',
  'dijit/registry'
], function(
  template,
  declare,
  lang,
  on,
  _WidgetBase,
  _TemplatedMixin,
  _WidgetsInTemplateMixin,
  Button,
  registry
) {
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
    templateString: template,
    baseClass: 'my-dijit',
    widgetsInTemplate: true,
    button: null,

    // Properties to be sent into constructor

    postCreate: function() {
      this.setupConnections();
      this.inherited(arguments);
      var button = registry.byId("myDijitButton");
      on(button, 'click', lang.hitch(this, this._onButtonClick));
    },

    _onButtonClick: function () {
        alert("Hello, Web Appbuilder!");
    },

    setupConnections: function() {

    }
  });
});