import React from 'react';
// import { ColorSwatch } from './ColorSwatch';
import {
   Wrapper,
   Nav,
   Title,
   ColorContainer,
   ColorBall,
 } from './styled-components-styleguide';



const styleguide = () => {
   const colors = {
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

   return (
         <Wrapper>
            <Nav />
            <Title>Testing styles</Title>
            <section>
               <h1>H1 Heading</h1>
               <h2>H2 Heading</h2>
               <h3>H3 Heading</h3>
               <h4>H4 Heading</h4>
               <h5>H5 Heading</h5>
               <p>Body</p>
               <p>Overline</p>
               <p>Caption</p>
            </section>
            <section>
                  <p>Primary Colour</p>
                  <ColorContainer>
                     <ColorBall colors={colors.thanos} />
                     <p>Thanos</p>
                     <p>{colors.thanos}</p>
                  </ColorContainer>
                  <ColorContainer>
                     <ColorBall colors={colors.thanos} />
                     <p>Thanos</p>
                     <p>{colors.thanos}</p>
                  </ColorContainer>
                  <ColorContainer>
                     <ColorBall colors={colors.thanos} />
                     <p>Thanos</p>
                     <p>{colors.thanos}</p>
                  </ColorContainer>
                  <ColorContainer>
                     <ColorBall colors={colors.thanos} />
                     <p>Thanos</p>
                     <p>{colors.thanos}</p>
                  </ColorContainer>
                  <ColorContainer>
                     <ColorBall colors={colors.thanos} />
                     <p>Thanos</p>
                     <p>{colors.thanos}</p>
                  </ColorContainer>
            </section>
         </Wrapper>

   )
}

export default styleguide;