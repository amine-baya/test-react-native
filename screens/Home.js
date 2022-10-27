import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';
import { StyleSheet, View, Text,TextInput } from 'react-native';
import CustomButton from '../shared/Button';


export default function Home() {
    const [loading,setLoading] = useState(false)
    const [name,setName] = useState('')
    const navigation = useNavigation()
    

  return (
    <View style={styles.container}>
                <Text style={styles.text}>Hi {name} </Text>
                <TextInput style={styles.input} placeholder='please enter your name' onChangeText={(val)=>setName(val)}   />
                <CustomButton onPress={()=>navigation.navigate('Result',{name})} text='Navigate'></CustomButton>

                    
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9F9F9'
    },
    input:{
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 15,
        padding: 8,
        margin: 10,
        width: '80%'
        
    },
    text:{
        color: '#D3D3D3',
        fontSize: 40,
        fontWeight: 'bold',
        paddingTop: 10,
        margin: 10
    },
    navigateButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: 300
    }
  
  });



