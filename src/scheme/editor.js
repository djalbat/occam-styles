"use strict";

import { commonBorderColour } from "../scheme/common";

import { dawn, tuatara, bonjour, stardust, stormDust, woodsmoke } from "../colours";

export const borderColour = commonBorderColour; ///

export const tabsBorderColour = commonBorderColour; ///

export const tabsReadOnlyColour = tuatara;

export const tabsBackgroundColour = dawn;

export const tabsArrowButtonColour = woodsmoke;

export const tabsActiveBackgroundColour = stardust;

export const menuButtonBackgroundColour = stormDust;

export const menuButtonHoverBackgroundColour = stardust;

export const menuButtonHoverPreviewBackgroundColour = bonjour;

export default {
  borderColour,
  tabsBorderColour,
  tabsReadOnlyColour,
  tabsBackgroundColour,
  tabsArrowButtonColour,
  tabsActiveBackgroundColour,
  menuButtonBackgroundColour,
  menuButtonHoverBackgroundColour,
  menuButtonHoverPreviewBackgroundColour
};
