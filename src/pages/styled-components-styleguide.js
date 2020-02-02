import styled from 'styled-components';
import { colors } from '../styling';



export const Wrapper = styled.div`
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
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);

`;

export const Title = styled.div`
   /* font-family: "ProximaNova"; */
   font-family: "CircularStd";
   font-size: 50px;
   text-align: center;
   padding: 90px 0 30px 0;
   margin: 0;
   line-height: 26px;
   letter-spacing: -1px;
   color: #333;
`;

