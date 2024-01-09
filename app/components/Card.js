import React from 'react';
import { View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import AppText from './Text';

function Card({onPress}) {
    const {width}=useAuth();
return (
<TouchableOpacity style={{backgroundColor:colors.textInputBG,width:width*0.9,flexDirection:'row',alignItems:'center',padding:'3%',marginVertical:'2%',borderRadius:10}} onPress={onPress}>
            <View style={{width:width*0.2,height:width*0.2}}>
                <Image
                style={{width:'100%',height:'100%'}}
                source={require('../assets/images/Ellipse8.png')}/>
            </View>
            <View style={{marginLeft:'5%'}}>
                <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.045}>Lorem Ipsum</AppText>
                <AppText color={colors.mediumDark}>25 years</AppText>
                <AppText color={colors.mediumDark}>Male</AppText>
                <AppText color={colors.mediumDark}>Last visit: 23/01/2023</AppText>
            </View>
        </TouchableOpacity>
);
}

export default Card;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});