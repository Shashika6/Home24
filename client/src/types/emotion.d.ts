import '@emotion/react';

// To fix ts error when trying to use props.colors
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      buttonPrimary: string;
      buttonHover: string;
      border?: string;
    };
  }
}
