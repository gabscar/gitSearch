import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import { ScrollView,BorderlessButton } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { loadRepo } from '../../services/api';

import { ReducerActions } from '../../store/reducers/reducer';


import UserHome from '../../components/userHome';



export default function userScreen({navigation}){

    const [min, setMin] = useState();
    const dispatch = useDispatch();

    const reducer = useSelector((state) => state.reducer);
    const [user, setUser] = useState(reducer.user);
    const [name, setName] = useState(reducer.data.name);
    const [avatar, setAvatar] = useState(reducer.data.avatar_url);
    const [bio, setBio] = useState(reducer.data.bio);
    const [email, setEmail] = useState(reducer.data.email);
    const [following, setFollowing] = useState(reducer.data.following);
    const [followers, setFollowers] = useState(reducer.data.followers);
    const [repos, setRepos] = useState(reducer.data.public_repos);
    const [location, setLocation] = useState(reducer.data.location);
    console.log(reducer.data)

    const [load,setLoad] = useState(true)

    useEffect(()=>{
        
        navigation.addListener('focus', ()=>{setLoad(!load)})
       // getUser()
       setUser(reducer.user);
       setName(reducer.data.name);
       setAvatar(reducer.data.avatar_url)
       setBio(reducer.data.bio)
       setEmail(reducer.data.email)
       setFollowers(reducer.data.followers)
       setFollowing(reducer.data.following)
       setRepos(reducer.data.public_repos)
       setLocation(reducer.data.location)
    },[load, navigation])

    function buttonPress(){
        dispatch(ReducerActions.logout())
        console.log(reducer.user)
       navigation.navigate('search')
    }

    return(
        
       
        <UserHome        
            user = {user}       
            nameIcon ='log-out'
            buttonLabel='Sair'
            colorIcon='#CF3434'
            avatar={avatar}
            name = {name}
            email={email}
            location={location}
            followers={followers}
            following={following}
            repos={repos}
            bio = {bio}
            button = {buttonPress}
        
        />
      
    )
}

