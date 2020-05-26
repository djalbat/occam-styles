"use strict";

import { commonBorderColour } from "./common";

import { hunterGreen, stormDust, blackOlive, bonjour, korma, logCabin } from "../colours";

export const caretColour = bonjour;

export const borderColour = commonBorderColour; ///

export const backgroundColour = hunterGreen;

export const lineNumbersColour = stormDust;

export const gutterBorderColour = stormDust;

export const gutterBackgroundColour = blackOlive;

export const foldsLineBackgroundColour = stormDust;

export const selectionBackgroundColour = korma;

export const otherSelectionsBackgroundColour = logCabin;

export default {
  caretColour,
  borderColour,
  backgroundColour,
  lineNumbersColour,
  gutterBorderColour,
  gutterBackgroundColour,
  foldsLineBackgroundColour,
  selectionBackgroundColour,
  otherSelectionsBackgroundColour
};
