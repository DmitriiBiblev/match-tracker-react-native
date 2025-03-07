import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#06080C',
    padding: 42,
  },

  container: {
    flexDirection: 'column',
    gap: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    zIndex: 10
  },

  logo: {
    width: 257,
    height: 32,
    resizeMode: 'contain',
  },

  filter: {
    marginLeft: 12,
    marginRight: 'auto',
  },

  list: {
    flexDirection: 'column',
    gap: 12,
  }
});
