import AngelsWebView from '@/components/AngelsWebView';
//
import type { WebViewComponent } from 'components';

const Deal: WebViewComponent = (props) => {
  return <AngelsWebView {...props} pageKey="/deal" />;
};

export default Deal;
