import AngelsWebView from '@/components/AngelsWebView';
//
import type { WebViewComponent } from 'components';

const MyPage: WebViewComponent = (props) => {
  return <AngelsWebView {...props} pageKey="/mypage" />;
};

export default MyPage;
