import { NavigationContainer } from '@react-navigation/native';
import WebView from "react-native-webview";
import StatusBar from "./app/containers/StatusBar";
import SafeAreaContext from "./app/containers/SafeAreaView";
import { BackHandler } from 'react-native';
import {Button, SafeAreaView, Text, TouchableOpacity} from "react-native";
import {useEffect, useRef, useState} from "react";

const runFirst = `
  window.isNativeApp = true;
  
  (function() {
  function wrap(fn) {
    return function wrapper() {
      var res = fn.apply(this, arguments);
      window.ReactNativeWebView.postMessage('navigationStateChange');
      return res;
    }
  }

  history.pushState = wrap(history.pushState);
  history.replaceState = wrap(history.replaceState);
  window.addEventListener('popstate', function() {
    window.ReactNativeWebView.postMessage('navigationStateChange');
  });
})();
  
  true;
`

export default function App() {
  const webViewRef = useRef(null);

  const [isCanGoBack, setIsCanGoBack] = useState(false);

  const onPressHardwareBackButton = () => {
    if (webViewRef.current && isCanGoBack) {
      webViewRef.current.goBack();
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onPressHardwareBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onPressHardwareBackButton);
    }
  }, [isCanGoBack]);

  const _sendPostMessgae = () => {
    if (webViewRef && webViewRef.current) {
      webViewRef.current.injectJavaScript(
        `window.ReactNativeWebView.postMessage(JSON.stringify({key : "value"}));`
      );
    }
  };


  return (
    <NavigationContainer>
    <SafeAreaContext>
      <SafeAreaView style={{flex:1}}>
    <StatusBar/>
    <WebView
      source={{
        uri: 'https://nu-angels.com',
      }}
      injectedJavaScript={runFirst}
      onMessage={({ nativeEvent: state }) => {
        if (state.data === 'navigationStateChange') {
          // Navigation state updated, can check state.canGoBack, etc.
          setIsCanGoBack(state.canGoBack);
        }
      }}
      onNavigationStateChange={console.log}
    />
      <TouchableOpacity onPress={_sendPostMessgae}>
        <Text>웹뷰로 데이터 전송</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaContext>
    </NavigationContainer>
  );
}

