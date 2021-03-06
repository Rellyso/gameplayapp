import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center'
  },
  iconWrapper: {
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },
  icon: {
    width: 24,
    height: 18,
  }
})