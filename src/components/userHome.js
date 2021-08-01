
import React, {Component} from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';




export default class UserHome extends Component{

    constructor(props){
        super(props)
        
    }
    

       
    render(){
        console.log(this.props);
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.pictureHeader}>
                    {this.props.chield}
                    <Avatar size={125} containerStyle={{ backgroundColor: 'tomato' }}  rounded title={'min'} source={{
                        uri:this.props.avatar,
                    }}/>
                </View>
            <View style={styles.nameContainer}>
                <View style = {{flexDirection:'row'}}>
                    <View style={styles.retangleName}/>
                        <Text style={styles.textName}>{this.props.name}</Text>
                    </View>
                    <Text style={styles.subtext}>{this.props.email}</Text>
                    <Text style={styles.subtext}>{this.props.location}</Text>
            </View>
            <View style={styles.valueContainer}>
                <View style={styles.miniTab}>
                    <Text style={styles.textNumberMiniTab}>{this.props.followers}</Text>
                    <Text style={styles.textLabelMiniTab}>Seguidores</Text>
                </View>
                <View style={styles.miniTab}>
                    <Text style={styles.textNumberMiniTab}>{this.props.following}</Text>
                    <Text style={styles.textLabelMiniTab}>Seguindo</Text>
                </View>
                <View style={styles.miniTab}>
                    <Text style={styles.textNumberMiniTab}>{this.props.repos}</Text>
                    <Text style={styles.textLabelMiniTab}>Repos</Text>
                </View>
                
            </View>
                    
                <ScrollView style={styles.bioContainer}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.retangle}/>
                        <Text style={styles.textBio}>BIO</Text>
                    </View>
                    <Text style={styles.textBioDescription}>
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
    },
    textNumberMiniTab:{
         fontSize: 40, 
         color:"#fff", 
         fontWeight:'bold',
         fontFamily:'sans-serif'
    },
    textLabelMiniTab:{
         fontSize: 17, 
         color:"#fff", 
         fontFamily:'sans-serif'
    },
    textBio:{ 
        fontSize: 26, 
        color:"#fff", 
        fontWeight:'bold',
        fontFamily:'sans-serif', 
        marginLeft:24
    },
    textBioDescription:{ 
        fontSize: 16, 
        color:"#fff",
        fontFamily:'sans-serif', 
        padding:18, 
        textAlign: 'justify', 
        marginBottom:90 
    },
    subtext:{ 
        fontSize: 18, 
        color:"#fff",
        fontFamily:'sans-serif' 
    },
    textName:{ 
        fontSize: 26, 
        color:"#fff", 
        fontWeight:'bold',
        fontFamily:'sans-serif', 
        marginLeft:14
    }
    
  });