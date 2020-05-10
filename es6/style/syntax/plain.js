"use strict";

import { plainSyntaxScheme } from "occam-colours";

const { colour } = plainSyntaxScheme;

const plainSyntaxStyle = `

  .plain.syntax > * { color: ${colour}; }

`;

export default plainSyntaxStyle;
