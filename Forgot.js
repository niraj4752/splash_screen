import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";


const Forgot = () => {
    const [email, setEmail] = useState('Nirajkumar@gmail.com');
    const [dropdown,setDropdown]=useState('what is  your first school name')
    const [value,setValue]=useState('what is  your first school name')
    return (
        <View>
            <Text>Forgot Password</Text>

            <View >
                
                <View>
                    <Picker
                        selectedValue={dropdown}
                        style={styles.picker}
                        onValueChange={(itemValue) =>setDropdown(itemValue)}
                    >
                        <Picker.Item label="What is your father name?" value="What is your father name?" />
                        <Picker.Item label="What is your mother name?" value="What is your mother name?" />
                    </Picker>
                </View>
                <TextInput
                    placeholderTextColor="#80888a"
                    placeholder='Enter Name'
                    keyboardType='default'
                    style={styles.TextInput}
                    onChangeText={(value) => setValue(value)}
                    value={email}
                />

            </View>
        </View>
    )
}
export default Forgot;
const styles = StyleSheet.create({
    TextInput: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: '#9ed0db',
        margin: 10,
        width: '60%',

    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#384b69'

    }
})