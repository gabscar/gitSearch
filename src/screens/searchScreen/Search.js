

import React, { useState, useEffect } from 'react'
import {StyleSheet,View,TextInput,Text } from 'react-native';
import { Button} from 'react-native-elements';
import { Icon } from 'react-native-elements'

import Logo from '../../components/Logo';
import {api} from '../../services/api'
import  {ReducerActions}  from '../../store/reducers/reducer';
import {useDispatch } from 'react-redux';


export default function Search({navigation}){

    const [user, setUser] = useState("");
    //const [data, setData] = useState([]);
    
	const dispatch = useDispatch();
    const [errorMessage ,setError]=useState('');


    const [color,setColor]= useState('none')

    const [load,setLoad] = useState(true)

    useEffect(()=>{
        navigation.addListener('focus', ()=>{setLoad(!load)})
        setUser('')
    },[load, navigation])

    

    async function login(){       
       try{ 
        const response = await api.get(`/${user}`)

        if (response.data){
            dispatch(ReducerActions.changeUser(user,response.data))
            const response2 = await api.get(`/${user}/repos`)
            
            dispatch(ReducerActions.changeRepo(response2.data))
            const response3 = await api.get(`/${user}/followers`)
            dispatch(ReducerActions.changeFollower(response3.data)) 

            const response4 = await api.get(`/${user}/following`)
            dispatch(ReducerActions.changeFollowing(response4.data)) 
            
           
            navigation.navigate('Home')
        }
        
        }catch{
            if(user){
                setError('*O usuário não existe')
                setColor("red")
             }else{
                setError('*Campo Óbrigatório')
                setColor('red')
            }
        }
        
    }
   

    return(
        <View style={styles.container}>
            <Logo />
            <TextInput
                style={styles.Input}
                placeholder='Usuário'
                autoCapitalize='none'
                defaultValue={user}
                borderBottomColor= {color}
                borderTopColor= {color}
                borderBottomWidth={2}
                borderTopWidth={2} 
                onChangeText ={user=>setUser(user)}
                
            />{errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <View style={styles.ButtonContainer}>
                <Button
                    buttonStyle={styles.Button}
                    title="Entrar"
                    titleStyle={styles.titleButton}
                    onPress={login}
                    icon={
                        <Icon 
                            name = 'arrow-right' 
                            type='feather' 
                            color="#000000" 
                            size={20}  />
                       
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
    Button: {
        backgroundColor: '#FFCE00',
        borderRadius:12,
        height: 56,
        width: 339,
        fontSize:20,
        color:'black'
    },
    ButtonContainer: {
        paddingTop: 19,
    },    
    Input: {
        width: 339,
        height:56,
        borderRadius:12,
        backgroundColor:'white',
        paddingLeft:12,
    },
    error: {
        fontSize: 14,
        color: 'red',
        paddingHorizontal: 4,
        paddingTop: 4,
    },
    titleButton:{
        color:'black',
        fontSize:20,
        marginRight:12,
        fontWeight:'bold'
    }
});

