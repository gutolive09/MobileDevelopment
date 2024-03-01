import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
    textG: {
      fontSize: 30,
    },
    viewSafeAndroid: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    containerImg:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    txtTitulo:{
      fontSize:30,
      fontFamily: 'Arial Black'
    },
    img:{
      width: 200,
      height: 200,
    
    },
  });