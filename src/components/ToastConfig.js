import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';
import {fontSize, fonts} from '../constants/fonts';
import {colors} from '../constants/colors';
import {ph, wp} from '../utils/ResponsiveScreen';
import {colors} from '../constants/colors';

export const toastConfig = {
  /*
        Overwrite 'success' type,
        by modifying the existing `BaseToast` component
      */
  success: props => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: colors.success,
        borderLeftColor: colors.success,
        height: 'auto',
      }}
      contentContainerStyle={{paddingHorizontal: ph(8), paddingVertical: ph(8)}}
      text1Style={{
        fontSize: fontSize.FS_14,
        fontFamily: fonts.MEDIUM,
        color: colors.white,
      }}
      text2Style={{
        fontSize: fontSize.FS_12,
        fontFamily: fonts.REGULAR,
        color: colors.white,
      }}
      text2NumberOfLines={2}
      text1NumberOfLines={2}
    />
  ),
  /*
        Overwrite 'error' type,
        by modifying the existing `ErrorToast` component
      */
  error: props => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: colors.error,
        borderLeftColor: colors.error,
        height: 'auto',
      }}
      contentContainerStyle={{paddingHorizontal: ph(8), paddingVertical: ph(8)}}
      text1Style={{
        fontSize: fontSize.FS_14,
        fontFamily: fonts.MEDIUM,
        color: colors.white,
      }}
      text2Style={{
        fontSize: fontSize.FS_12,
        fontFamily: fonts.REGULAR,
        color: colors.white,
      }}
      text2NumberOfLines={2}
      text1NumberOfLines={2}
    />
  ),
  info: props => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: colors.orange,
        borderLeftColor: colors.orange,
        height: 'auto',
      }}
      contentContainerStyle={{paddingHorizontal: ph(8), paddingVertical: ph(8)}}
      text1Style={{
        fontSize: fontSize.FS_14,
        fontFamily: fonts.MEDIUM,
        color: colors.white,
      }}
      text2Style={{
        fontSize: fontSize.FS_12,
        fontFamily: fonts.REGULAR,
        color: colors.white,
      }}
      text2NumberOfLines={2}
      text1NumberOfLines={2}
    />
  ),
};
