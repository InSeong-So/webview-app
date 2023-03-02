import AngelsWebView from '@/components/AngelsWebView';
//
import type { WebViewComponent } from 'components';

const Home: WebViewComponent = (props) => {
  return <AngelsWebView {...props} pageKey="/" />;
};

export default Home;
