import { StyleSheet } from 'react-native';

export const styles = (width: number) => StyleSheet.create({
  status: {
    minWidth: width > 600 ? 92 : 70,
    paddingVertical: width > 600 ? 6 : 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },

  text: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
  },

  green: {
    backgroundColor: '#43AD28',
  },

  red: {
    backgroundColor: '#EB0237',
  },

  orange: {
    backgroundColor: '#EB6402',
  }
});
