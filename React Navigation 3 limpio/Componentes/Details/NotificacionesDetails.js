import React,{Component} from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';

export default class NotificacionesDetails extends Component{
render(){
    return (
             <View style={styles.container}>
                <Text>NotificacionesDetails</Text>
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