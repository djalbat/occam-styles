"use strict";

import { commonBorderColour } from "../scheme/common";

import { dawn, tuatara, bonjour, stardust, stormDust, woodsmoke, snowWhite } from "../colours";

export const borderColour = commonBorderColour; ///

export const tabsBorderColour = commonBorderColour; ///

export const menuBorderColour = tuatara;

export const tabsReadOnlyColour = tuatara;

export const tabsBackgroundColour = dawn;

export const menuBackgroundColour = stormDust;

export const tabsArrowButtonColour = woodsmoke;

export const menuButtonBorderColour = tuatara;

export const menuButtonBackgroundColour = stormDust;

export const tabsActiveBackgroundColour = stardust;

export const menuPreviewBackgroundColour = snowWhite;

export const menuButtonHoverBackgroundColour = stardust;

export const menuButtonPreviewBackgroundColour = snowWhite;

export const menuButtonHoverPreviewBackgroundColour = bonjour;

export default {
  borderColour,
  tabsBorderColour,
  menuBorderColour,
  tabsReadOnlyColour,
  tabsBackgroundColour,
  menuBackgroundColour,
  tabsArrowButtonColour,
  menuButtonBorderColour,
  menuButtonBackgroundColour,
  tabsActiveBackgroundColour,
  menuPreviewBackgroundColour,
  menuButtonHoverBackgroundColour,
  menuButtonPreviewBackgroundColour,
  menuButtonHoverPreviewBackgroundColour
};
