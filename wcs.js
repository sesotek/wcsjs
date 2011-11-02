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
    function degToRad(deg) {
        return ((2 * Math.PI * deg) / 360);
    }
    function radToDeg(rad) {
        return (360 * rad / (2 * Math.PI));
    }
    function sind(deg) {
        return Math.sin(degToRad(deg));
    }
    function cosd(deg) {
        return Math.cos(degToRad(deg));
    }
    function tand(deg) {
        return Math.tan(degToRad(deg));
    }
    function arcsind(deg) {
        return Math.asin(degToRad(deg));
    }
    function arccosd(deg) {
        return Math.acos(degToRad(deg));
    }
    function arctand(deg) {
        return Math.atan(degToRad(deg));
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
