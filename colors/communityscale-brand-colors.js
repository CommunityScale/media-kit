// CommunityScale Brand Colors
// Light and Dark theme variants.
//
// Source of truth: colors/communityscale-style.json
//   - Light values are the canonical brand colors from that file:
//       blue1..blue6  -> palettes["6_seq_blue"]
//       yellow, green, orange, red, purple -> palettes["5_cat_accent"]
//   - Dark values are media-kit-maintained variants; the upstream brand
//     JSON does not define a dark theme.
//
// Do not hand-edit the light values here. Change them in the brand JSON,
// then mirror the change into this module.

export const communityscaleColorsLight = {
  blue1Primary: '#192f5e',
  blue2: '#3445b0',
  blue3Secondary: '#6e79dd',
  blue4: '#8795eb',
  blue5: '#adbfff',
  blue6Background: '#c2d8ff',
  yellow: '#ecd731',
  purple: '#9b5093',
  green: '#89aa42',
  orange: '#ec8e46',
  red: '#ec6448',
};

export const communityscaleColorsDark = {
  blue1Primary: '#adbfff',
  blue2: '#8795eb',
  blue3Secondary: '#6e79dd',
  blue4: '#3445b0',
  blue5: '#192f5e',
  blue6Background: '#0d1a3a',
  yellow: '#f5e454',
  purple: '#c278b9',
  green: '#a8c96a',
  orange: '#f5a76a',
  red: '#f58070',
};

export const communityscaleColorsLightRgb = {
  blue1Primary: 'rgb(25, 47, 94)',
  blue2: 'rgb(52, 69, 176)',
  blue3Secondary: 'rgb(110, 121, 221)',
  blue4: 'rgb(135, 149, 235)',
  blue5: 'rgb(173, 191, 255)',
  blue6Background: 'rgb(194, 216, 255)',
  yellow: 'rgb(236, 215, 49)',
  purple: 'rgb(155, 80, 147)',
  green: 'rgb(137, 170, 66)',
  orange: 'rgb(236, 142, 70)',
  red: 'rgb(236, 100, 72)',
};

export const communityscaleColorsDarkRgb = {
  blue1Primary: 'rgb(173, 191, 255)',
  blue2: 'rgb(135, 149, 235)',
  blue3Secondary: 'rgb(110, 121, 221)',
  blue4: 'rgb(52, 69, 176)',
  blue5: 'rgb(25, 47, 94)',
  blue6Background: 'rgb(13, 26, 58)',
  yellow: 'rgb(245, 228, 84)',
  purple: 'rgb(194, 120, 185)',
  green: 'rgb(168, 201, 106)',
  orange: 'rgb(245, 167, 106)',
  red: 'rgb(245, 128, 112)',
};

export const communityscaleColors = {
  light: communityscaleColorsLight,
  dark: communityscaleColorsDark,
  lightRgb: communityscaleColorsLightRgb,
  darkRgb: communityscaleColorsDarkRgb,
};

export default communityscaleColors;
