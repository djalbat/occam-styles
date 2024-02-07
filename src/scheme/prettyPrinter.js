"use strict";

import { commonBorderColour } from "./common";

import { korma, pablo, bonjour, logCabin, stardust, stormDust, woodsmoke, hurricane, blackOlive, springWood } from "../colours";

export const foldFill = woodsmoke;

export const borderColour = commonBorderColour; ///

export const selectedColour = springWood;

export const foldButtonStroke = pablo;

export const backgroundColour = woodsmoke;

export const menuButtonColour = stormDust;

export const lineNumbersColour = stormDust;

export const foldButtonHoverStroke = hurricane;

export const caretBackgroundColour = bonjour;

export const menuButtonHoverColour = stardust;

export const gutterBackgroundColour = blackOlive;

export const selectionBackgroundColour = korma;

export const scrollbarThumbBackgroundColour = stormDust;

export const remoteSelectionsBackgroundColour = logCabin;

export default {
  foldFill,
  borderColour,
  selectedColour,
  foldButtonStroke,
  backgroundColour,
  menuButtonColour,
  lineNumbersColour,
  caretBackgroundColour,
  foldButtonHoverStroke,
  menuButtonHoverColour,
  gutterBackgroundColour,
  selectionBackgroundColour,
  scrollbarThumbBackgroundColour,
  remoteSelectionsBackgroundColour
};
