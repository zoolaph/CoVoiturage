import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   
    container: {
        padding: 10,
        height: '100%'
    },
    textInput: {
        padding: 10,
        backgroundColor:'#eee',
        marginVertical: 5,
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height : '100%',

    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding : 5,
        borderRadius: 50,
        marginRight: 12,

    },
    locationText: {

    },
    circle: {
        width: 8,
        height: 8,
        backgroundColor: 'black',
        position: 'absolute',
        top: 31,
        left: 15,
        borderRadius: 5,
        marginLeft: -1.5,
    },

    square: {
        width: 8,
        height: 8,
        backgroundColor: 'black',
        position: 'absolute',
        top: 90,
        left: 15,
        marginLeft: -1.5,
    },
    line: {
        width: 1.5,
        height: 60,
        backgroundColor: '#6b6b6b',
        position: 'absolute',
        top: 38,
        left: 15,
        marginLeft: 1.5,            
    },
});

export default styles;