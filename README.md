# ConferenceWelcome
Demo and build pipeline configuration for SPFx Enterprise Development presentation

This repo contains a basic sample web part that demonstrates the use of Azure DevOps ALM with the SharePoint Framework. It is based on version 1.8 of the Yeoman Generator. Install the correct version using the command "npm -i @microsoft/generator-sharepoint@1.8.0". Install NPM packages using "npm i". 

NOTE: The web part includes an image reference in accordance with the method described by Waldek Mastykarz in the following blog post: https://blog.mastykarz.nl/correctly-reference-images-sharepoint-framework-solutions/

Slide deck can be found in the "presentation" folder. Azure DevOps build pipeline configuration can be found in the "pipeline" folder. Note that Tenant URL's and User Id's have been replaced with tokens which should be modified to use actual values prior to import.

The pipeline relies upon three custom variables: "appcatalogurl", "username" and "password". Configure these in the pipeline configuration with the appropriate values for your Office 365 tenant or replace them with alternate variables.



