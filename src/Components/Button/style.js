import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#9D6EA5',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.50,
    shadowRadius: 10,
    
    elevation: 8,
  },
  
  buttonTitle: {
    fontSize: 20
  }
});

export default styles;
