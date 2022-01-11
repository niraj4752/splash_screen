import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Utility from './Utility';
class Signup extends Component {

    constructor(props){
        super(props)
        this.state={
            name:'',
            mobileNo:'',
            emailId:'',
            password:''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholderTextColor="#80888a"
                    placeholder='Enter Name'
                    keyboardType='default'
                    style={styles.TextInput}
                    onChangeText={(text)=>this.setState({name:text})}
                >
                </TextInput>

                <TextInput
                    placeholderTextColor="#80888a"
                    placeholder='Enter Mobile'
                    keyboardType='phone-pad'
                    style={styles.TextInput}
                    onChangeText={(text)=>this.setState({mobileNo:text})}
                >
                </TextInput>

                <TextInput
                    placeholderTextColor="#80888a"
                    placeholder='Enter Email ID'
                    keyboardType='email-address'
                    style={styles.TextInput}
                    onChangeText={(text)=>this.setState({emailId:text})}
                >
                </TextInput>

                <TextInput
                    placeholderTextColor="#80888a"

                    placeholder='Password'
                    keyboardType='visible-password'
                    style={styles.TextInput}
                    onChangeText={(text)=>this.setState({password:text})}
                >
                </TextInput>

                <TouchableOpacity style={styles.TouchableOpacity}
                onPress={async()=>{console.log(JSON.stringify(this.state))
                Utility.sharedInstance._storeData(this.state.emailId,JSON.stringify(this.state),'Stored data')
                }}
                >
                    <Text>SignUp</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.TouchableOpacity}
                onPress={async()=>{
                Utility.sharedInstance._retrieveData(this.state.emailId)
                }}
                >
                    <Text>Show Data</Text>
                </TouchableOpacity>


            </View>
        );
    }

}
// onPress={()=>{this.props.navigation.navigate('Login')}}

const styles = StyleSheet.create({
    TextInput: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: '#9ed0db',
        margin: 10,
        width: '60%',

    },
    TouchableOpacity: {
        borderColor: 'black',
        borderWidth: 1,
        width: '30%',
        alignItems: 'center',
        marginHorizontal: '40%',
        backgroundColor: '#22abc9',
        margin: 10,
        padding: 20

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#384b69'

    }
})
export default Signup;