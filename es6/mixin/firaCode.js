"use strict";

import { FONT_SIZE, LINE_HEIGHT } from "../constants";

const firaCodeMixin = String(`

  font-family: "Fira Code", monospace;
  font-size: ${FONT_SIZE};
  line-height: ${LINE_HEIGHT}px;
  text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */
  font-feature-settings: "calt" 1;  /* Enable ligatures for IE 10+, Edge */

`);

const lineHeight = LINE_HEIGHT; ///

Object.assign(firaCodeMixin, {
  lineHeight
});

export default firaCodeMixin;
