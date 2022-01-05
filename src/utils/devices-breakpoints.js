// https://www.w3schools.com/Css/css_rwd_mediaqueries.asp

// /* Extra small devices (phones, 600px and down) */
// // @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// // @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// // @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// // @media only screen and (min-width: 992px) {...}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// // @media only screen and (min-width: 1200px) {...}

var size = {
extraSmall: '600px',
small: '600px',
medium: '768px',
large: '992px',
extraLarge: '1200px'
};
  
export const device = {
extraSmall: `(max-width: ${size.extraSmall})`,
small: `(min-width: ${size.small})`,
medium: `(min-width: ${size.medium})`,
large: `(min-width: ${size.large})`,
extraLarge: `(min-width: ${size.extraLarge})`
};

// Ref: https://jsramblings.com/how-to-use-media-queries-with-styled-components/
