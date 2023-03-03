"use strict";

import "juxtapose";

import withStyle from "easy-with-style";

import { Body } from "easy";

const { renderStyle, renderStyles } = withStyle;

import View from "./example/view";
import juliaMonoStyle from "./style/juliaMono";

const body = new Body();

renderStyles();

renderStyle(juliaMonoStyle());

body.mount(

  <View/>

);
