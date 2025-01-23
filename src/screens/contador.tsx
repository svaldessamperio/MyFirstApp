import { View, Text } from 'react-native'
import { useState } from 'react';
import { Button, FAB } from 'react-native-paper';
import { globalStyles } from '../theme/GlobalStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function Contador() {
    const [value, setValue] = useState(0);

    const suma = (valor:number) => {
        setValue(value + valor);
    }

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{ value }</Text>
      
      <View style = {{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        {/* <Button mode="contained" icon="rocket" onPress={ () => suma(1) } >Incrementar</Button> */}
        <FAB  icon="add" onPress={ () => suma(1) } />
        <FAB  icon="remove-outline" style={ globalStyles.fab } onPress={ () => suma(-1) } />
        {/* <IonIcon name="rocket" size={30} color="#900" /> 
        <IonIcon name="rocket-outline" size={50} color="#900" /> */}
      </View>
         
    </View>
  )
}