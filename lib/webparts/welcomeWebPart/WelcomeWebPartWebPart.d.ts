import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IWelcomeWebPartWebPartProps {
    description: string;
}
export default class WelcomeWebPartWebPart extends BaseClientSideWebPart<IWelcomeWebPartWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
