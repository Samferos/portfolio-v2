'use strict'

// returns a icon svg
module.exports = (icon, size, data) => {
  let uiRootPath = data.data.root.uiRootPath;
  let svgSize = size || "24px";
  let dimensions = `height="${svgSize}" width="${svgSize}"`;
  return `<svg xmlns="http://www.w3.org/2000/svg" ${dimensions}><use href="${uiRootPath}/img/icon/${icon}.svg" ${dimensions} /></svg>`;
}

