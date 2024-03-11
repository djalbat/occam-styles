# Occam Styles

[Occam](https://github.com/djalbat/occam)'s colours, syntax schemes, common styles and images.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Usage](#sage)
- [Building](#building)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This package contains colour definitions together with user interface and syntax schemes; various images, in either native or JSX form; and the [JuliaMono](https://juliamono.netlify.app/) font in Woff2 format.

There is a small example application to view some of the images in JSX form and so on.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-styles

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-styles.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

### JuliaMono

The `JuliaMono.zip` file can be downloaded from the releases page of the JulaMono repository on [GitHub](https://github.com/cormullion/juliamono/releases).

Once downloaded, unzip the file:

```
unzip JuliaMono.zip
```

All the files bar the `JuliaMono-Regular.ttf` file can be deleted, as can the `webfonts` directory.

Ligatures and their like can be removed with the using `pyftsubset`:

```
pip install fonttools
pyftsubset JuliaMono-Regular.ttf '*' --output-file=JuliaMono-Regular.ttf  --layout-features-='*'
```

If you have a Mac with Homebrew installed then you can install the utility to convert the TTF file to WOFF2 thus:

```
brew install woff2
```

To convert the TTF to a WOFF2 file:

```
woff2_compress JuliaMono-Regular.ttf
```

This utility can be installed and run on other platforms with a little effort. 

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

The various styles and elements can be importsed in the usual manner:

```
import { CreateSessionToolbarSVG } from "occam-styles";
```

For a complete list see the `src/index.js` file.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Acknowledgements

* The syntax colouring is based on the [Monokai](http://www.monokai.nl/blog/wp-content/asdev/Monokai.tmTheme) theme.

* Colours are courtesy of Chirag Mehta's [Name that Colour](http://chir.ag/projects/name-that-color/).

* The logo was converted to SVG format with Peter Selinger's [Potrace](http://potrace.sourceforge.net/).

* Occam's pretty printer uses the [JuliaMono](https://juliamono.netlify.app/) font distributed under the [SIL Open Font License (OFL)](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=ofl).

* [Fredrik Ekre](https://fredrikekre.se/) provided the script to strip out ligatures and contextual alternate characters from JuliaMono.

## Contact

* james.smith@djalbat.com
