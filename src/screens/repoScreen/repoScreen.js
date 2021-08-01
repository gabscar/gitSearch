import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import {loadRepo} from "../../services/api"
import CardRepo from '../../components/cardRepo';
import { Icon } from 'react-native-elements'
export default function repoScreen({navigation}){

    
    
    const reducer = useSelector((state) => state.reducer);
    
    
    const [repos, setRepos] = useState(reducer.data.public_repos);
    const [data,setData] = useState(reducer.repos);
    function handleGoBack() {
        //navigation.goBack();
        navigation.navigate('Home')
    }
    const [load,setLoad] = useState(true)

    useEffect(()=>{
        
         navigation.addListener('focus', ()=>{setLoad(!load)})
         setRepos(reducer.data.public_repos);
         setData(reducer.repos);
    },[load, navigation])
  
    console.log('repos',reducer.repos)

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BorderlessButton 
                    onPress={handleGoBack}
                    style = {{marginTop:25 }}
                >
                <Icon name = 'arrow-left' type='feather' color="#FFF" size={25} style={{marginLeft:17.5}} />
                </BorderlessButton>
                <Text style={{ fontSize: 20, paddingTop:31, color:"#fff" ,alignSelf:'flex-start',marginLeft:96 }}>{repos} Repositórios</Text>
            </View>
            <ScrollView style={styles.scrollRepo}>
                <SafeAreaView style={styles.containerList}> 
                    {data.map((item,i) =>(
                    
                        <CardRepo titulo={item.name} descricao = {item.description} stargazers_count={item.stargazers_count}/>
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
        marginBottom:113.5,
    },
  });