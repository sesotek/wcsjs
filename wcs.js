(function () {
    "use strict";

    // Save a reference to the global object.
    var root = this;

    // The top-level namespace. Exported for both CommonJS and the browser.
    var WCS;
    if (typeof exports !== 'undefined') {
        WCS = exports;
    } else {
        WCS = root.WCS = root.WCS || {};
    }
  
    WCS.version = '0.0.1';

    WCS.Mapper = function (header) {

        this.pixelToCoordinate(x, y) {

        }

        this.coordinateToPixel(ra, dec) {

        }
    }



} ).call(this);
