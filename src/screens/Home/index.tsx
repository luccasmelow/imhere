import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function Home() {
    const [participants, setParticipants] = useState<{ name: string, tag: string }[]>([]);
    const [participantName, setParticipantName] = useState('');
    const [tagName, setTagName] = useState('');

    const currentDate = new Date();
    const formattedDate = format(currentDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR });


    function handleParticipantAdd(){
        
        const tagExists = participants.some(participant => participant.tag === tagName);
    
        if (tagExists) {
            Alert.alert('Aviso', `Essa TAG já existe ${tagName}`);
        }   
        else {
            setParticipants(prevState => [...prevState, { name: participantName, tag: tagName }]);
            setParticipantName('');
            setTagName('');
        }
 
    }

    function handleParticipantRemove(tag: string){
        Alert.alert('Remover',`Remover o participante ${tag}`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant.tag !== tag))
            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ]);
    }

    return (
        <View style={styles.container}>
            
            <Text style={{fontSize: 22, fontWeight: 'bold', color: '#fff', marginTop: 52}}>
                Nome do Evento
            </Text>

            <Text style={{fontSize: 16, fontWeight: '500', color: '#3b3b3b'}}>
                {formattedDate}
            </Text>
            
            
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder='Nome do Participante'
                    placeholderTextColor="#C6C6C6"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

            
            </View>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder='TAG'
                    placeholderTextColor="#C6C6C6"
                    onChangeText={setTagName}
                    keyboardType='numeric'
                    value={tagName}
                /> 
                    
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}  
                >
                    <Text style={styles.buttontext}>+</Text>
                </TouchableOpacity>
            
            </View>

            <Text style={{fontSize: 16, fontWeight: '600', color: '#9b9b9b', marginBottom: 20, marginTop: 32}}>
                Participantes
            </Text>

            <FlatList
                data={participants}
                keyExtractor={(item) => item.tag}
                renderItem={({ item }) => (
                    <Participant 
                        key={item.name}
                        name={item.name} 
                        tag={item.tag}
                        onRemove={() => handleParticipantRemove(item.tag)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={{fontSize: 14, fontWeight: '400', color: '#9b9b9b', textAlign: 'center'}}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de participantes
                    </Text>
                )}
            />

        
        </View>
   );
}