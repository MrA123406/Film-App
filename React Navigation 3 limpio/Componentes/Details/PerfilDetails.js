import React,{Component} from 'react';
import { StyleSheet,View,Text,Button } from 'react-native';

export default class PerfilDetails extends Component{
render(){
    return (
             <View style={styles.container}>
                <Text>PerfilDetails</Text>
                <Button
                title="Go to Details Perfil"
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