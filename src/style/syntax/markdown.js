"use strict";

import { errorColour, nonsenseColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { colour,
         pathColour,
         linkColour,
         tableColour,
         markerColour,
         bulletColour,
         listingColour,
         headingColour,
         referenceColour,
         directiveColour,
         pathHoverColour } from "../../scheme/syntax/markdown";

const markdownSyntaxStyle = `

  div.markdown.lines > div.line > div.syntax > * { color: ${colour}; }

  div.markdown.lines > div.line > div.syntax > .path { color: ${pathColour}; }

  div.markdown.lines > div.line > div.syntax > .path:hover { color: ${pathHoverColour}; }

  div.markdown.lines > div.line > div.syntax > .link { color: ${linkColour}; }

  div.markdown.lines > div.line > div.syntax > .table { color: ${tableColour}; }

  div.markdown.lines > div.line > div.syntax > .marker { color: ${markerColour}; }

  div.markdown.lines > div.line > div.syntax > .bullet { color: ${bulletColour}; }

  div.markdown.lines > div.line > div.syntax > .listing { color: ${listingColour}; }

  div.markdown.lines > div.line > div.syntax > .heading { color: ${headingColour}; }

  div.markdown.lines > div.line > div.syntax > .nonsense { color: ${nonsenseColour}; } 

  div.markdown.lines > div.line > div.syntax > .reference { color: ${referenceColour}; }

  div.markdown.lines > div.line > div.syntax > .directive { color: ${directiveColour}; }

  div.markdown.lines > div.line > div.syntax > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default markdownSyntaxStyle;
