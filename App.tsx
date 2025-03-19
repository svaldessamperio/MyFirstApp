import { View, Text, SafeAreaView } from 'react-native'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import Contador from './src/screens/contador';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Tarea1 from './src/screens/Tarea1';

export default function App() {

  return (
    <PaperProvider settings={{
      icon: props => <IonIcon { ...props } />,
    }}>
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, flexDirection: 'column'}}>
          {/* <Text style={{fontSize:50, fontWeight:'black', textAlign:'center'}}>Contador</Text> */}
          {/* <Contador /> */}
          {/* <Home /> */}
          <Tarea1/>
          
        </View>       
      </SafeAreaView>
    </PaperProvider>
    )      

}