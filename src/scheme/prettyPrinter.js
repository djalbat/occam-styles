"use strict";

import { commonBorderColour } from "./common";

import { hunterGreen, stormDust, blackOlive, bonjour, korma, logCabin } from "../colours";

export const borderColour = commonBorderColour; ///

export const backgroundColour = hunterGreen;

export const lineNumbersColour = stormDust;

export const gutterBorderColour = stormDust;

export const caretBackgroundColour = bonjour;

export const gutterBackgroundColour = blackOlive;

export const foldsLineBackgroundColour = stormDust;

export const selectionBackgroundColour = korma;

export const scrollbarBackgroundColour = stormDust;

export const otherSelectionsBackgroundColour = logCabin;

export default {
  borderColour,
  backgroundColour,
  lineNumbersColour,
  gutterBorderColour,
  caretBackgroundColour,
  gutterBackgroundColour,
  foldsLineBackgroundColour,
  selectionBackgroundColour,
  scrollbarBackgroundColour,
  otherSelectionsBackgroundColour
};
