# Anguarljs skeleton project with bower and browserfiy

## Install
    npm install
    
## Directories

 - /public : static files, html, css, javascript without browserify
 - /src : source files
   - /js : javascript source files for browserify
 - /dist : output directory, do not touch !

## Build files to dist folder
    npm run build

## Open a browser with watchers
    npm run server

## Features

 - Http server
 - Browserify
 - Public folder for static files
 - Copy main bower files to dist folder
 - Watch public files and javascript source files
 - Using npm as a task runner (no grunt / gulp)
 - Source maps with browserify

## Missing features

- javascript linting
- css preprocessor ?
- ui-router
- livereload
