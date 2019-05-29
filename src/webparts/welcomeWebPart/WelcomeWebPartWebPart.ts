import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './WelcomeWebPartWebPart.module.scss';
import * as strings from 'WelcomeWebPartWebPartStrings';
const logo: any = require('./assets/SchaefleinShuppsPnP.png')
  ;
export interface IWelcomeWebPartWebPartProps {
  description: string;
}

export default class WelcomeWebPartWebPart extends BaseClientSideWebPart<IWelcomeWebPartWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.welcomeWebPart }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to the European Collaboration Summit!</span>
              <p class="${ styles.subTitle }">You're awesome. You're good looking! Best audience EVER. And you always give the highest session ratings!</p>
            </div>
          </div>
        </div>
        <div style='width:100%;text-align:center;padding-top:10px;'>
          <img src="${logo}" alt="Shupps and Scheflein Rock!" width="500" />
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
