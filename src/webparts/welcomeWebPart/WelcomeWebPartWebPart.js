"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_property_pane_1 = require("@microsoft/sp-property-pane");
var WelcomeWebPartWebPart_module_scss_1 = require("./WelcomeWebPartWebPart.module.scss");
var strings = require("WelcomeWebPartWebPartStrings");
var logo = require('./assets/SchaefleinShuppsPnP.png');
var WelcomeWebPartWebPart = /** @class */ (function (_super) {
    __extends(WelcomeWebPartWebPart, _super);
    function WelcomeWebPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelcomeWebPartWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + WelcomeWebPartWebPart_module_scss_1.default.welcomeWebPart + "\">\n        <div class=\"" + WelcomeWebPartWebPart_module_scss_1.default.container + "\">\n          <div class=\"" + WelcomeWebPartWebPart_module_scss_1.default.row + "\">\n            <div class=\"" + WelcomeWebPartWebPart_module_scss_1.default.column + "\">\n              <span class=\"" + WelcomeWebPartWebPart_module_scss_1.default.title + "\">Welcome to the European Collaboration Summit!</span>\n              <p class=\"" + WelcomeWebPartWebPart_module_scss_1.default.subTitle + "\">You're awesome. You're good looking! Best audience EVER. And you always give the highest session ratings!</p>\n            </div>\n          </div>\n        </div>\n        <div style='width:100%;text-align:center;padding-top:10px;'>\n          <img src=\"" + logo + "\" alt=\"Shupps and Scheflein Rock!\" width=\"500\" />\n        </div>\n      </div>";
    };
    Object.defineProperty(WelcomeWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    WelcomeWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_property_pane_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return WelcomeWebPartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = WelcomeWebPartWebPart;
//# sourceMappingURL=WelcomeWebPartWebPart.js.map