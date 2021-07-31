

import React, { useState, useEffect } from 'react'
import { Alert, Modal, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Logo from '../../components/Logo';
import {api, loadRepo} from '../../services/api'
import  {ReducerActions}  from '../../store/reducers/reducer';
import {useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

export default function Search({navigation}){

    const [user, setuser] = useState("");
    const [data, setData] = useState([]);
    
	const dispatch = useDispatch();
    const [errorMessage ,setError]=useState('');

    
    

    async function login(){       
       try{ 
        const response = await api.get(`/${user}`)

        if (response.data){
            const response2 = await api.get(`/${user}/repos`)
            
            dispatch(ReducerActions.changeRepo(response2.data))
            const response3 = await api.get(`/${user}/followers`)
            dispatch(ReducerActions.changeFollower(response3.data)) 

            const response4 = await api.get(`/${user}/following`)
            dispatch(ReducerActions.changeFollowing(response4.data)) 
            
            dispatch(ReducerActions.changeUser(user,response.data))
            navigation.navigate('Home')
        }
        
        }catch{
            if(user){
                setError('O usuário não existe')
             }else
                setError('Campo Óbrigatório')
        }

        /* setTimeout(() => {
            // Delay this action by one second
            navigation.navigate('Home')
          }, 1000)   */  
        
        /* .then(function (response) {
              console.log(response);
              
              console.log(data)        
              setTimeout(() => {
                // Delay this action by one second
                setData(response.data);
                dispatch(ReducerActions.changeUser(user,data))
              }, 5000)      
              



              setError('')
              navigation.navigate('Home')
              
          })
          .catch(function (error) {
             // Alert.alert('Dados Incorretos', 'Email ou senha errados. Por favor tente novamente.');
             if(user){
                setError('O usuário não existe')
             }else
                setError('Campo Óbrigatório')
          }); */
        
          
            
          
        
        //dispatch(ReducerActions.changeUser(user))
        
      //  console.log(navigation.navigate)

        
     // {errorText ? <Text style={styles.error}>usuário inexistente</Text> : null}
        
    }

    return(
        <View style={styles.container}>
            <Logo />
            <Input
                inputStyle={styles.Input}
                containerStyle={styles.InputContainer}
                labelStyle={styles.InputLabel}
                placeholder='Usuário'
                placeholderTextColor='#535353'               
                onChangeText={user => setuser(user)}
                defaultValue={user}
                errorStyle={{ color: 'red' }}
                errorMessage={errorMessage}
            />
            <View style={styles.ButtonContainer}>
                <Button
                    buttonStyle={styles.Button}
                    title="Entrar"
                    onPress={login}
                    icon={
                        
                        <Ionicons
                            name='ios-arrow-forward'
                            size={24}
                            color='#000000'
                        />
                    }
                    iconRight ='true'
                />
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    InputContainer: {
        width: '80%',
    },
    Button: {
        backgroundColor: '#ff901d',
    },
    ButtonContainer: {
        paddingTop: 20,
        width: '80%',
    },
    InputLabel: {
        color: '#030202',
        fontWeight: 'bold',

    },
    Input: {
        color: '#ff901d'
    },
    error: {
        fontSize: 14,
        color: '#ff901d',
        paddingHorizontal: 4,
        paddingTop: 4,
    },
});

