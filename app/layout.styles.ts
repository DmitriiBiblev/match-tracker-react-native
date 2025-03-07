import { StyleSheet } from 'react-native';

export const styles = (width: number) => StyleSheet.create({
  scroll: {
    backgroundColor: '#06080C',
    paddingVertical: width > 600 ? 42 : 32,
    paddingHorizontal: width > 600 ? 42 : 16,
  },

  container: {
    flexDirection: 'column',
    gap: width > 1250 ? 20 : 32,
  },

  header: {
    flexDirection: width > 1250 ? 'row' : 'column',
    alignItems: 'center',
    gap: width > 1250 ? 12 : 10,
    zIndex: 10
  },

  logo: {
    width: width > 600 ? 257 : 225,
    height: width > 600 ? 32 : 28,
    marginBottom: width > 1250 ? 0 : 4,
    resizeMode: 'contain',
  },

  filter: {
    marginLeft: width > 1250 ? 12 : 0,
    marginRight: 'auto',
  },

  list: {
    flexDirection: 'column',
    gap: 12,
  }
});
