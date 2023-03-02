import AngelsWebView from '@/components/AngelsWebView';
//
import type { WebViewComponent } from 'components';

const Events: WebViewComponent = (props) => {
  return <AngelsWebView {...props} pageKey="/events" />;
};

export default Events;
