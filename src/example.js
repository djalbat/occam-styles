"use strict";

import "juxtapose";

import withStyle from "easy-with-style";

import { Body } from "easy";

const { renderStyles } = withStyle;

import View from "./example/view";

const body = new Body();

renderStyles();

body.mount(

  <View/>

);
