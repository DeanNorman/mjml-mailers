import { createGlobalStyle } from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

import reset from './reset-css';
import fonts from './fonts';
import theme from './theme';

/**
 * Vendor css overrides.
 */
import reactDatepicker from './react-datepicker';

/**
 * Sets up any styling and themes.
 *
 * @export
 */
const GlobalStyle = createGlobalStyle`
   ${reset}
   ${fonts}
   ${theme}
   ${reactDatepicker}
`;

export default GlobalStyle;
