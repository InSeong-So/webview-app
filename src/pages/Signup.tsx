import AngelsWebView from '@/components/AngelsWebView';
//
import type { WebViewComponent } from 'components';

const Signup: WebViewComponent = (props) => {
  return <AngelsWebView {...props} pageKey="/signup" />;
};

export default Signup;
