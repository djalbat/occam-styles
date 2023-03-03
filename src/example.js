"use strict";

import "juxtapose";

import withStyle from "easy-with-style";

import { Body } from "easy";

const { renderStyle, renderStyles } = withStyle;

import View from "./example/view";
import firaCodeStyle from "./style/firaCode";

const body = new Body();

renderStyles();

renderStyle(firaCodeStyle());

body.mount(

  <View/>

);
