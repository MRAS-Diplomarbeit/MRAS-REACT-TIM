import { StyleSheet, Platform } from 'react-native';


const styles = StyleSheet.create({
    text:{
        ...Platform.select({ios: {fontFamily: "Avenir"},android: {fontFamily: "Roboto"}}),
        fontSize : 30,
        fontWeight : "bold",
        color: "black"
    },
    
    frontpageheading:{
        ...Platform.select({ios: {fontFamily: "Avenir"},android: {fontFamily: "Roboto"}}),
        fontSize : 30,
        fontWeight : "bold",
        color: "white"
    },
    subheading:{
        ...Platform.select({ios: {fontFamily: "Avenir"},android: {fontFamily: "Roboto"}}),
        fontSize: 20,
        color: "black",
        marginRight: 10,
    },

    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    titleText:{
        fontSize : 25,
        fontWeight : "bold",
        color: "teal",
        
      },
    
      loginButton:{
        color:"dodgerblue",
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      resLogButton: {
        backgroundColor: 'dodgerblue',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    resLogButtonText:{
       color: '#fff',
       fontSize: 18,
       textTransform: 'uppercase',
       fontWeight: 'bold'
    },
    textInput: {
      color: '#fff',
      fontSize: 25,
    

    }
});

export default styles;