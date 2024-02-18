import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1F1E25',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
        borderRadius: 5,

    },
    name:{
        flex: 1, 
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 16

    },
    button:{
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext:{
        color: '#fff',
        fontSize: 24,
    }
})