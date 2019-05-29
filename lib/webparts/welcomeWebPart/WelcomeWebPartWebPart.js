var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import styles from './WelcomeWebPartWebPart.module.scss';
import * as strings from 'WelcomeWebPartWebPartStrings';
var logo = require('./assets/SchaefleinShuppsPnP.png');
var WelcomeWebPartWebPart = /** @class */ (function (_super) {
    __extends(WelcomeWebPartWebPart, _super);
    function WelcomeWebPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelcomeWebPartWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.welcomeWebPart + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column + "\">\n              <span class=\"" + styles.title + "\">Welcome to the SharePoint Conference!</span>\n              <p class=\"" + styles.subTitle + "\">You're awesome. You're good looking. Best audience EVER. And you always give the highest session ratings!.</p>\n            </div>\n          </div>\n        </div>\n        <div style='width:100%;text-align:center;padding-top:10px;'>\n          <img src=\"" + logo + "\" alt=\"Shupps and Scheflein Rock!\" width=\"500\" />\n        </div>\n      </div>";
    };
    Object.defineProperty(WelcomeWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
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
                                PropertyPaneTextField('description', {
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
}(BaseClientSideWebPart));
export default WelcomeWebPartWebPart;
//# sourceMappingURL=WelcomeWebPartWebPart.js.map