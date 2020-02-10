import styled, { css } from 'styled-components';
import { colors } from '../styling';



export const Wrapper = styled.div`
font-family: "ProximaNova";
   flex-direction: column;
   justify-content: start;
   align-items: center;
   position: relative;
   z-index: 0;
   width: 100%;
`;

export const Nav = styled.div`
    background-color: ${colors.thanos};
    width:100%;
    height: 50px;
    pointer-events: auto;
    position: relative;

`;

export const Title = styled.div`
   font-family: "ProximaNova";
   /* font-family: "CircularStd"; */
   font-size: 50px;
   text-align: left;
   padding: 90px 0 30px 0;
   margin: 0;
   line-height: 26px;
   letter-spacing: -1px;
   color: #333;
`;

export const ColorContainer = styled.div``;

export const ColorBall = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 100px;
   background: ${props => props.colors};
`;

export default {
   // new colors 
   thanos: '#434b6b',
   cheshire: '#6a678D',
   bulbasaur: '#27C5B8',
   gandalf: '#A7B2BC',
   stormTrooper: '#F1F2F3',

   /* Sedconday Colors */

   black: '#000',
   white: '#fff',
   darthVader: '#606060',

   megaman: '#24B4C7',
   pikachu: '#FFD74E',
   dumbledore: '#7A71EF',
   kermit: '#893E53',
   garfield: '#FD924B',
   princessPeach: '#FD7A7C',

   /* Util colors  */

   wingardiumLeviosa: '#F1F5FB',
   alohomora: '#FFF2F2',
   expelliarmus: '#E9F9F8',
   lumos: '#FFF9EE',

};