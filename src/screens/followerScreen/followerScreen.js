import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import CardUser from '../../components/cardUser';

export default function followerScreen({navigation}){

    
    
    const reducer = useSelector((state) => state.reducer);
    
    
    
    const [data,setData] = useState(reducer.follower);

    const[followers,setFollowers] = useState(reducer.data.followers)
    
  
    console.log('repos',reducer.follower)

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 20, paddingTop:31, color:"#fff" ,alignSelf:'center' }}>{followers} Seguidores</Text>
            </View>
            <ScrollView style={styles.scrollRepo}>
                <SafeAreaView style={styles.containerList}> 
                    {data.map((item,i) =>(
                       
                        <CardUser name = {item.login} avatar = {item.avatar_url}/>
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
        height:68     

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