import React, {Component} from 'react';
import { Image, StyleSheet, Text, View,Alert,TouchableOpacity } from 'react-native';


import { Avatar, Divider } from 'react-native-elements';
import { Icon } from 'react-native-elements'



export default class CardUser extends Component{

    alert = (title, body) => {
        Alert.alert(title, body, [{ text: "OK", onPress: () => {} }], {
          cancelable: false
        });
      };

    render(){
        return (
            <View style = {styles.container}>
               
                <View style={styles.retangle}/>

                <Avatar size={64} containerStyle={{ backgroundColor: 'tomato' ,marginLeft:15,paddingTop:0}}  rounded title={'min'} source={{
                        uri:this.props.avatar,
                }}/>
                
               
                <Text style={styles.nameStyle}>#{this.props.name}</Text>
                 
                <TouchableOpacity style={styles.arrow} onPress={()=>this.alert('o nome é : ' +this.props.name,) }>
                        <Icon name = 'arrow-right' type='feather' color="#FFF" size={20}/>
                </TouchableOpacity>
    
                
            </View>
        )
    }


}

const styles =StyleSheet.create({
    container:{
        height:87.5,
        backgroundColor: '#292929',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:0.6,
		borderBottomColor:'#A5A5A5',
        marginBottom:28.5
    },
    retangle:{
        width:10,
        height:42,
        backgroundColor:'#FFCE00',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        
    },
    nameStyle:{ 
        fontSize: 16, 
        paddingTop:18, 
        color:"#fff",
        alignSelf:'flex-start',
        marginTop:18,
        marginLeft:32,
        fontWeight:'bold',
        width:108 
    },
    arrow:{
        marginLeft:120.78
    }
})