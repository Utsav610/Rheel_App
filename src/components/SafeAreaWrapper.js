import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

export default function SafeAreaWrapper({children}) {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.white}} />
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.white}}
        forceInset={{top: 'always', bottom: 'always'}}>
        {children}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
