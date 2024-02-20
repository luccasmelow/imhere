import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from './styles';

type Props = {
    name: string;
    tag: string;
    onRemove: () => void;
}

export function Participant({name, onRemove, tag}: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.name}> 
                {tag} - {name}
            </Text>

            <TouchableOpacity
                style={styles.button} 
                onPress={onRemove} 
            >
                <Text style={styles.buttontext}>-</Text>
            </TouchableOpacity>
            
        </View>
    )
    

}