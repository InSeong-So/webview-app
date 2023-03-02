declare module 'components' {
  import type { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
  import type { FunctionComponent } from 'react';

  type AngelsWebViewProps = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<ParamListBase, string>;
  };

  type WebViewComponent<T = {}> = FunctionComponent<AngelsWebViewProps & T>;
}
