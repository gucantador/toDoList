
import { StyleSheet } from 'react-native';




export const styles = StyleSheet.create({
    homePage: {
        flex:1,
    },
    containerTop: {
        height: "20%",
        width: '100%',
        backgroundColor: '#0D0D0D',
        padding: 30
    },
    to_logo: {
        color: "#4EA8DE",
        fontSize: 40
    },
    do_logo: {
        color: "#5E60CE",
        fontSize: 40,
        fontFamily: 'Inter-Regular'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logoImage: {
        width: 33, 
        height: 33,
        resizeMode: 'contain',
        marginRight: 10,
        marginTop: 5
      },
      input: {
        flex: 1,
        height: 56,
        backgroundColor: '#333333',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 15,
        marginRight: 5,
        borderWidth: 0.5,
        borderColor: '#5E60CE'
        
    },
    formBackground: {
        backgroundColor: '#0D0D0D',
        width: '100%', // Ocupa toda a largura do contêiner principal
        height: 57/2, // Ocupa toda a altura do contêiner principal
    },
      form: {
        height: "10%",
        position: "absolute",
        width: '90%',
        flexDirection: 'row',
        justifyContent: "center", 
        alignItems: "center",
        marginLeft: "5%",
        marginTop: "30%"
        },
        buttonImage: {
        width: 57, 
        height: 57,
        resizeMode: 'contain',
        },
        containerBottom: {
            flex: 1,
            backgroundColor: "#1F1E25", 
            width: '100%', // Ocupa toda a largura do contêiner principal
            height: "100%",
            position: 'relative',
            
        },
        tasksMeasures:{
            flex: 1,
            flexDirection: 'row',
            marginTop: "13%",
            width: "50%",
            backgroundColor: "#fff"
            
        },
        created: {
            flexDirection: 'row',
            marginRight: '50%',
            marginLeft: "5%"
        },
        textCreated: {
            color: "#4EA8DE",
            marginRight: 7
        },
        howManyCreated: {
            color: "#fff"
        },
        concluded: {
            flexDirection: 'row'
        },
        textConcluded: {
            color: "#5E60CE",
            marginRight: 7
        },
        howManyConclude: {
            color: "#fff"
        },

        
    });


