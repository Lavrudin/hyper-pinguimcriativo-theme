"use strict";

const backgroundColor = "#28303D";
const borderColor = "#48A9A6";
const cursorColor = "#48A9A6";

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    fontSize: 12,
    windowSize: [950, 500],
    cursorBlink: true,
    selectionColor: "#48A9A6",
    cursorShape: "BLOCK",
    backgroundColor,
    fontFamily:
      '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
    borderColor,
    cursorColor,
    termCSS: `
      ${config.termCSS || ""}
    `,
    css: `
			${config.css || ""}
      .header_header {
        color: ${borderColor} !important;
      }
      .hyper_main {
        border: 3px solid ${borderColor} !important;
        
      }
      .tab_textActive {
        border: 1px solid #EBCA06;
      }
      .header_appTitle::after{
        content: ' 🐧';

      }
    `,
  });
};
