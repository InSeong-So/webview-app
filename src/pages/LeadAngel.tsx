import AngelsWebView from '@/components/AngelsWebView';
//
import type { WebViewComponent } from 'components';

const LeadAngel: WebViewComponent = (props) => {
  return <AngelsWebView {...props} pageKey="/leadAngel" />;
};

export default LeadAngel;
