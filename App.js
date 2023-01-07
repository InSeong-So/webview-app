import { NavigationContainer } from '@react-navigation/native';
import WebView from "react-native-webview";
import StatusBar from "./app/containers/StatusBar";
import SafeAreaContext from "./app/containers/SafeAreaView";

export default function App() {


  return (
    <NavigationContainer>
    <SafeAreaContext>
    <StatusBar/>
    <WebView
      source={{
        uri: 'https://nu-angels.com',
      }}
      style={{marginTop: 20}}
    />
    </SafeAreaContext>
    </NavigationContainer>
  );
}
