import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* jost-regular - latin */
  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/jost/jost-v14-latin-regular.eot"); /* IE9 Compat Modes */
    src: local('Jost'),
        url('/fonts/jost/jost-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url("/fonts/jost/jost-v14-latin-regular.woff2") format('woff2'), /* Super Modern Browsers */
        url("/fonts/jost/jost-v14-latin-regular.woff") format('woff'), /* Modern Browsers */
        url("/fonts/jost/jost-v14-latin-regular.ttf") format('truetype'), /* Safari, Android, iOS */
        url('/fonts/jost/jost-v14-latin-regular.svg#Jost') format('svg'); /* Legacy iOS */
    font-display: swap;
  }

  /* comic-neue-regular - latin */
  @font-face {
    font-family: 'Comic Neue';
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/comicNeue/comic-neue-v8-latin-regular.eot"); /* IE9 Compat Modes */
    src: local('Comic Neue'),
        url('/fonts/comicNeue/comic-neue-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url("/fonts/comicNeue/comic-neue-v8-latin-regular.woff2") format('woff2'), /* Super Modern Browsers */
        url("/fonts/comicNeue/comic-neue-v8-latin-regular.woff") format('woff'), /* Modern Browsers */
        url("/fonts/comicNeue/comic-neue-v8-latin-regular.ttf") format('truetype'), /* Safari, Android, iOS */
        url('/fonts/comicNeue/comic-neue-v8-latin-regular.svg#ComicNeue') format('svg'); /* Legacy iOS */
    font-display: swap;
  }

  /* cookie-regular - latin */
  @font-face {
    font-family: 'Cookie';
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/cookie/cookie-v17-latin-regular.eot"); /* IE9 Compat Modes */
    src: local('Cookie'),
        url('/fonts/cookie/cookie-v17-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url("/fonts/cookie/cookie-v17-latin-regular.woff2") format('woff2'), /* Super Modern Browsers */
        url("/fonts/cookie/cookie-v17-latin-regular.woff") format('woff'), /* Modern Browsers */
        url("/fonts/cookie/cookie-v17-latin-regular.ttf") format('truetype'), /* Safari, Android, iOS */
        url('/fonts/cookie/cookie-v17-latin-regular.svg#Cookie') format('svg'); /* Legacy iOS */
    font-display: swap;
  }
`;
