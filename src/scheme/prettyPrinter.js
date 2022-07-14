"use strict";

import { commonBorderColour } from "./common";

import { korma, emperor, bonjour, logCabin, stormDust, blackOlive, woodsmoke } from "../colours";

export const borderColour = commonBorderColour; ///

export const backgroundColour = woodsmoke;

export const lineNumbersColour = stormDust;

export const gutterBorderColour = stormDust;

export const caretBackgroundColour = bonjour;

export const gutterBackgroundColour = blackOlive;

export const foldsLineBackgroundColour = stormDust;

export const selectionBackgroundColour = korma;

export const scrollbarBackgroundColour = emperor;

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
