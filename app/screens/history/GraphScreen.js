import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { LineChart,Grid  } from 'react-native-chart-kit';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppText from '../../components/Text';



const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Line color
        strokeWidth: 2, // Line width
      },
    ],
  };

  const list=[
    {id:1},
    {id:1},
    {id:1},
    {id:1},
  ]
function GraphScreen(props) {
    const {width}=useAuth();
return (
<ScrollView contentContainerStyle={styles.container}>


      {list.map((item,index)=>(
          <View key={index} style={{width:width*0.9,backgroundColor:colors.primary,alignItems:'center',padding:'2%',borderRadius:10,marginVertical:'5%',borderWidth:1,borderColor:colors.mediumDark}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
              <AppText fontFamily='PoppinsSemiBold'>Sat, 16 Nov <AppText children={'7:35pm'} color={colors.mediumDark}/></AppText>
              <MaterialCommunityIcons name="brain" size={width*0.07} color="black" />
          </View>
          <LineChart
          data={data}
          width={width*0.87}
          height={width*0.5}
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: 'red',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              // borderRadius: 16,
            },
            verticalLabelRotation:0,
          }}
        withVerticalLines={false}
          bezier
          style={{
          //   marginVertical: 8,
          //   borderRadius: 16,
          }}
        />
          </View>
      ))}

</ScrollView>
);
}

export default GraphScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
justifyContent:'center',
 alignItems:'center'
}
});