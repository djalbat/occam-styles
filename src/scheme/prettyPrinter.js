"use strict";

import { commonBorderColour } from "./common";

import { dune, korma, bonjour, logCabin, stormDust, springWood, woodsmoke, blackOlive } from "../colours";

export const foldFill = stormDust;

export const borderColour = commonBorderColour; ///

export const foldLineColour = foldFill;

export const selectedColour = springWood;

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
  foldFill,
  borderColour,
  foldLineColour,
  selectedColour,
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
