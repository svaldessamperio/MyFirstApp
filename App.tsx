import { View, Text, SafeAreaView } from 'react-native'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import Contador from './src/screens/contador';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function App() {

  return (
    <PaperProvider settings={{
      icon: props => <IonIcon { ...props } />,
    }}>
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, flexDirection: 'column'}}>
          <Text style={{fontSize:50, fontWeight:'black', textAlign:'center'}}>Contador</Text>
          <Contador />
        </View>       
      </SafeAreaView>
    </PaperProvider>
    )      

}