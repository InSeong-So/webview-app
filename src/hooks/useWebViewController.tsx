import { Component, useCallback, useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { WebViewMessageEvent } from 'react-native-webview';
import { WebViewProgressEvent } from 'react-native-webview/lib/WebViewTypes';
import { NavigationProp, ParamListBase, StackActions } from '@react-navigation/native';
import { 타겟_주소, 페이지_이름 } from '@/constants';

interface Props {
  navigation?: NavigationProp<ParamListBase>;
}

interface State {
  contentLoaded: number;
}

class WebViewProgress extends Component<Props, State> {
  SCREEN_WIDTH = Dimensions.get('window').width;
  STYLES = StyleSheet.create({
    mainContainer: {
      height: 2,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    progressView: {
      backgroundColor: '#135EAC',
      height: 2,
      left: 0,
      position: 'absolute',
      top: 0,
    },
  });

  constructor(props: Props) {
    super(props);
    this.state = { contentLoaded: 0 };
  }

  setProgress = (val: number) => {
    this.setState({ contentLoaded: val });
  };

  render() {
    if (this.state.contentLoaded === 1) return null;

    return (
      <View style={this.STYLES.mainContainer}>
        <View
          style={[
            this.STYLES.progressView,
            {
              width: this.SCREEN_WIDTH * this.state.contentLoaded,
            },
          ]}
        ></View>
      </View>
    );
  }
}

type PostMessageTypes = {
  type: string;
  path: string;
  data: Record<string, any>;
};

const useWebViewController = (pageKey: string) => {
  const webProgressRef = useRef<WebViewProgress>(null);

  const onLoadProgress = useCallback(({ nativeEvent }: WebViewProgressEvent) => {
    if (!webProgressRef.current) return;
    webProgressRef.current.setProgress(nativeEvent.progress);
  }, []);

  const requestOnMessage =
    (navigation: NavigationProp<ParamListBase>) =>
    async ({ nativeEvent }: WebViewMessageEvent): Promise<void> => {
      try {
        const postMessage: PostMessageTypes = JSON.parse(nativeEvent.data) || {};
        if (!postMessage) return;

        if (postMessage.type !== 'ROUTER_EVENT') return;

        const { path } = postMessage;

        if (path === 'back') {
          return navigation.dispatch(StackActions.pop(1));
        }

        return navigation.dispatch(
          StackActions.push(페이지_이름[path], {
            url: `${타겟_주소}${path}`,
            isStack: true,
          }),
        );
      } catch (error) {
        return;
      }
    };

  return {
    uri: `${타겟_주소}${pageKey.toLowerCase()}`,
    ProgressBar: WebViewProgress,
    onLoadProgress,
    requestOnMessage,
  };
};

export default useWebViewController;
