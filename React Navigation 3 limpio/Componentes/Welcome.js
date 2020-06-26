import React,{Component} from 'react';
import { StyleSheet,View,Text,ImageBackground} from 'react-native';
import {Container,Input, Content,Item,Button,Label,Header,Form} from 'native-base';
import * as firebase from 'firebase';

const firebaseconfig={
  apiKey:"AIzaSyCWWPv4iP5s4QVcErqwkWmRYw4ugHQdSPo",
  authDomain:"free-8c442.firebaseapp.com",
  databaseURL:"https://free-8c442.firebaseio.com  ",
  projectId: "free-8c442",
  storageBucket:""
};

firebase.initializeApp(firebaseconfig);

export default class Welcome extends Component {

  constructor(props){
   super(props)

   this.state=({
     email:'',
     password:''
   })
  }

  signUpUser=(email,password)=>{

    try{
         
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(this.props.navigation.navigate('Inicio'))
    }catch(error)
    {
       console.log(error.toString())
    }

  }
  loginUser=(email,password)=>{
    
     try{  
        firebase.auth().signInWithEmailAndPassword(email,password).
        then(this.props.navigation.navigate('Inicio'))
        }
        catch(error)
        {
        console.log(error.toString())
        }
    
  }
render(){
    return (

<Container style={styles.container}>
  <ImageBackground source={require('../image/cinema2.jpg')}  style={{flex:2,justifyContent:'center'}}>
  <Form>
<Item floattingLabel>
<Label style={{color:'white',fontSize:20}}>E-mail</Label>
<Input autoCorrect={false}  
onChangeText={email=>this.setState({email})}

autoCapitalize="none" style={{color:'white'}}/>
</Item>

<Item floattingLabel>
<Label style={{color:'white',fontSize:20}}>Password</Label>
<Input sucureTextEntry={true}  autoCorrect={false}  
onChangeText={password=>this.setState({password})}

autoCapitalize="none" style={{color:'white'}}/>
</Item>

<Button Full success rounded style={{marginTop:20}}  onPress={()=>this.props.navigation.navigate('Dashboard')}>
<Text style={{color:'white',fontSize:17}}> Login</Text>
</Button>

<Button full primary rounded onPress={()=>this.signUpUser(this.state.email,this.state.password)} style={{marginTop:20}} >
                <Text style={{color:'white',fontSize:17}}>Sing up</Text>
             </Button>

  </Form>
</ImageBackground>
</Container>
     
        
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
     backgroundColor:'#fff',
     justifyContent:'center',
    },
  });
  