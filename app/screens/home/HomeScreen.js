import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import AppText from '../../components/Text';
import colors from '../../config/colors';
import useAuth from '../../auth/useAuth';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import routes from '../../navigations/routes';

function HomeScreen({navigation}) {
    const {width}=useAuth();
return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.keyboardAvoidingView}>
    <ScrollView contentContainerStyle={styles.container}>
        <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.05}>ECT Parameters Prediction System</AppText>
        <AppText>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Maecenas at hendrerit lectus, 
        ac pretium mauris.</AppText>
        
        <View style={{marginTop:'5%'}}>
        <AppText>Name*</AppText>
        <AppTextInput/>
        <AppText>Age</AppText>
        <AppTextInput/>
        <AppText>Gender</AppText>
        <AppTextInput/>
        <AppText>Outcome</AppText>
        <AppTextInput/>
        <AppText>Pre Temperatur</AppText>
        <AppTextInput/>
        <AppText>Pre Blood Pressure</AppText>
        <AppTextInput/>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <AppButton width='30%' backgroundColor={colors.textInputBG} textColor={colors.secondary} text={'Reset'}/>
            <AppButton width='60%' text={'Submit'}
            onPress={()=>navigation.navigate(routes.HOME_TAB,{
                screen:routes.DONE
            })} />
        </View>

    </ScrollView>
</KeyboardAvoidingView>
);
}

export default HomeScreen;
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        // alignItems:'center',
        padding:'5%'
    },
    keyboardAvoidingView: {
        flex: 1,
      },
});