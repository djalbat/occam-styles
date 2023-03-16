"use strict";

import { commonBorderColour } from "./common";

import { dune, korma, bonjour, logCabin, stormDust, woodsmoke, blackOlive } from "../colours";

export const borderColour = commonBorderColour; ///

export const backgroundColour = woodsmoke;

export const lineNumbersColour = stormDust;

export const gutterBorderColour = stormDust;

export const caretBackgroundColour = bonjour;

export const gutterBackgroundColour = blackOlive;

export const foldsLineBackgroundColour = stormDust;

export const selectionBackgroundColour = korma;

export const scrollbarThumbBorderColour = dune;

export const scrollbarTrackBackgroundColour = dune;

export const scrollbarThumbBackgroundColour = stormDust;

export const remoteSelectionsBackgroundColour = logCabin;

export default {
  borderColour,
  backgroundColour,
  lineNumbersColour,
  gutterBorderColour,
  caretBackgroundColour,
  gutterBackgroundColour,
  foldsLineBackgroundColour,
  selectionBackgroundColour,
  scrollbarThumbBorderColour,
  scrollbarTrackBackgroundColour,
  scrollbarThumbBackgroundColour,
  remoteSelectionsBackgroundColour
};
