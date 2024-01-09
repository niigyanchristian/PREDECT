import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './Text';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';

function AppButton({text,textColor,onPress,...others}) {
    const {width}=useAuth();
return (
<TouchableOpacity style={[styles.container,{...others}]} onPress={onPress}>
    <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.05} color={textColor??colors.primary}>{text}</AppText>
</TouchableOpacity>
);
}

export default AppButton;
const styles = StyleSheet.create({
container:{
justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.secondary,
 width:'100%',
 padding:'3%',
 borderRadius:10
}
});