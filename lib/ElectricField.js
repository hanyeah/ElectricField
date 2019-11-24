var hanyeah;
(function (hanyeah) {
    var electricField;
    (function (electricField) {
        var ElectricField = /** @class */ (function () {
            function ElectricField(canvas) {
                console.log("electric field");
            }
            return ElectricField;
        }());
        electricField.ElectricField = ElectricField;
    })(electricField = hanyeah.electricField || (hanyeah.electricField = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var electricField;
    (function (electricField) {
        var Example01 = /** @class */ (function () {
            function Example01(canvas) {
                console.log("example 01");
                new hanyeah.electricField.ElectricField(canvas);
            }
            return Example01;
        }());
        electricField.Example01 = Example01;
    })(electricField = hanyeah.electricField || (hanyeah.electricField = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var electricField;
    (function (electricField) {
        electricField.fragCode = "\n  void main(){\n    gl_FragColor = vec4(1.0, 1.0, 0.0, 0.8);\n  }\n  ";
    })(electricField = hanyeah.electricField || (hanyeah.electricField = {}));
})(hanyeah || (hanyeah = {}));
var hanyeah;
(function (hanyeah) {
    var electricField;
    (function (electricField) {
        electricField.vertCode = "\n  attribute vec4 a_position;\n  void main(){\n    gl_Position = a_position;\n  }\n  ";
    })(electricField = hanyeah.electricField || (hanyeah.electricField = {}));
})(hanyeah || (hanyeah = {}));
