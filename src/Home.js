import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FlatList, StyleSheet, Text,View,Mo } from "react-native";
import { requestApiData } from "./actions";
import Card from './card';

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  

  render() {
   

    
   // console.log("LIST_DATA ",this.props.data);
    return <View> 
   
          <FlatList
          style={styles.flat}
            data={this.props.data}
            keyExtractor={(item,index)=>'key'+ index}
            renderItem={({item}) =>{
            return<Card  item={item}/>
            }}
/>
          </View>
          
  };
}; 

const styles=StyleSheet.create({

  
flat:{
    
    
  backgroundColor:'#42413c',
  }


});


  const mapStateToProps = state =>{
 // console.log("stateLIST",state.data.list)
  return ({ data: state.data.list }); 

}
  const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);