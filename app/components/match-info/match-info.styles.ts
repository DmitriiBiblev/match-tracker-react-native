import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  info: {
    width: '100%',
    backgroundColor: '#101318',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 4,
    flexDirection: 'row',
    gap: 8
  },

  wrapper: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
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
