[헤리터 갤러리 리스트 페이지]
홈디렉토리 =>
D:\webPub_0513\kjj\ex\Part03_BBS
   \p02_GalleryList_Heriter
html => bbs/galleryList.html
css => style/style_Reset.css
                /style.css
js  =>  script/jquery-3.6.0.min.js
                 /script.js
img   => images/

-------------------------------------


[Design]
1. 스타일링 - 포샵, CSS 등을 사용하여
                  화면을 시각적으로
                  돋보이도록 만드는 작업
2. 기획 - 설계를 의미함.


[설계(Design) 작업]
1. 헤더영역
    => div#joinEventArea>div#joinEventWrap

         div#outerHeaderArea
            >header#headerWrap
              >div#headerLogoArea + 
                (div#headerMenuArea
                      >nav#headerLNB + 
                        div#cartNsideGNB)

  1) 이벤트
    회원가입하면 16만원 쿠폰팩 이벤트 영역
  2) 헤더영역
      로고 + 헤더LNB(주문, 로그인, 회원가입)
             +  장바구니 +
       사이드GNB메뉴 버튼


2. Top버튼 + 카카오 회원가입버튼
    => div#sideFixedArea>
           div#topBtnArea + div#cacaoJoinArea

3. 사이드 GNB 메뉴
   => nav#sideGNBArea >
       div#eventMsgArea 
            1) 쿠폰 즉시 발급 안내 텍스트 : 
                회원가입하면 16만원 쿠폰팩 
            2) 목록, 닫기 버튼은 
                header#headerArea에서 제작

        + div#sideMenuLNB(cart, order, login)
        + ul#mainMenu


=> 와이어프레임


참고. 포트폴리오에서
       작업대상을 선정했고,
       벤치마킹 사이트도 지정했으며
       어떤 작업을 진행할건지 목록을 작성하고
       (메인페이지, 게시판, 상품목록, 회원가입,
        로그인, 장바구니, 기타 등등 본인이 
        필요하다고 생각하거나 또는 만들고 싶은 것들에
        대한 목록 작성, 스스로 만들기 어렵다고
        판단하면 제외하고 작업진행)
        진행할 작업목록이 작성되었다면
         각 작업에 대한 와이어프레임을 제작함.

------------------------------------------------------

4. div#wrap
5. footer 작업



---------------------


[Github 2021.8월 이후 추가 인증방식 적용]
1. 로그인
2. 우측 상단 [마이페이지] 아이콘 클릭
   => 펼침메뉴 하단에 [Settings] 클릭
3. 좌측 [Accounts settings] 사이드 메뉴 하단 
   [Developer settings] 클릭
4. [Developer settings] 사이드 메뉴 하단 
   [Personal access tokens] 클릭
5. [Personal access tokens] 제목 오른쪽
    [Generate new token] 버튼 클릭
6. [New personal access token] 내용 입력
   1) Note => 본인이 지정하는 토근 이름
         본인아이디_날짜_기타내용
         zzupd_211018_AccessToken
   2) Expiration (토근 유효 기간 설정)
        본인이 임의 설정
   3) Select scopes (접속 허용 범위 설정)
       => repo 전체 체크
   4) 하단의 [Generate token] 클릭    
7. 생성된 토큰 코드 별도 보관 
   => 보기. 훈련교사 토큰 

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

 --------------------------------------- Github 토큰 설정
+  VSC 접속 설정


