"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class FindInFilesToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <path
          id="path1073"
          style="fill:#000000;stroke:#ba0055;stroke-width:0;paint-order:markers stroke fill"
          d="M 7.4972168 0 A 7.4972506 7.5782714 0 0 0 0 7.5783488 A 7.4972506 7.5782714 0 0 0 7.4972168 15.156698 A 7.4972506 7.5782714 0 0 0 14.994434 7.5783488 A 7.4972506 7.5782714 0 0 0 7.4972168 0 z M 7.4998006 1.9998779 A 5.4999995 5.4999995 0 0 1 13.00024 7.4998006 A 5.4999995 5.4999995 0 0 1 7.4998006 13.00024 A 5.4999995 5.4999995 0 0 1 1.9998779 7.4998006 A 5.4999995 5.4999995 0 0 1 7.4998006 1.9998779 z " />
        <path
          id="rect1079"
          style="stroke:#ba0055;stroke-width:0;paint-order:markers stroke fill"
          d="M 14.000001,6.5000005 H 16 v 1.9999991 h -1.999999 z" />
        <path
          id="rect1081"
          style="stroke:#ba0055;stroke-width:0;paint-order:markers stroke fill"
          d="m 15.999999,6 h 7 v 3 h -7 z" />
        <path
          id="path1083"
          style="stroke:#ba0055;stroke-width:0;paint-order:markers stroke fill"
          d="M 24.499999,7.499999 A 1.4999994,1.4999995 0 0 1 23,8.9999986 1.4999994,1.4999995 0 0 1 21.500001,7.499999 1.4999994,1.4999995 0 0 1 23,5.9999995 1.4999994,1.4999995 0 0 1 24.499999,7.499999 Z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "find-in-files"
  };
}
