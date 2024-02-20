import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 24,
        
    },
    input:{
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        paddingHorizontal: 16,
        fontSize: 16
    },
    button:{
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8
    },
    buttontext:{
        color: '#fff',
        fontSize: 22,
    }
  });
  