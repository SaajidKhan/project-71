import React from 'react';
import { Text, TextInput,Header, TouchableOpacity, View ,Image} from 'react-native';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              <Header>
                <TextInput 
                style={styles.writeText}
                placeholder="Header"/>
                 </Header>
                <View>
                  <TextInput
                  style={styles.writeText}
                  placeholder="Tittle"/>
                </View>
                <View>
                  <TextInput 
                  style={styles.writeText}
                  placeholder="Author"/>
                </View>
                <View>
                  <TextInput 
                  style={styles.writeText}
                  placeholder="Write Story"
                  
                  >
                    
                  </TextInput>
                  <TouchableOpacity 
                  style={styles.submitButton}
                  onPress={this.submitStory}>
                    <Text style={styles.submitButtonText}></Text>
                  </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      allignItems:'center'

    },
    writeText:{
      textAllign:'center',
      fontSize:15
    },
    submitButton:{
      backgroundColor: '#FBC02D',
      width: 100,
      height:50
    },
    submitButtonText:{
      padding: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:"bold",
      color: 'white'
    }
})