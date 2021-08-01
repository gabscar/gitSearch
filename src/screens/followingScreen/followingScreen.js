import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import { ScrollView,BorderlessButton } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements'
import CardUser from '../../components/cardUser';
import {api} from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage';
export default function followingScreen({navigation}){

    
    
    const reducer = useSelector((state) => state.reducer);
    
    
    
    const [data,setData] = useState(reducer.following);

    const[following,setFollowing] = useState(reducer.data.following)
    function handleGoBack() {
        //navigation.goBack();
        navigation.navigate('Home')
    }
    const [load,setLoad] = useState(true)

    useEffect(()=>{
        
         navigation.addListener('focus', ()=>{setLoad(!load)})
        setFollowing(reducer.data.following)
        setData(reducer.following)
    },[load, navigation])

    async function requestUser(user){
        try{ 
            console.log(user)
            const response = await api.get(`/${user}`)
            await AsyncStorage.setItem('HomeRedirectData',JSON.stringify(response.data))
            console.log(response.data)
            navigation.navigate('HomeRedirect')
            
        }catch{
            console.log('err')
        }
    }
  
    console.log('repos',reducer.following)

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BorderlessButton 
                    onPress={handleGoBack}
                    style = {{marginTop:25 }}
                >
                <Icon name = 'arrow-left' type='feather' color="#FFF" size={25} style={{marginLeft:17.5}} />
                </BorderlessButton>
                <Text style={{ fontSize: 17, paddingTop:31, color:"#fff" ,alignSelf:'flex-start',marginLeft:90 }}> Seguindo {following} </Text>
            </View>
            <ScrollView style={styles.scrollRepo}>
                <SafeAreaView style={styles.containerList}> 
                    {data.map((item,i) =>(
                       
                        <CardUser name = {item.login} avatar = {item.avatar_url} requestUser={requestUser}/>
                    ))
                    
                    
                    
                    }
                    

                </SafeAreaView>
            </ScrollView> 
         
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,         
        backgroundColor:'#292929'
    },
    header:{
        width:'100%',
        backgroundColor:'#1F1F1F',
        alignItems:'center',  
        height:68,
        flexDirection:'row'        

    },
    nameContainer:{
        paddingTop:103,
        alignItems:'flex-start',
        marginLeft: 24
       
    },
    miniTab:{
        width:120,
        height:60,       
        alignContent:'center',
        alignItems:'center',
        marginTop:12,
        marginBottom:19
        
    } ,
    
    containerList: {
        flex: 1,
        backgroundColor:'#292929',
        marginTop:41
    },
    scrollRepo: {  
        flex:1,
        height:'100%',
        backgroundColor:'#292929',
        marginBottom:70,
    },
  });