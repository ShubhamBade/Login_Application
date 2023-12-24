import { StatusBar,View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle={'light-content'}/>
      <AppNavigation />
    </View>
  );
}
