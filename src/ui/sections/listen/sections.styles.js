import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;
box-sizing: border-box;
font-size: 0.8rem;
text-align: center;
// font-weight: lighter;
font-family: ff-meta-correspondence-web-p, sans-serif;
padding-top: 10px;

@media ${device.extraLarge} {
padding-top: 35px;
}
`

export const Section = styled.div`
border-left: solid;
border-width: thin;
display: flex;
justify-content: center;
align-items: center;

@media ${device.extraSmall} {
font-size: 0.6rem;
}

@media ${device.large} {
height: 40px;
font-size: 0.9rem;
}

&.intro {
   // background: green; // <Thing> tagged with an additional CSS class ".something"
   width: 10%;
}

&.a1 {
   // background: blue; // <Thing> tagged with an additional CSS class ".something"
   width: 20%;
}

&.b1 {
   // background: red; // <Thing> tagged with an additional CSS class ".something"
   width: 10%;
}

&.inter1 {
   width: 10%;
   // background: green;
}

&.a2 {
   width: 5%;
   // background: blue;
}

&.b2 {
   width: 10%;
   // background: red;
}

&.inter2 {
   width: 5%;
   // background: green;
}

&.b3 {
   width: 5%;
   // background: red;
}

&.a3 {
   width: 10%;
   // background: blue;
}


&.b4 {
   width: 10%;
   // background: red;
}


&.final {
   width: 20%;
   // background: green;
}

;


@media ${device.large} {
// background-color: red;
}

@media ${device.extraLarge} {
width: 80%;
flex-direction: row;
}
`
const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`