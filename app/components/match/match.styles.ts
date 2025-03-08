import { StyleSheet } from 'react-native';

export const styles = (width: number) => StyleSheet.create({
  match: {
    width: '100%',
    backgroundColor: '#0B0E12',
    padding: width > 600 ? 16 : 8,
    borderRadius: 4,
    flexDirection: 'column',
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
    flexDirection: 'row',
    gap: 4,
  },

  scoreText: {
    fontSize: width > 600 ? 20 : 14,
    lineHeight: width > 600 ? 24 : 17,
    fontWeight: 600,
    color: '#fff',
  },

  dropdown: {
    marginHorizontal: width > 600 ? 0 : -2.5,
    overflow: "hidden",
  },

  content: {
    padding: width > 600 ? 12 : 0,
    marginTop: width > 600 ? 32 : 16,
    flexDirection: width > 1250 ? 'row' : 'column',
    gap: width > 1250 ? 32 : 8,
  },

  vs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },

  divider: {
    height: 1,
    backgroundColor: '#13181F',
    flex: 1,
  },

  vsText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 500,
    color: '#313A47',
  },

  arrow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
