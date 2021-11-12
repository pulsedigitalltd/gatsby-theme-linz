# gatsby-theme-linz
Example Gatsby theme with Ghost CMS data feed for the LINZ Engineering Blog. 

This example theme uses Yarn workspaces, to learn more look here https://yarnpkg.com/features/workspaces

The structure of this repo is made up of the following root folders, 'gatsby-theme-linz' is the Gatsby theme and 'site' is an example implementation of a basic gatsby site that uses the 'gatsby-theme-linz' theme.

When working with Gatsby, once you start to build out your theme in order to run you need to create a new gatsby site and load the theme in order for it to run, this is why you will use 'site' to test the theme.

Ultimately the 'gatsby-theme-linz' folder should be published as an NPM package or alternaive to allow easier usage in the blog site.

--> root
---> gatsby-theme-linz
---> site

# Getting started

### To get this demo running do the following:


1.  Install Yarn and the Gatsby CLI locally  

2.  Clone this repo and then run 'yarn' from the root of the repo to download and install dependencies for all folders.

3.  from the root of the repo run the developer server for the site application using 'yarn workspace site develop', this will establish a dev server at 'http://localhost:8000' and a GraphQL instance at 'http://localhost:8000/___graphql'

4. If changes are made to the site structure or page conmtent, stop the dev server and run again to rebuild the content. You can sue use 'yarn workspace gatsby-theme-linz build' to create a final static version for publishing. 

This repo by default uses a demo Ghost CMS api, to test locally with your own Ghost instance change the following details in the gatsby-config.js file, in real use you would switch feed source based on environment settings to facilitate development and production.

    apiUrl: `https://gatsby.ghost.io`,
    contentApiKey: `9cc5c67c358edfdd81455149d0`

To find your Ghost CMS apiUrl and contentApiKey login to your ghost admin interface at 'https://ghostcmsdomain/ghost and add a custom integration for GatsbyJS, this will provide a new apiUrl and contentApiKey, replace in the config file and restart the local dev server as per step 3.

#   Notes
This repo was hacked together! and is just meant as a demo of how to get Ghost CMS data into a Gatsby portable theme, be kind :) Any LUI styles added are just for indication and should be done properly with: 

- LUI packages
- Typescript
- Gatsby image plugins for static and dynamic images
- Use of up to date React and NPM libraries 

but then you already noticed that!

