import React,{Component} from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';

export default class SearchDetails extends Component{
render(){
    return (
             <View style={styles.container}>
                <Text>SearchDetails</Text>
                <Button
                title="Go to Details"
                onPress={()=>this.props.navigation.goBack()}
                />
             </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
     backgroundColor:'#fff',
     alignItems:"center",
     justifyContent:'center'
    }
    
  });