import React from "react";

/*
    LUI elements borrowed from sampl LUI site, needs to be replaced with proper NPM library 
    and matched to best practice, this is just to demonstrate gatsby theme approach
*/

const Header = ({ children }) => {

    return (
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>LINZ Engineering Blog</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600&display=swap"/>
            <link rel="stylesheet" href="https://test-lui-css.s3-ap-southeast-2.amazonaws.com/styles.css"/> 
        </head>
    )
}

export default Header;
