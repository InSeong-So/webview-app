import { StyleSheet, View, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import useWebViewController from '../hooks/useWebViewController';
//
import type { WebViewComponent } from 'components';

const AngelsWebView: WebViewComponent<{ pageKey: string }> = ({ navigation, route, pageKey }) => {
  const { uri, ProgressBar, onLoadProgress, requestOnMessage } = useWebViewController(pageKey);
  console.log('route / uri >>> : ', route, ' / ', uri);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProgressBar />
        <WebView
          onMessage={requestOnMessage(navigation)}
          source={{ uri }}
          originWhitelist={['*']}
          startInLoadingState={true}
          cacheEnabled={true}
          allowUniversalAccessFromFileURLs={true}
          javaScriptEnabled={true}
          onLoadProgress={onLoadProgress}
          setSupportMultipleWindows={false}
        />
      </ScrollView>
    </View>
  );
};

export default AngelsWebView;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
