import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScrollView,BorderlessButton } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements'
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

   async function buttonPress(){
        dispatch(ReducerActions.logout())
        console.log(reducer.user)
       navigation.navigate('search')
    }

    return(
        
       
        <UserHome        
            user = {user}       
            
            avatar={avatar}
            name = {name}
            email={email}
            location={location}
            followers={followers}
            following={following}
            repos={repos}
            bio = {bio}
            button = {buttonPress}
            chield={
                <View style={styles.headerContainer}>
                        <Text style={styles.headerName}>#{user}</Text>
                        <View>
                        <BorderlessButton 
                            onPress={buttonPress}
                            style = {styles.button}
                        >
                            <Text style={styles.textButton}>Sair</Text>
                            <Icon name = 'log-out' type='feather' color='#CF3434' size={19} style={styles.icon} />
                        </BorderlessButton>
                        </View>
                    </View>
            }
        
        />
      
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        paddingBottom: 20,
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    headerName:{ 
        fontSize: 20,
        marginTop:23, 
        color:"#fff",
        width:112,
        marginLeft:11,
        marginRight:164
    },
    button:{
        marginTop:25,
        flexDirection:'row',
        width:59,
        height:20,
        alignItems:'flex-start', 
        justifyContent:'flex-end' 
    },
    textButton:{ 
        fontSize: 17, 
        paddingBottom: 20, 
        color:"#fff",
        marginLeft:10
    },
    icon:{
        marginLeft:12,
        marginRight:29
    }
})