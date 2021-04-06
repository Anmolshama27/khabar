import React from "react";
import { StyleSheet,View,Text,TextInput,TouchableOpacity } from "react-native";

const Signinform=()=>{

return(

//style={styles.Screen}
<View   style={styles.Screen}>
    

<View style={styles.Container}>
    <Text style={styles.text}>Create an account</Text>
    
    <TextInput placeholder="Email" style={styles.textInput}/>

    <TextInput placeholder="Password" secureTextEntry style={styles.textInput2}/>
   
    <TouchableOpacity><Text style={{  paddingTop:3, color: "rgba(38, 153, 251, 255)",width:150}}>  Forgot Password</Text>
    </TouchableOpacity>
    
    <View style={{flexDirection:'row',justifyContent:'center' , marginTop:270}}>

    <Text style={styles.text2}>Don't have an account click here:</Text>

    <TouchableOpacity><Text style={styles.text3}> SignUp </Text></TouchableOpacity>
    
    </View>
</View>

<View  >
    <TouchableOpacity style={styles.butcon}>
    <Text style={{alignItems:'center',
textAlign:'center',
fontWeight: "bold",
color:'white',
fontFamily: "Arial",
fontSize:18,

}}>SignIn</Text>

    </TouchableOpacity>
</View>

</View>


);


};

const styles=StyleSheet.create({
Screen: {
    alignItems: "center",

    paddingTop: 30,
    flex: 1,
    
  },
Container:{ 
    alignItems: "stretch",
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 48,
    width: 335,
    height: 629,
    elevation:6,
    borderWidth:1,
    borderColor:'transparent',
    backgroundColor: "transparent"
},
text: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "rgba(38, 153, 251, 255)",
    alignItems:'center',
    
  },
textInput:{
  alignItems: "flex-start",
  paddingStart: 20,
  paddingTop: 16,
  width: 279,
  height: 48,
  borderRadius:6,
  fontFamily:'Arial',
  elevation:2,
  marginTop:112,
  borderWidth: 1,
  borderColor: "rgba(188, 224, 253, 255)",
  backgroundColor: "rgba(255, 255, 255, 255)"
},
textInput2:{
  alignItems: "flex-start",
  paddingStart: 20,
  paddingTop: 16,
  width: 279,
  fontFamily:'Arial',
  height: 48,
  
  borderRadius:6,
  marginTop:20,
  elevation:2,
  borderWidth: 1,
  borderColor: "rgba(188, 224, 253, 255)",
  backgroundColor: "rgba(255, 255, 255, 255)"
},
text2:
    {
        fontFamily: "Arial",
        fontSize: 14,
        textAlign: "center",
        color: "black",
        alignItems:'center',
      
      },
text3:
    {
        fontFamily: "Arial",
        fontSize: 14,
        textAlign: "center",
        color: "rgba(38, 153, 251, 255)",
        alignItems:'center',
   
      },
butcon:{
        alignItems: "center",
     
        padding:8,
        width: 325,
        elevation:6,
        height: 48,
        marginTop:20,
        borderRadius: 4,
        backgroundColor: "rgba(38, 153, 251, 255)"
      
}


  


});

export default Signinform;