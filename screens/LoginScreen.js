import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet,KeyboardAvoidingView,ToastAndroid, Alert} from 'react-native';
export default class LoginScreen extends React.Component{
render(){
    return(
        <View>
            <KeyboardAvoidingView style={{alignItems:'center',marginTop:20}}>
                <View>
                    <Image source={require("../assets/booklogo.jpg")}
                    style={{width:200,height:200}}>

                    </Image>
                    <Text style={{textAlign:'center',fontSize:30}}>
wily
                    </Text>
                </View>
                <View>
                    <TextInput
                    styles={styles.loginBox}
                    placeholder="abc@example.com"
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}>

                    </TextInput>
                    <TextInput
                    style={Styles.loginBox}
                    secureTextEntry={true}
                    placeholder="enter password"
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    >

                    </TextInput>
                </View>
                <View>
                    <TouchableOpacity
                    style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:5}}
onPress={()=>{
        this.Login(this.state.emailId,this.state.password)}}>
<Text style={{textAlign:'center'}}>
    LoginScreen
</Text>


                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>

        </View>
    )
}
}
const styles=StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:20,
        paddingLeft:20

    }
})