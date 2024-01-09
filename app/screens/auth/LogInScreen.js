import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../../components/Text';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

function LogInScreen(props) {
    const {width} =useAuth();
return (
<View style={styles.container}>
    <View style={{width:width*0.9}}>
        <View style={{width:width*0.3,height:width*0.3}}>
            <Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/preLogo.png')}/>
        </View>
        <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.06}>Welcome back.</AppText>
        <AppText color={colors.secondary} fontFamily='PoppinsSemiBold'>Login <AppText >to your Account</AppText></AppText>
    </View>

    <View style={{width:width*0.9,marginTop:'10%'}}>
        <AppTextInput placeholder={'Email'}/>
        <AppTextInput placeholder={'Password'}/>

        <AppText textAlign={'right'}>Forgot Password?</AppText>
    </View>

    <AppButton text={'Login'} width={width*0.9} marginTop={'7%'}/>

    <AppText marginTop='5%'>Don’t have an account? <AppText color={colors.secondary}fontFamily='PoppinsSemiBold'>Sign Up</AppText></AppText>
</View>
);
}

export default LogInScreen;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primary
}
});