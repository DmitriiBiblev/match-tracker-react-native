import { StyleSheet } from 'react-native';

export const styles = (width: number) => StyleSheet.create({
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width > 600 ? 14 : 6,
  },

  reversed: {
    flexDirection: 'row-reverse',
  },

  preview: {
    width: width > 600 ? 48 : 28,
    height: width > 600 ? 48 : 28,
  },

  text: {
    fontSize: width > 600 ? 16 : 14,
    lineHeight: width > 600 ? 19 : 17,
    fontWeight: 600,
    color: '#fff',
  },
});
