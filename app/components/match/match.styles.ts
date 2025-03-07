import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  match: {
    width: '100%',
    backgroundColor: '#0B0E12',
    padding: 16,
    borderRadius: 4,
    flexDirection: 'column',
    zIndex: -1
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  info: {
    marginHorizontal: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },

  score: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 600,
    color: '#fff',
  },

  dropdown: {
    overflow: "hidden",
  },

  content: {
    padding: 12,
    marginTop: 32,
    flexDirection: 'row',
    gap: 32,
  }
});
