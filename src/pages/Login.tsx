import AngelsWebView from '@/components/AngelsWebView';
//
import type { WebViewComponent } from 'components';

const Login: WebViewComponent = (props) => {
  return <AngelsWebView {...props} pageKey="/login" />;
};

export default Login;
