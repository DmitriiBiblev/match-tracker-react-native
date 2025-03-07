import { StyleSheet } from 'react-native';

export const styles = (width: number) => StyleSheet.create({
  alert: {
    width: width > 1250 ? 'auto' : '100%',
    backgroundColor: '#0F1318',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  icon: {
    width: 28,
    height: 28,
  },

  text: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 500,
    color: 'white',
  },
});
