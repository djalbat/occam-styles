"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Div from "../div";

import { FrakturAlphaNumericSVG,
         MonospaceAlphaNumericSVG,
         DoubleStruckAlphaNumericSVG,
         SerifBoldAlphaNumericSVG,
         SerifItalicAlphaNumericSVG,
         SerifBoldItalicAlphaNumericSVG,
         SansSerifAlphaNumericSVG,
         SansSerifBoldAlphaNumericSVG,
         SansSerifItalicAlphaNumericSVG,
         SansSerifBoldItalicAlphaNumericSVG } from "../../../index"; ///

class AlphaNumericDiv extends Element {
  childElements() {
    const AlphaNumericSVGs = [
            FrakturAlphaNumericSVG,
            MonospaceAlphaNumericSVG,
            DoubleStruckAlphaNumericSVG,
            SerifBoldAlphaNumericSVG,
            SerifItalicAlphaNumericSVG,
            SerifBoldItalicAlphaNumericSVG,
            SansSerifAlphaNumericSVG,
            SansSerifBoldAlphaNumericSVG,
            SansSerifItalicAlphaNumericSVG,
            SansSerifBoldItalicAlphaNumericSVG
          ],
          childElements = AlphaNumericSVGs.map((AlphaNumericSVG) =>

            <Div>
              <AlphaNumericSVG />
            </Div>

          );

    return childElements;
  }

  static tagName = "div";

  static defaultProperties = {
    className: "toolbar"
  };
}

export default withStyle(AlphaNumericDiv)`

  margin-bottom: 2rem;
  
`;

