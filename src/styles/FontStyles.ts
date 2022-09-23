import { createGlobalStyle } from "styled-components";
import { JostWoff, JostWoff2, ComicNeueWoff2, ComicNeueWoff, CookieWoff2, CookieWoff } from "../assets/fonts";

export default createGlobalStyle`
  /* jost-regular - latin */
  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/jost/jost-v14-latin-regular.eot"); /* IE9 Compat Modes */
    src: local(''),
        url('../assets/fonts/jost/jost-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${JostWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${JostWoff}) format('woff'), /* Modern Browsers */
        url("../assets/fonts/jost/jost-v14-latin-regular.ttf") format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/jost/jost-v14-latin-regular.svg#Jost') format('svg'); /* Legacy iOS */
  }

  /* comic-neue-regular - latin */
  @font-face {
    font-family: 'Comic Neue';
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/comicNeue/comic-neue-v8-latin-regular.eot"); /* IE9 Compat Modes */
    src: local(''),
        url('../assets/fonts/comicNeue/comic-neue-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${ComicNeueWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${ComicNeueWoff}) format('woff'), /* Modern Browsers */
        url("../assets/fonts/comicNeue/comic-neue-v8-latin-regular.ttf") format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/comicNeue/comic-neue-v8-latin-regular.svg#ComicNeue') format('svg'); /* Legacy iOS */
  }

  /* cookie-regular - latin */
  @font-face {
    font-family: 'Cookie';
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/cookie/cookie-v17-latin-regular.eot"); /* IE9 Compat Modes */
    src: local(''),
        url('../assets/fonts/cookie/cookie-v17-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${CookieWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${CookieWoff}) format('woff'), /* Modern Browsers */
        url("../assets/fonts/cookie/cookie-v17-latin-regular.ttf") format('truetype'), /* Safari, Android, iOS */
        url('../assets/fonts/cookie/cookie-v17-latin-regular.svg#Cookie') format('svg'); /* Legacy iOS */
  }
`;
