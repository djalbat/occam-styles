"use strict";

import { errorColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { colour, pathColour, tableColour, markerColour, bulletColour, listingColour, headingColour, directiveColour, pathHoverColour } from "../../scheme/syntax/markdown";

const markdownSyntaxStyle = `

  .markdown.syntax > div > * { color: ${colour}; }

  .markdown.syntax > div > .path { color: ${pathColour}; }

  .markdown.syntax > div > .path:hover { color: ${pathHoverColour}; }

  .markdown.syntax > div > .table { color: ${tableColour}; }

  .markdown.syntax > div > .marker { color: ${markerColour}; }

  .markdown.syntax > div > .bullet { color: ${bulletColour}; }

  .markdown.syntax > div > .listing { color: ${listingColour}; }

  .markdown.syntax > div > .heading { color: ${headingColour}; }

  .markdown.syntax > div > .directive { color: ${directiveColour}; }

  .markdown.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default markdownSyntaxStyle;
