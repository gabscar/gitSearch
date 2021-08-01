
import React, { useState,useEffect} from 'react';
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux';
import { ReducerActions } from '../../store/reducers/reducer';
import AsyncStorage from '@react-native-community/async-storage';
import {BorderlessButton } from 'react-native-gesture-handler';
import {Text, View,StyleSheet } from 'react-native';

import {api} from '../../services/api'
import UserHome from '../../components/userHome';


export default function userRedirectScreen({navigation}){

    const [data,setData]=useState([]);
    const dispatch = useDispatch();

    async function SaveUser(){
        try{
            let user =data.login
            const response2 = await api.get(`/${user}/repos`)
                
            dispatch(ReducerActions.changeRepo(response2.data))
            const response3 = await api.get(`/${user}/followers`)
            dispatch(ReducerActions.changeFollower(response3.data)) 

            const response4 = await api.get(`/${user}/following`)
            dispatch(ReducerActions.changeFollowing(response4.data)) 
            
            dispatch(ReducerActions.changeUser(user,data))
            navigation.navigate('Home')
        }catch{
            console.log('erro ao salvar usuário')

        }

    }
    function handleGoBack() {
        //navigation.goBack();
        navigation.navigate('Home')
    }
    async function getUser(){
        try{
            let dataRecive = await AsyncStorage.getItem("HomeRedirectData");
            setData(JSON.parse(dataRecive));
           console.log(data)
        }catch{

        }

    }
    const [load,setLoad] = useState(true)

    useEffect(()=>{
        
         navigation.addListener('focus', ()=>{setLoad(!load)})
         getUser()
    },[load, navigation])
  
    return(
            <UserHome        
                user = {data.login}       
                avatar={data.avatar_url}
                name = {data.name}
                email={data.email}
                location={data.location}
                followers={data.followers}
                following={data.following}
                repos={data.public_repos}
                bio = {data.bio}
                button = {SaveUser}
                chield={
                    <View style={styles.heatherContainer}>
                        <BorderlessButton 
                            onPress={handleGoBack}
                            style = {{marginTop:25 }}
                        >
                        <Icon name = 'arrow-left' type='feather' color="#FFF" size={25} style={{marginLeft:17.5}} />
                        </BorderlessButton>
                            <Text style={styles.textName}>#{data.login}</Text>
                            <BorderlessButton 
                                onPress={SaveUser}
                                style = {styles.button}
                            >
                                <Text style={styles.textButton}>Salvar</Text>
                                <Icon name = 'log-in' type='feather' color='#5CBC29' size={19} style={{marginLeft:8,marginRight:11.4}} />
                            </BorderlessButton>
                        </View>
                }
            
            />
        )
    
}



const styles = StyleSheet.create({
    heatherContainer:{
        flexDirection:'row',
        paddingBottom: 20,
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    textName:{ 
        fontSize: 20,
        marginTop:23, 
        color:"#fff",
        width:112,
        marginLeft:96
    },
    button:{
        marginTop:25,
        flexDirection:'row',
        width:59,
        height:20,
        marginLeft:38,
        alignItems:'flex-start' 
    },
    textButton:{ 
        fontSize: 17, 
        paddingBottom: 20, 
        color:"#fff"
    }

})