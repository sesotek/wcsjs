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

    var validTransforms = ['RA---TAN', 'DEC--TAN'];
    
    // Trig
    function deg2rad(deg) {
        return ((2 * Math.PI * deg) / 360);
    }
    function rad2deg(rad) {
        return (360 * rad / (2 * Math.PI));
    }
    function sind(deg) {
        return Math.sin(deg2rad(deg));
    }
    function cosd(deg) {
        return Math.cos(deg2rad(deg));
    }
    function tand(deg) {
        return Math.tan(deg2rad(deg));
    }
    function asind(x) {
        return rad2deg(Math.asin(x));
    }
    function acosd(x) {
        return rad2deg(Math.acos(x));
    }
    function atand(x) {
        return rad2deg(Math.atan(x));
    }
    function atan2d(x, y) {
        return rad2deg(Math.atan2(x, y));
    }

    function inArray(arr, obj) {
        return (arr.indexOf(obj) != -1);
    }
    
    function supportedTransform(header) {
       return (inArray(validTransforms, header['CTYPE1']) && inArray(validTransforms, header['CTYPE2']));
    }

    WCS.Mapper = function (header) {
        
        if (!supportedTransform(header)) {
            throw('Unsupported transformation.');
        }

        this.pixelToCoordinate = function(x, y) {

        }

        this.coordinateToPixel = function(ra, dec) {

        }
    }



} ).call(this);
