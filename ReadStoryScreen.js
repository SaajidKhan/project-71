import React from 'react';
import { Text, TextInput, TouchableOpacity, View ,Image} from 'react-native';

export default class ReadStoryScreen extends React.Component{
     render(){
       return(
            <View style={styles.container}>
              <Image
              source={require("../assets/read.png")}
              style={{width:100,height:100}}/>
                <Text>Read a Story</Text>
            </View>
       );

     }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      allignItems:'center',
      width:10,
      height:30

    }
})