import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import AppText from '../../components/Text';
import colors from '../../config/colors';
import useAuth from '../../auth/useAuth';
import AppButton from '../../components/AppButton';


const data =[
    {id:1,title:'Name'},
    {id:2,title:'Age'},
    {id:3,title:'Gender'},
    {id:4,title:'Weight'},
    {id:5,title:'Blood Presure'},
    {id:6,title:'Seizure duration'},
    {id:7,title:'Pulse width'},
    {id:48,title:'Frequency'},
]
function ResultsScreen(props) {
    const {width,height}=useAuth();
return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.keyboardAvoidingView}>
    <ScrollView contentContainerStyle={[styles.container,{height:height}]}>
        <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.05}>ECT Parameters Prediction System</AppText>
        <AppText>Below are the correct parameters to undergo the ECT process.</AppText>
        
        <View style={{marginTop:'5%'}}>
            {data.map((item,index)=>(
            <View key={index} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:'2%',marginBottom:'5%'}}>
                <AppText fontFamily='PoppinsSemiBold'>{item.title}: </AppText>
                <AppText fontFamily='PoppinsSemiBold'>Loerem Ipsum</AppText>
            </View>
            ))}
        </View>

        <AppButton width='80%' alignSelf='center' text={'Done'}/>


    </ScrollView>
</KeyboardAvoidingView>
);
}

export default ResultsScreen;
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