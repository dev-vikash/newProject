import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerRow: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'center',
    paddingVertical: 20,
    
  },
  footerCross: {
      fontSize: 80,
      color: 'red',
      bottom: 10,
      marginHorizontal: 10,
  },
  footerStar: {
    fontSize: 40,
    marginHorizontal: 10,
    color: '#54b6f7',
    bottom: 10,
  },
  footerHeart: {
    fontSize: 60,
    marginHorizontal: 15,
    color: '#86e8c5', 
  }

});
export default styles;
