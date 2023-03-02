import AngelsWebView from '@/components/AngelsWebView';
//
import type { WebViewComponent } from 'components';

const Portfolio: WebViewComponent = (props) => {
  return <AngelsWebView {...props} pageKey="/portfolio" />;
};

export default Portfolio;
