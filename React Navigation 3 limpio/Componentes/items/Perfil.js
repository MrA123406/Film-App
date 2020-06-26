import React,{Component} from 'react';
import { StyleSheet,View,Text, ActivityIndicator, ScrollView, FlatList, Image} from 'react-native';
import {Card, ListItem, Button, Icon, Rating, AirbnbRating} from 'react-native-elements'

export default class Perfil extends Component{

state={ 
loading:true,
users:[]
};

componentDidMount(){
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=22ba39d2694d2cec259cd5896844c6f1&language=en-US&page=1')
  .then(res=>res.json())
  .then(res=>{
    this.setState({
      users:res.results,
      loading:false
    })
  });
}

render(){

  const{loading,users}=this.state;
  if(loading){
    return(
          
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <ActivityIndicator
              size="large"
              color="blue"
              />
              <Text>Cargando.....</Text>
            
          </View>
    );
  }
    return (
             <ScrollView>
               <View style={{flex:1, alignItems:"center", flexGrow:1}}>
               <Text style={{color:'#3498db',fontSize:30}}> The Most Popular</Text>
               <FlatList numColumns={2}  data={users}
               renderItem={({item})=>
               <Card>
                <Image style={{marginLeft:10,width:135,height:170}} resizeMode="cover"
                source={{uri:"https://image.tmdb.org/t/p/w500/"+ item.poster_path}}
                />

                <Text style={styles.Titulo}> </Text>
                <Rating
                type='custom'
                readonly
                ratingColor='#3498db'
                ratingBackgroundColor='c8c7c8'
                imageSize={15}
                ratingCount={10}
                startingValue={item.vote_average}
                style={{paddingVertical:10}}
                />
               </Card> 
               }
               />

               </View>
             </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
     backgroundColor:'#fff',
     alignItems:"center",
     justifyContent:'center'
    },
    Titulo:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:8,
      color:'steelblue'
    }
    
  });
  