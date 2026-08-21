# Media Kit

Assets in PNG and SVG format for [CommunityScale](https://communityscale.com/). Some of the images are below for easy linking, more options are in the folders.

## Black Wordmark
<img src="png/communityscale-wordmark-black.png" alt="CommunityScale Wordmark Black" height="200">

**PNG:** `https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-wordmark-black.png`

**SVG:** `https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-wordmark-black.svg`

## Rounded Logo - White on Black
<img src="png/communityscale-logo-rounded-white-on-black.png" alt="CommunityScale Logo Rounded White on Black" height="200">

**PNG:** `https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-logo-rounded-white-on-black.png`

**SVG:** `https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-logo-rounded-white-on-black.svg`

## Square Logo - White on Black
<img src="png/communityscale-logo-square-white-on-black.png" alt="CommunityScale Logo Square White on Black" height="200">

**PNG:** `https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-logo-square-white-on-black.png`

**SVG:** `https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-logo-square-white-on-black.svg`

## Social Card - White Background
<img src="png/communityscale-social-card-white-bg.png" alt="CommunityScale Social Card White Background" height="200">

**PNG:** `https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-social-card-white-bg.png`

## Social Card - Black Background
<img src="png/communityscale-social-card-black-bg.png" alt="CommunityScale Social Card Black Background" height="200">

**PNG:** `https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-social-card-black-bg.png`

## Brand Colors

The complete CommunityScale color scheme — brand palettes, cartographic ramps, chart tokens, and typography — is published as JSON. It is the source of truth for everything in this section.

**JSON:** `https://raw.githubusercontent.com/CommunityScale/media-kit/main/colors/communityscale-style.json`

### Core brand colors

A JavaScript module with light and dark theme variants, in hex and RGB, is available for direct import.

**JS:** `https://raw.githubusercontent.com/CommunityScale/media-kit/refs/heads/main/colors/communityscale-brand-colors.js`

```js
import communityscaleColors from './colors/communityscale-brand-colors.js';

// Access colors by theme
communityscaleColors.light       // hex values for light theme
communityscaleColors.dark        // hex values for dark theme
communityscaleColors.lightRgb    // rgb values for light theme
communityscaleColors.darkRgb     // rgb values for dark theme
```

| Color | Light | Dark |
|-------|-------|------|
| Blue 1 (Primary) | `#192f5e` | `#adbfff` |
| Blue 2 | `#3445b0` | `#8795eb` |
| Blue 3 (Secondary) | `#6e79dd` | `#6e79dd` |
| Blue 4 | `#8795eb` | `#3445b0` |
| Blue 5 | `#adbfff` | `#192f5e` |
| Blue 6 (Background) | `#c2d8ff` | `#0d1a3a` |
| Yellow | `#ecd731` | `#f5e454` |
| Purple | `#9b5093` | `#c278b9` |
| Green | `#89aa42` | `#a8c96a` |
| Orange | `#ec8e46` | `#f5a76a` |
| Red | `#ec6448` | `#f58070` |

The light column is `palettes.6_seq_blue` and `palettes.5_cat_accent` from the JSON. There is no upstream dark theme; the dark column is maintained in this repo.

### Palettes

Palettes are keyed `{steps}_{type}_{hue}` — number of stops, then `seq` (sequential), `div` (diverging), or `cat` (categorical), then the hue or theme.

| Key | Description | Colors |
|-----|-------------|--------|
| `3_div_penalty_exempt_bonus` | Three-class categorical map scale for Build Now Act penalty, exempt, and bonus outcomes | `#c0392b` `#89aa42` `#2c5f9e` |
| `4_div_red_blue` | Diverging scale for change maps — decline=red, growth=blue | `#d94f4f` `#e8b8b8` `#c8dff4` `#192f5e` |
| `5_cat_accent` | Categorical accent colors for charts and callouts | `#ecd731` `#89aa42` `#ec8e46` `#ec6448` `#9b5093` |
| `5_seq_neutral` | Neutral/grayscale utility colors | `#000000` `#333333` `#666666` `#e0e0e0` `#ffffff` |
| `6_div_red_blue` | Six-stop cartographic diverging scale for negative-to-positive map metrics | `#c0392b` `#e0805e` `#f4cabb` `#c8dff4` `#6e8fd0` `#192f5e` |
| `6_seq_blue` | Primary brand blues, dark to light | `#192f5e` `#3445b0` `#6e79dd` `#8795eb` `#adbfff` `#c2d8ff` |
| `6_seq_blue_density` | Six-stop cartographic density scale, light to dark blue | `#eaf0fb` `#c2d8ff` `#adbfff` `#8795eb` `#3445b0` `#192f5e` |
| `6_seq_contrast` | High-contrast sequential ramp from green through yellow, orange, red, and purple to navy | `#89aa42` `#ecd731` `#ec8e46` `#ec6448` `#9b5093` `#192f5e` |
| `6_seq_cost` | Six-stop cartographic cost scale, low-to-high burden | `#192f5e` `#6e79dd` `#c8dff4` `#f4cabb` `#e0805e` `#c0392b` |
| `6_seq_green_transit` | Six-stop cartographic transit scale, light to dark green | `#eef3e2` `#d4e0b0` `#b8cd7e` `#9fbb59` `#89aa42` `#5e7a2c` |
| `6_seq_income` | Sequential scale for current-income affordability maps (low=green, high=navy) | `#89aa42` `#ecd731` `#ec8e46` `#ec6448` `#9b5093` `#192f5e` |
| `6_seq_orange_design` | Six-stop cartographic design scale, light to dark orange | `#fdeee2` `#f9d2b0` `#f4b27d` `#ef9a55` `#ec8e46` `#c25e1e` |
| `6_seq_purple_diversity` | Six-stop cartographic diversity scale, light to dark purple | `#f3e9f2` `#dcc0d8` `#c498bd` `#ab6fa2` `#9b5093` `#6e2f68` |
| `20_seq_contrast` | Homepage income-needed-to-afford sequential ramp, low to high | `#89aa42` … `#192f5e` (20 stops) |
| `ami_blue_6` | Six-stop income/AMI blue ramp used by income-distribution cards, dark to light | `#192f5e` `#4956c5` `#6875e7` `#8795f3` `#9bb1ff` `#bfd7ff` |
| `blue_sequential_6` | Sequential blue scale, dark to light, with a Prussian Blue anchor | `#091a3f` `#3445b0` `#6e79d9` `#8e9cec` `#adbfff` `#e4e0fd` |
| `comparison_16` | Canonical ordered palette for comparison-mode series. The first entry is the subject geography; all comparison charts use this exact order | `#3445b0` … `#c2d8ff` (16 stops) |
| `suit_viridis_20` | Housing-ready cartographic viridis ramp; intentionally non-brand and pixel-identical to the baked raster | `#d4ede2` … `#120a2c` (20 stops) |

### Chart color sequence

`chart_color_sequence` is the ordered list to use for data series in charts:

`#192f5e` `#6e79dd` `#89aa42` `#ecd731` `#ec8e46` `#9b5093`

### Semantic tokens

`app_colors.tokens` carries the fixed meanings that recur across CommunityScale charts and maps — `housing_tenure` (owner / renter / vacant), `cost_burden`, `affordability`, `sectors`, `semantic` (positive / negative / highlight / neutral), plus link, focus, map, and UI neutrals. `chart_tokens` adds the shared chart typography, axis, spacing, line-weight, and number-format rules.

### Typography

All fonts are Roboto — `Roboto`, `Roboto Condensed`, and `Roboto Mono`. CSS variables and per-element weight/size scales are under `typography` in the JSON.

## Raw Asset Links

### Colors
- [communityscale-style.json](https://raw.githubusercontent.com/CommunityScale/media-kit/main/colors/communityscale-style.json)
- [communityscale-brand-colors.js](https://raw.githubusercontent.com/CommunityScale/media-kit/main/colors/communityscale-brand-colors.js)

### Favicons
- [communityscale-favicon-192.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/favicon/communityscale-favicon-192.png)
- [communityscale-favicon-512.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/favicon/communityscale-favicon-512.png)

### SVG Images
- [communityscale-logo-rounded-black-on-white.svg](https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-logo-rounded-black-on-white.svg)
- [communityscale-logo-rounded-white-in-black.svg](https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-logo-rounded-white-in-black.svg)
- [communityscale-logo-rounded-white-on-black.svg](https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-logo-rounded-white-on-black.svg)
- [communityscale-logo-square-black-on-white.svg](https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-logo-square-black-on-white.svg)
- [communityscale-logo-square-white-on-black.svg](https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-logo-square-white-on-black.svg)
- [communityscale-symbol-black.svg](https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-symbol-black.svg)
- [communityscale-symbol-white.svg](https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-symbol-white.svg)
- [communityscale-wordmark-black.svg](https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-wordmark-black.svg)
- [communityscale-wordmark-white.svg](https://raw.githubusercontent.com/CommunityScale/media-kit/main/svg/communityscale-wordmark-white.svg)

### PNG Images
- [communityscale-logo-rounded-black-on-white.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-logo-rounded-black-on-white.png)
- [communityscale-logo-rounded-white-on-black.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-logo-rounded-white-on-black.png)
- [communityscale-logo-square-black-on-white.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-logo-square-black-on-white.png)
- [communityscale-logo-square-white-on-black.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-logo-square-white-on-black.png)
- [communityscale-social-card-black-bg.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-social-card-black-bg.png)
- [communityscale-social-card-white-bg.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-social-card-white-bg.png)
- [communityscale-symbol-black.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-symbol-black.png)
- [communityscale-symbol-white.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-symbol-white.png)
- [communityscale-wordmark-black.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-wordmark-black.png)
- [communityscale-wordmark-white.png](https://raw.githubusercontent.com/CommunityScale/media-kit/main/png/communityscale-wordmark-white.png)


