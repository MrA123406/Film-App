import React,{Component} from 'react';
import { StyleSheet,View,Text, Settings } from 'react-native';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import Welcome from './Componentes/Welcome'
import Favoritos from './Componentes/Favoritos'
import PerfilDetails from './Componentes/Details/PerfilDetails'
import SettingsDetails from './Componentes/Details/SettingsDetails'
import NotificacionesDetails from './Componentes/Details/NotificacionesDetails'
import SearchDetails from './Componentes/Details/SearchDetails'


import Perfil from './Componentes/items/Perfil'
import Notificaciones from './Componentes/items/Notificaciones'
import Search from './Componentes/items/Search'
import Setting from './Componentes/items/Settings'



export default class Principal extends Component {
      render(){
      return (
            
               <AppContainer />
        );
      }
      
}

const PerfilStack=createStackNavigator({
perfil:{screen:Perfil,
navigationOptions:({navigation})=>{
  return{headerLeft:(
    <Icon
    name='md-menu'
    size={30}
    style={{ paddingLeft:17,color:'white'}}
    onPress={()=>navigation.openDrawer()}
    />
  ),

  headerStyle:{
    backgroundColor:'blue'
  },
  headerTittleStyle:{
    color:'white'
  }
    
  }
}},
Detailsperfil:{screen:PerfilDetails,navigationOptions:{
  headerStyle:{
  backgroundColor:'blue'
},

}
},

})
const SettingsStack=createStackNavigator({
  perfil:{screen:Setting,
  navigationOptions:({navigation})=>{
    return{headerLeft:(
      <Icon
      name='md-menu'
      size={30}
      style={{ paddingLeft:17,color:'white'}}
      onPress={()=>navigation.openDrawer()}
      />
    ),
  
    headerStyle:{
      backgroundColor:'blue'
    },
    headerTittleStyle:{
      color:'white'
    }
      
    }
  }},
  Details:{screen:SettingsDetails,navigationOptions:{
    headerStyle:{
    backgroundColor:'blue'
  },
  
  }
  },
  
  })

    const NotificacionesStack=createStackNavigator({
    perfil:{screen:Notificaciones,
    navigationOptions:({navigation})=>{
      return{headerLeft:(
        <Icon
        name='md-menu'
        size={30}
        style={{ paddingLeft:17,color:'white'}}
        onPress={()=>navigation.openDrawer()}
        />
      ),
    
      headerStyle:{
        backgroundColor:'blue'
      },
      headerTittleStyle:{
        color:'white'
      }
        
      }
    }},
    Details:{screen:NotificacionesDetails,navigationOptions:{
      headerStyle:{
      backgroundColor:'blue'
    },
    
    }
    },
    
    })
    const SearchStack=createStackNavigator({
      perfil:{screen:Search,
      navigationOptions:({navigation})=>{
        return{headerLeft:(
          <Icon
          name='md-menu'
          size={30}
          style={{ paddingLeft:17,color:'white'}}
          onPress={()=>navigation.openDrawer()}
          />
        ),
      
        headerStyle:{
          backgroundColor:'blue'
        },
        headerTittleStyle:{
          color:'white'
        }
          
        }
      }},
      Details:{screen:SearchDetails,navigationOptions:{
        headerStyle:{
        backgroundColor:'blue'
      },
      
      }
      },
      
      })

const AppBottomTab=createBottomTabNavigator({
  Populares:{screen:PerfilStack,navigationOptions:{
    tabBarIcon:({tintColor})=>(
      <Icon 
      name='md-eye'
      color={tintColor}
      size={30}
      />
    )
  }},
  Reproducciones:{screen:SettingsStack,navigationOptions:{
    tabBarIcon:({tintColor})=>(
      <Icon 
      name='md-play'
      color={tintColor}
      size={30}
      />
    )
  }},
  Nuevas:{screen:NotificacionesStack,navigationOptions:{
    tabBarIcon:({tintColor})=>(
      <Icon 
      name='md-star'
      color={tintColor}
      size={30}
      />
    )
  }},
  Valoradas:{screen:SearchStack,navigationOptions:{
    tabBarIcon:({tintColor})=>(
      <Icon 
      name='md-heart'
      color={tintColor}
      size={30}
      />
    )
  }}
  },{
tabBarOptions:{
  activeTintColor:'blue',
  inactiveTintColor:'black'
}
  });

const AppStackNavigator=createStackNavigator({
AppBottomTab:AppBottomTab
},
{
  defaultNavigationOptions:({navigation})=>{
    return{headerLeft:(
      <Icon
      name='md-menu'
      size={30}
      style={{ paddingLeft:17,color:'white'}}
      onPress={()=>navigation.openDrawer()}
      />
    ),

    headerStyle:{
      backgroundColor:'white',
      color:'white'
    }
      
    }
  }
}
);

const AppDrawer=createDrawerNavigator({
Perfil:{screen:AppBottomTab},
Notificaciones:{screen:Notificaciones},
Search:{screen:Search},
Settings:{screen:Setting}
});

const AppSwitchNavigator=createSwitchNavigator(
{
Welcome:Welcome,
Favoritos:Favoritos,
   Inicio:AppDrawer,
});



const AppContainer=createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:'#fff',
   alignItems:"center",
   justifyContent:'center'
  }
  
});
