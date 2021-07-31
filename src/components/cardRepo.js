import React, {Component} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card, Divider } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

export default class CardRepo extends Component{
    render(){
		return(
			<View style={styles.card}>
				
				<View style={{flexDirection:'row'}}>
					<View style={styles.retangle}/>
					<Text style={styles.title}>{this.props.titulo}</Text>
				</View>


				<ScrollView style={{marginTop:9, height:42}}>
					<Text style={styles.description}>{this.props.descricao||'sem descrição'}</Text>
				</ScrollView>

				
				
				<View style={{flexDirection:'row', justifyContent:'space-between',marginTop:13,marginBottom:34.5}}>
					<View style={styles.starContainer}>
						<Icon name = 'star' type='feather' color="#FFCE00" size={20}/>
						<Text style={styles.textStar}>{this.props.stargazers_count}</Text>
					</View>
					<View style={styles.lockContainer}>
						<Icon name = 'unlock' type='feather' color="#63BF1F" size={20}/>
						<Icon name = 'lock' type='feather' color="#CC042A" size={20}/>
						
					</View>
				</View>
				
			</View>	

		)
	}
}



const styles = StyleSheet.create({
    card: {
        backgroundColor:'#292929',
		height:200,	
		paddingTop:20.5,
		borderBottomWidth:0.6,
		borderEndColor:'#A5A5A5',
		borderBottomColor:'#A5A5A5'
	    

    },
	description:{
        paddingLeft: 28,
		fontSize:16,
		color:'#fff',
		marginRight:58,
		textAlign: 'justify',
		
	},
	title:{
		fontSize: 16,
		color:'#fff',
		textAlign: 'center',
		marginTop:11,
		marginLeft:28,
		fontWeight:'bold'
	},
	textStar: {
		fontSize: 15,
		color:'#fff',
		marginLeft:6.42,
	},
	retangle:{
        width:10,
        height:42,
        backgroundColor:'#FFCE00',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        
    },
	starContainer:{
		marginLeft: 30,
		flexDirection:'row'
	},
	lockContainer:{
		flexDirection:'row',
		marginRight:28,
	}
})