import chroma from 'chroma-js';

import { css } from 'styled-components';

export const darken = color => chroma(color).darker(0.5).css();

export const lighten = color => chroma(color).brighten().css();

export const alpha = (color, amount = 0.2) => chroma(color).alpha(amount).css();

export const greyBackground = css`
   background-color: #f1f2f3;
   background: linear-gradient(to right, #ebeced, #f3f4f5);
`;

export default {
   white: '#ffffff',
   gray: '#aaaaaa',
   darkGray: '#888888',
   lightGray: '#f1f1f1',
   defaultGray: '#eeeeee',
   red: '#f1692e',
   error: '#cb4829',
   yellow: '#fdc448',
   green: '#93b83f',
   blue: '#26b0c8',
   purple: '#bc4d9b',
   warning: '#ff4030',
   warningAlt: '#FFEFC0',
   warningAltOutline: '#fff',
   orange: '#ffc54a',
   default: '#eeeeee',

   // spending-groups
   'Day-to-day': '#32b1c9',
   Exceptions: '#ed7d32',
   Income: '#95ba3e',
   'Invest-save-repay': '#bc4d9b',
   Recurring: '#ffc54a',
   Uncategorised: '#aaa',
   Transfer: '#666',

   // clean groups
   dayToDay: '#32b1c9',
   exceptions: '#ed7d32',
   income: '#95ba3e',
   investSaveRepay: '#bc4d9b',
   recurring: '#ffc54a',
   uncategorised: '#aaa',
   transfer: '#666',

   alpha,
   darken,
   lighten,
};
