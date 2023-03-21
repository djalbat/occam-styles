# Occam Styles

[Occam](https://github.com/djalbat/occam)'s colours, syntax schemes, common styles and images.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Building](#building)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This package contains colour definitions together with user interface and syntax schemes; various images, in either native or JSX form; and the some of the [JuliaMono](https://juliamono.netlify.app/) typeface in Woff2 format.

There is a small example application to view the images in JSX form and so on.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-styles

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-styles.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

### Compressing the JuliaMono TTF files to Woff2 format

Homebrew has the necessary utilities:

```
brew install woof2
```

Compression is then straightforward, for example:

```
woff2_compress JuliaMono-Regular.ttf
```

For instructions on how to remove all ligatures, etc, see the following:

* [How to turn off ligatures and contextual alternate characters in CSS](https://github.com/cormullion/juliamono/issues/159#issuecomment-1453900328)

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888 and will reload automatically when changes are made.

## Acknowledgements

* The syntax colouring is based on the [Monokai](http://www.monokai.nl/blog/wp-content/asdev/Monokai.tmTheme) theme.

* Colours are courtesy of Chirag Mehta's [Name that Colour](http://chir.ag/projects/name-that-color/).

* The logo was converted to SVG format with Peter Selinger's [Potrace](http://potrace.sourceforge.net/).

* Occam's pretty printer uses the [JuliaMono](https://juliamono.netlify.app/) typeface distributed under the [SIL Open Font License (OFL)](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=ofl).

* [Fredrik Ekre](https://fredrikekre.se/) provided the script to strip out ligatures and contextual alternate characters from JuliaMono.

## Contact

* james.smith@openmathematics.org
