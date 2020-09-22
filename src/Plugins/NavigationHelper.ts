import React from 'react';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

const NavigationHelper = {
  navigate(name: string, params?: object) {
    if (isReadyRef.current && navigationRef.current) {
      // Perform navigation if the app has mounted
      // @ts-ignore
      navigationRef.current.navigate(name, params);
    } else {
      //TODO MAYBE IT CAN ADD SOME CODES.
    }
  },
  back(): void {
    navigationRef.current.goBack();
  },
};

export default NavigationHelper;
