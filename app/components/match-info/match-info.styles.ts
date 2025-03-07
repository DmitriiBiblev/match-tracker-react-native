import { StyleSheet } from 'react-native';

export const styles = (width: number) => StyleSheet.create({
  info: {
    width: '100%',
    backgroundColor: '#101318',
    paddingVertical: 14,
    paddingHorizontal: width > 600 ? 24 : 12,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
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

  divider: {
    width: 1,
    height: width > 600 ? 16 : 13,
    backgroundColor: '#141A21',
  }
});
