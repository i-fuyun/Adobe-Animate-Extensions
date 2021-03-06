(function($) {

    $.anwidget("c.Image", {
        options: {
            'visible': true,
            'position': 'absolute'
        },
        _props: ["left", "top", "width", "height", "position", "z-index", "transform-origin", "transform", "pointer-events", "display", "visibility", "cursor"],
        _attrs: ["id", "src", "alt", "title", "class", "border", "lowsrc"],
        getCreateOptions: function() {
            return $.extend(this.options, { 'id': "image" + _widgetID++ });
        },
        getCreateString: function() {
            return "<img>";
        },
        getProperties: function() {
            return this._props;
        },
        getAttributes: function() {
            return this._attrs;
        }
    });
})(jQuery);
