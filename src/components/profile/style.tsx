import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imageView: {
    height: 220,
  },
  stretch: {
    height: 220,
    width: '100%',
    resizeMode: 'stretch',
  },
  nameContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  name: {
    color: '#565454',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 15,
  },
  age: {
    marginLeft: 10,
    color: '#565454',
    fontSize: 25,
  },
  uniContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  degree: {
    marginLeft: 15,
    color: '#565454',
    fontSize: 20,
  },
  university: {
    marginLeft: 15,
    color: '#565454',
    fontSize: 15,
  },
  locationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  addressContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 10,
  },
  message: {
    color: '#565454',
    fontSize: 14,
  },
  messageContainer: {
    paddingLeft: 20,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 2,
    paddingVertical: 15,
  },
  photosHeaderText: {
    fontWeight: 'bold',
    color: '#565454',
    fontSize: 20,
  },
  instaContainer: {
    padding: 20,
    flexDirection: 'row',
    width: '100%',
  },
  imageRow: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    borderRadius: 10,
    height: 120,
    width: '31%',
    margin: '1%',
  },
  flexRowDot: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    top: 23,
  },
  dotFirst: {
    fontSize: 25,
    color: '#f27182',
    marginRight: 15,
  },
  dotSec: {
    fontSize: 25,
    color: '#f2f2f2',
  },
});
export default styles;
