# gatsby-theme-linz
Example theme for LINZ Engineering Blog

This example theme uses Yarn workspaces, to learn more look here https://yarnpkg.com/features/workspaces

The structure of this repo is made up of the following root folders, 'gatsby-theme-linz' is the Gatsby theme and 'site' is an example implementation of a basic gatsby site that uses the 'gatsby-theme-linz' theme.

When working with Gatsby, once you start to build out your theme in order to run you need to create a new gatsbvy site and load the theme in order for it to run, this is why you will use 'site' to test the theme.

- repo root
---> gatsby-theme-linz
---> site

To get this demo running do the following:


1.  Install Yarn and the Gatsby CLI  

2.  Clone this repo and then run 'yarn' from the root of the repo to download and install dependencies for all folders.

3.  from the root of the repo run the developer server for the site application using 'yarn workspace site develop', this will establish a dev server at 'http://localhost:8000' and a GraphQL instance at 'http://localhost:8000/___graphql'

4. If changes are made to the site structure or page conmtent, stop the dev server and run again to rebuild the content. You can sue use 'yarn workspace gatsby-theme-linz build' to create a final static version for publishing. 

