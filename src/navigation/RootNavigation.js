import { CommonActions } from '@react-navigation/native';
import { StackActions } from '@react-navigation/routers';
import * as React from 'react';

export const navigationRef = React.createRef();

/**
 * handle for navigate action
 * @param {screens name} name 
 * @param {params} params 
 */
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

/**
 * handle for push action
 * @param {screen name} name 
 * @param {params} params 
 */
export function push(name, params) {
  navigationRef.current && navigationRef.current.dispatch(StackActions.push(name, params));
}

/**
 * handle for goBack action
 */
export function goBack() {
  navigationRef.current?.goBack();
}

/**
 * handle for reset screen action
 * @param {*} screenName 
 */
export function resetScreen(screenName) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: screenName }],
    }),
  );
}

export function popToTop(){
  navigationRef.current?.popToTop()
}
