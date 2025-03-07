import { StyleSheet, ViewStyle } from 'react-native';

const wrapper: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
};

export const styles = StyleSheet.create({
  player: {
    ...wrapper,
    backgroundColor: '#101318',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  wrapper,

  avatar: {
    width: 36,
    height: 36,
  },

  value: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
    color: '#fff',
  },

  label: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 500,
    color: '#FAFAFA66',
  },
});
