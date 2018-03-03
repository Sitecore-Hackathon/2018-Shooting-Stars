# Documentation

## Summary

**Category:** - Sitecore JavaScript Service (JSS)

JSS Twitter Component connects to provided Twitter account and displays tweets from that account.
As a widget in the Sitecore website.
This module is JSS react application that will allow Sitecore editors to add JSS Twitters component into a page and configure twitter account and its size settings in Sitecore. 



## Pre-requisites

- Installation Files
	- /sc.package/sc-twitter-app.1520109092225.update
		This file should be enough if your environment is setup to support JSS
	
	- /sc.package/SitecoreItems.zip
		Extra package with all the content items. But, .update package mention above should have all the items and files. So, hopefully this is not necessary.
		

		
## Installation

1. Use the Sitecore Package Installation wizard to install the /sc.package/JssTwitterComponent_SitecoreItemsRenderingsTemplates.zip

In case this got failed, you have to go to /2018-Shooting-Stars/src/sc-twitter-app folder using a command prompt and run following
	npm install
	jss deploy package

	
	

## Configuration

- Ability to set Twitter account information to get Tweets from
- Ability to adjust the size of the widget by adjusting Rendering Parameters



## Documentation

- /2018-Shooting-Stars/documentation/Shooting Stars - Sitecore Hackathon 2018.docx



## Usage

Sitecore JSS Adjustable Twitter Widget



## Video

https://youtu.be/Mi1UPmCczxM



## External React Modules Used

- React Twitter Widgets
https://www.npmjs.com/package/react-twitter-widgets