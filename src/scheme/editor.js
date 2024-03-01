"use strict";

import { commonBorderColour } from "../scheme/common";

import { dawn, tuatara, stardust, woodsmoke } from "../colours";

export const borderColour = commonBorderColour; ///

export const tabsBorderColour = commonBorderColour; ///

export const tabsReadOnlyColour = tuatara;

export const tabsBackgroundColour = dawn;

export const tabsArrowButtonColour = woodsmoke;

export const tabsActiveBackgroundColour = stardust;

export default {
  borderColour,
  tabsBorderColour,
  tabsReadOnlyColour,
  tabsBackgroundColour,
  tabsArrowButtonColour,
  tabsActiveBackgroundColour
};
