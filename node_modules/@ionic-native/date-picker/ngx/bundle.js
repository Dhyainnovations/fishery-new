'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var DatePicker = /** @class */ (function (_super) {
    tslib.__extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @hidden
         */
        _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5,
        };
        return _this;
    }
    DatePicker.prototype.show = function (options) { return core.cordova(this, "show", {}, arguments); };
    DatePicker.pluginName = "DatePicker";
    DatePicker.plugin = "cordova-plugin-datepicker";
    DatePicker.pluginRef = "datePicker";
    DatePicker.repo = "https://github.com/VitaliiBlagodir/cordova-plugin-datepicker";
    DatePicker.platforms = ["Android", "iOS", "Windows"];
    DatePicker.decorators = [
        { type: core$1.Injectable }
    ];
    return DatePicker;
}(core.IonicNativePlugin));

exports.DatePicker = DatePicker;
