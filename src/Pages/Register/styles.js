import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
  backImage: {
    width: '100%',
    height: 290,
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'GochiHand_400Regular',
    fontSize: 55,
    width: 155,
    marginLeft: 40,
    marginTop: 40
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'    
  }
});

export default styles;
