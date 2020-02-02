import { css } from 'styled-components';
import { colors } from 'app/styling';

export default css`
   body {
      font-family: "ProximaNova", sans-serif;
      font-weight: 300;
      color: #333;
      line-height: 1.5;
   };
   a {
      color: ${colors.blue};
      text-decoration: none;
      cursor: pointer;
      &:hover {
         text-decoration: underline;
      }
   }
`;
