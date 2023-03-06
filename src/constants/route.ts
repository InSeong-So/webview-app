// export const 타겟_주소 = 'http://localhost:3000';
export const 타겟_주소 = 'https://www-alpha.nu-angels.com';

export const 페이지 = {
  메인: '/',
  로그인: '/login',
  회원가입_메인: '/signup',
  회원가입_이메일: '/signup/email',
  회원가입_SSO: '/signup/sso',
  비밀번호_찾기: '/help/password',
  비밀번호_재설정: '/help/password/[:id]',
  마이페이지: '/myPage',
  딜_메인: '/deal',
  딜_편집: '/deal/edit',
  리드엔젤_메인: '/leadAngel',
  로그아웃: '/logout',
  포트폴리오: '/portfolio',
  스타트업: '/events?page=startups',
};

export const 페이지_블랙리스트 = [
  페이지.마이페이지,
  페이지.딜_메인,
  페이지.리드엔젤_메인,
  페이지.포트폴리오,
];

export const 페이지_그레이리스트 = [
  페이지.로그인,
  페이지.회원가입_메인,
  페이지.회원가입_이메일,
  페이지.회원가입_SSO,
  페이지.비밀번호_찾기,
  페이지.비밀번호_재설정,
];

export type 페이지_이름_키 =
  | 'Home'
  | 'Login'
  | 'Signup'
  | 'MyPage'
  | 'Deal'
  | 'LeadAngel'
  | 'Portfolio'
  | 'Events';

export const 페이지_이름: Record<string, 페이지_이름_키> = {
  [페이지.메인]: 'Home',
  [페이지.로그인]: 'Login',
  [페이지.회원가입_메인]: 'Signup',
  [페이지.마이페이지]: 'MyPage',
  [페이지.딜_메인]: 'Deal',
  [페이지.리드엔젤_메인]: 'LeadAngel',
  [페이지.포트폴리오]: 'Portfolio',
  [페이지.스타트업]: 'Events',
};
