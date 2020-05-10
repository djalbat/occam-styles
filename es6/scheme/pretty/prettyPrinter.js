"use strict";

import { commonBorderColour } from "../common";

import { hunterGreen, stormDust, blackOlive, bonjour, korma, logCabin } from "../../colours";

const borderColour = commonBorderColour; ///

const backgroundColour = hunterGreen;

const lineNumbersColour = stormDust;

const gutterBorderColour = stormDust;

const gutterBackgroundColour = blackOlive;

const caretBackgroundColour = bonjour;

const foldsLineBackgroundColour = stormDust;

const selectionBackgroundColour = korma;

const otherSelectionsBackgroundColour = logCabin;

export default {
  borderColour,
  backgroundColour,
  lineNumbersColour,
  gutterBorderColour,
  gutterBackgroundColour,
  caretBackgroundColour,
  foldsLineBackgroundColour,
  selectionBackgroundColour,
  otherSelectionsBackgroundColour
};
