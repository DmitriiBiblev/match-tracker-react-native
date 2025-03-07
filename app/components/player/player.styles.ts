import { StyleSheet, ViewStyle } from 'react-native';

const wrapper: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
};

export const styles = (width: number) => StyleSheet.create({
  player: {
    ...wrapper,
    backgroundColor: '#101318',
    paddingVertical: width > 1700 ? 8 : 7,
    paddingHorizontal: width > 1700 ? 24 : 12,
    flexDirection: width > 1700 || width <= 1250 && width > 900 ? 'row' : 'column',
    borderRadius: 4,
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  wrapper,

  avatar: {
    width: width > 600 ? 36 : 32,
    height: width > 600 ? 36 : 32,
  },

  value: {
    fontSize: width > 600 ? 16 : 14,
    lineHeight: width > 600 ? 24 : 21,
    fontWeight: 600,
    color: '#fff',
  },

  label: {
    fontSize: width > 600 ? 14 : 12,
    lineHeight: width > 600 ? 21 : 18,
    fontWeight: 500,
    color: '#FAFAFA66',
  },
});
