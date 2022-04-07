import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 5,
    },
    type: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 5,

    },
    time: {
        color:'#5d5d5d'
    },
});

export default styles;