import styled from 'styled-components';
import { device } from '../../../utils/devices-breakpoints';

export const Container = styled.div`
display: flex;
width: 100%;
box-sizing: border-box;
font-size: 30px;
text-align: center;
font-weight: lighter;
padding: 40px 0px 40px 0px;
`

export const ContainerCentered = styled.div`
display: flex;
flex-direction: column;
width: 70%;
margin: 0 auto;

@media ${device.large} {
flex-direction: row;
}
`

/* Style React Elements in 
'Associated material' component */

//   /* associated material containers */
//   .AssociatedMaterial_container_100 {
//    display: flex;
//    width: 100%;
//    box-sizing: border-box;
//    font-size: 30px;
//    text-align: center;
//    font-family: ff-meta-correspondence-web-p, sans-serif;
//    font-weight: lighter;
//     padding: 40px 0px 40px 0px;
//   }

//   .AssociatedMaterial_container_centered {
//    display: flex;
//    flex-direction: column;
//    width: 70%;
//    margin: 0 auto;
//   }

//   .box_example {
//     width: 90%;
//   }

//   /* Adaptative Web Desing  *******/
//   /* Tablet  */
//   @media screen and (min-width: 700px) {
//    .AssociatedMaterial_container_centered {
//        flex-direction: row;
//        width: 60%;
//    }

// }

//    /* Desktop  */
//    @media screen and (min-width: 992px) {


//   }