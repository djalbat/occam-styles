"use strict";

import { commonBorderColour } from "./common";

import { dune, korma, pablo, bonjour, logCabin, stormDust, woodsmoke, blackOlive, springWood } from "../colours";

export const foldFill = woodsmoke;

export const foldStroke = pablo;

export const borderColour = commonBorderColour; ///

export const selectedColour = springWood;

export const backgroundColour = woodsmoke;

export const lineNumbersColour = stormDust;

export const caretBackgroundColour = bonjour;

export const gutterBackgroundColour = blackOlive;

export const selectionBackgroundColour = korma;

export const scrollbarThumbBorderColour = dune;

export const scrollbarTrackBackgroundColour = dune;

export const scrollbarThumbBackgroundColour = stormDust;

export const remoteSelectionsBackgroundColour = logCabin;

export default {
  foldFill,
  foldStroke,
  borderColour,
  selectedColour,
  backgroundColour,
  lineNumbersColour,
  caretBackgroundColour,
  gutterBackgroundColour,
  selectionBackgroundColour,
  scrollbarThumbBorderColour,
  scrollbarTrackBackgroundColour,
  scrollbarThumbBackgroundColour,
  remoteSelectionsBackgroundColour
};
