import { css } from 'styled-components';

import Light from './ProximaNova/ProximaNova-Light.otf';
import Regular from './ProximaNova/ProximaNova-Regular.otf';
import Semibold from './ProximaNova/ProximaNova-Semibold.otf';
import Bold from './ProximaNova/ProximaNova-Bold.otf';
import Extrabold from './ProximaNova/ProximaNova-Extrabold.otf';


export default css`
   @font-face {
      font-family: 'ProximaNova';
      font-weight: 300;
      src: url('${Light}') format('opentype');
   }
   @font-face {
      font-family: 'ProximaNova';
      font-weight: 400;
      src: url('${Regular}') format('opentype');
   }
   @font-face {
      font-family: 'ProximaNova';
      font-weight: 500;
      src: url('${Semibold}') format('opentype');
   }
   @font-face {
      font-family: 'ProximaNova';
      font-weight: 700;
      src: url('${Bold}') format('opentype');
   }
   @font-face {
      font-family: 'ProximaNova';
      font-weight: 800;
      src: url('${Extrabold}') format('opentype');
   }
`;
