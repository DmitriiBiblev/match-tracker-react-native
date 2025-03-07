import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#EB0237',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  text: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 600,
    color: '#fff',
  },

  disabledText: {
    color: '#787878',
  },

  icon: {
    width: 26,
    height: 26,
  },

  pressed: {
    backgroundColor: '#A01131',
  },

  disabled: {
    backgroundColor: '#701328',
  }
});
