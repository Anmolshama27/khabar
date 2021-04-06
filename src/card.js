import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";

const Card=({item})=>
{

return(

    <View style={styles.Screen} >

    
    <Text style={styles.author}>Author Name:
    <Text style={{color: '#F31717',fontSize:18}}>  {item.author}</Text>  
    </Text>
    <Text style={styles.title} >{item.title}</Text>
    <Image style={styles.image} source={{uri:item.urlToImage}} />
  
    <Text style={styles.descrption}>{item.description}</Text>

</View>



);


};

const styles=StyleSheet.create({
    Screen:{
        
    
        marginVertical:10,
        marginHorizontal:5,
        shadowColor:'black', //shadow property only works in ios
        shadowOpacity:0.26,
        shadowRadius:6,
        shadowOffset:{ width: 0, height: 2},
        elevation:5,// used in android
        backgroundColor:'#9e9d9b',
        padding:10,
    
        borderRadius:9
    
        
    },
    title:
    {
        color: "#260DEF",
    marginTop:6,
    marginBottom:5,
    textAlign: "left",
    fontSize:17,
    fontWeight:'bold'
    },
    author:
    {
        marginTop:12,
        fontSize:14,
        color:'black',
        fontWeight:'700'
        
    
    },
    image:
    {
        width:'100%',
        height: 220,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:20
        
    
    },
    descrption:
    {
    
        color: "#5336e3",
        marginTop:13,
        marginBottom:10,
        textAlign: "left",
        fontWeight:'700',
        fontSize:16,
    
    },
    
    
    });
    
export default Card;