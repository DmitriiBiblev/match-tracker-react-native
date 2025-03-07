import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  filter: {
    width: '100%',
    zIndex: 10,
  },

  select: {
    backgroundColor: '#0B0E12',
    paddingVertical: 15,
    paddingRight: 18,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: '#0B0E12',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12
  },

  selectPressed: {
    backgroundColor: '#0B0E12',
    borderColor: '#171D25',
  },

  value: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
    color: '#B4B5B6',
  },

  arrow: {
    width: 20,
    height: 20,
  },

  dropdown: {
    backgroundColor: '#0F1318',
    paddingVertical: 6,
    borderRadius: 4,
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
  },

  option: {
    backgroundColor: '#0F1318',
    padding: 12,
  },

  optionPressed: {
    backgroundColor: '#0D1115',
  },

  optionText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
    color: '#B4B5B6',
  },

  optionTextPressed: {
    color: '#fff',
  }
});
