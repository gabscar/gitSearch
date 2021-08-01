
import React, {Component} from 'react';
/* import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import { ScrollView,BorderlessButton } from 'react-native-gesture-handler';

import { Icon } from 'react-native-elements' */
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import { ScrollView,BorderlessButton } from 'react-native-gesture-handler';


import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button';





export default class UserHome extends Component{

    constructor(props){
        super(props)
        
    }
    

       
    render(){
        console.log(this.props);
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.pictureHeader}>
                    <View style={{flexDirection:'row',paddingBottom: 20,alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <Text style={{ fontSize: 20,marginTop:23, color:"#fff",width:112}}>#{this.props.user}</Text>
                        <BorderlessButton 
                            onPress={this.props.button}
                            style = {{marginTop:25,flexDirection:'row',width:59,height:20,marginLeft:164,alignItems:'flex-start', justifyContent:'flex-end' }}
                        >
                            <Text style={{ fontSize: 17, paddingBottom: 20, color:"#fff",marginLeft:10}}>{this.props.buttonLabel}</Text>
                            <Icon name = {this.props.nameIcon} type='feather' color={this.props.colorIcon} size={19} style={{marginLeft:12,marginRight:29}} />
                        </BorderlessButton>
                    </View>
                    <Avatar size={125} containerStyle={{ backgroundColor: 'tomato' }}  rounded title={'min'} source={{
                        uri:this.props.avatar,
                    }}/>
                </View>
            <View style={styles.nameContainer}>
                <View style = {{flexDirection:'row'}}>
                    <View style={styles.retangleName}/>
                        <Text style={{ fontSize: 26, color:"#fff", fontWeight:'bold',fontFamily:'Helvetica Neue', marginLeft:14}}>{this.props.name}</Text>
                    </View>
                    <Text style={{ fontSize: 18, color:"#fff",fontFamily:'Helvetica Neue' }}>{this.props.email}</Text>
                    <Text style={{ fontSize: 18, color:"#fff", fontFamily:'Helvetica Neue'}}>{this.props.location}</Text>
            </View>
            <View style={styles.valueContainer}>
                <View style={styles.miniTab}>
                    <Text style={{ fontSize: 40, color:"#fff", fontWeight:'bold',fontFamily:'Helvetica Neue'}}>{this.props.followers}</Text>
                    <Text style={{ fontSize: 17, color:"#fff", fontFamily:'Helvetica Neue'}}>Seguidores</Text>
                </View>
                <View style={styles.miniTab}>
                    <Text style={{ fontSize: 40, color:"#fff", fontWeight:'bold',fontFamily:'Helvetica Neue'}}>{this.props.following}</Text>
                    <Text style={{ fontSize: 17, color:"#fff", fontFamily:'Helvetica Neue'}}>Seguindo</Text>
                </View>
                <View style={styles.miniTab}>
                    <Text style={{ fontSize: 40, color:"#fff", fontWeight:'bold',fontFamily:'Helvetica Neue'}}>{this.props.repos}</Text>
                    <Text style={{ fontSize: 17, color:"#fff", fontFamily:'Helvetica Neue'}}>Repos</Text>
                </View>
                
            </View>
                    
                <ScrollView style={styles.bioContainer}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.retangle}/>
                        <Text style={{ fontSize: 26, color:"#fff", fontWeight:'bold',fontFamily:'Helvetica Neue', marginLeft:24}}>BIO</Text>
                    </View>
                    <Text style={{ fontSize: 16, color:"#fff",fontFamily:'Helvetica Neue', padding:18, textAlign: 'justify', marginBottom:90 }}>
                        {this.props.bio}
                    </Text>
                </ScrollView>
         
            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,         
        backgroundColor:'#292929'
    },
    pictureHeader:{
        width:'100%',
        backgroundColor:'#1F1F1F',
        height:136,
        alignItems:'center',       

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
    valueContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:29,
        backgroundColor:'#5252525D',
        height:100,
        width:'100%'
    },
    retangleName:{
        width:10,
        height:42,
        backgroundColor:'#FFCE00',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft:-25
    },
    retangle:{
        width:10,
        height:42,
        backgroundColor:'#FFCE00',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        
    },
    bioContainer:{
        paddingVertical: 20,
        flex: 1,
        height:'100%', 
        marginBottom:113
    }
  });