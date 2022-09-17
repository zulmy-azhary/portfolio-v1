import { createGlobalStyle } from "styled-components";
import { ComicNeueEot, ComicNeueWoff2, ComicNeueTtf, ComicNeueSvg } from "../fonts/comicNeue";
import { JostEot, JostSvg, JostTtf, JostWoff2 } from "../fonts/jost";
import { OpenSansEot, OpenSansWoff2, OpenSansTtf, OpenSansSvg } from "../fonts/openSans";

export default createGlobalStyle`
  /* jost-regular - latin */
  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: url(${JostEot}); /* IE9 Compat Modes */
    src: local(''),
        url(${JostEot} + '?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${JostWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${JostWoff2}) format('woff'), /* Modern Browsers */
        url(${JostTtf}) format('truetype'), /* Safari, Android, iOS */
        url(${JostSvg} + '#Jost') format('svg'); /* Legacy iOS */
  }

  /* comic-neue-regular - latin */
  @font-face {
    font-family: 'Comic Neue';
    font-style: normal;
    font-weight: 400;
    src: url(${ComicNeueEot}); /* IE9 Compat Modes */
    src: local(''),
        url(${ComicNeueEot} + '?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${ComicNeueWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${ComicNeueWoff2}) format('woff'), /* Modern Browsers */
        url(${ComicNeueTtf}) format('truetype'), /* Safari, Android, iOS */
        url(${ComicNeueSvg} + '#ComicNeue') format('svg'); /* Legacy iOS */
  }

  /* open-sans-regular - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSansEot}); /* IE9 Compat Modes */
    src: local(''),
        url(${OpenSansEot} + '?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${OpenSansWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${OpenSansWoff2}) format('woff'), /* Modern Browsers */
        url(${OpenSansTtf}) format('truetype'), /* Safari, Android, iOS */
        url(${OpenSansSvg} + '#OpenSans') format('svg'); /* Legacy iOS */
  }
`;
