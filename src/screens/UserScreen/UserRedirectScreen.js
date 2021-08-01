
import React, {Component, useState,useEffect} from 'react';





import {api} from '../../services/api'
import UserHome from '../../components/userHome';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerActions } from '../../store/reducers/reducer';
import AsyncStorage from '@react-native-community/async-storage';

export default function userRedirectScreen({navigation}){

    const [data,setData]=useState([]);
    const dispatch = useDispatch();

    async function buttonPress(){
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

        }

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
                nameIcon ='log-in'
                colorIcon='#5CBC29'
                buttonLabel='Salvar'
                avatar={data.avatar_url}
                name = {data.name}
                email={data.email}
                location={data.location}
                followers={data.followers}
                following={data.following}
                repos={data.public_repos}
                bio = {data.bio}
                button = {buttonPress}
            
            />
        )
    
}
