import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';
import { StyleSheet, View, Text,ImageBackground,ActivityIndicator,Button } from 'react-native';
import CustomButton from '../shared/Button';
import {MY_KEY} from '@env'


export default function Result({route}) {
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    useEffect(() => {
        fetchDataHandler()
      }, []); 

    const api ={
        lat: 35.7330411,
        lon: 10.5751923
    }

    const fetchDataHandler = useCallback(()=>{
        setLoading(true)
        axios({
            method:"GET",
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${api.lat}&lon=${api.lon}&appid=${MY_KEY}`
        }).then(res=>{
            setData(res.data)
        }).catch(e=> console.error(e))
          .finally(()=>setLoading(false))

    },[])

    

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.jpg')}
       resizeMode='cover' 
       style={styles.image}
       blurRadius={5}
       >
        <View style={styles.refreshButton}>
            <CustomButton text='refresh' onPress={fetchDataHandler} > </CustomButton>

        </View>
        {loading && (
            <View>
                <ActivityIndicator size={'large'} color="#000"></ActivityIndicator>
            </View>
        )}

       {/*we make these conditions to avoid desplaying the undefined */}
        {(data && data.name && data.main && data.weather) && (
            <View style={styles.infoView} >
                <Text style={styles.text} >
                    Hi {route.params.name}
                </Text>
                <Text style={styles.text} >
                    {`${data?.name} ${data?.sys?.country}`}
                </Text>
                <Text style={styles.text}>
                    {new Date().toLocaleDateString()}
                </Text>
                <Text style={styles.text} >
                   {`${data?.main?.humidity}`}%
                </Text>
                <Text style={styles.text} >
                   {`${data?.main?.temp}`}
                </Text>
               
                <Text style={styles.text} >
                    {`${data['weather'][0].description}`}
                </Text>  
            </View>
        )

        }

       </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
      flex: 1,
      
  },
  infoView:{
      alignItems: 'center'
  },
  text:{
      color: '#fff',
      fontSize: 40,
      fontWeight: 'bold',
      paddingTop: 10
  },
  dateText:{
      color: '#fff',
      fontSize: 22,
      marginVertical: 10,
  },
  refreshButton:{
      marginTop: '40%',
      marginBottom: 10,
      alignItems: 'center'
  }

});