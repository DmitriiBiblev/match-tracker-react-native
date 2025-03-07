import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  reversed: {
    flexDirection: 'row-reverse',
  },

  preview: {
    width: 48,
    height: 48,
  },

  text: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 600,
    color: '#fff',
  },
});
