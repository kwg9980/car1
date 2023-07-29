function Footer(){
    return(
        <footer className="bg-dark text-light mt-auto py-4">
            <div className="container py-4">
                <div className="d-xl-flex justify-content-between">
                    <a className="" href="/" target="_self">
                        <img src="/image/logo/Group_2.svg" className="d-block w-120" alt="..."/>
                    </a>
                    <div className="text-pet mt-xxl-0 mt-3">
                        <div>CUSTOMER CENTER</div>
                        <div className="fs-3">Tel.1111-2222</div>
                    </div>
                </div>
                <div className="d-xl-flex justify-content-between align-items-end fs-6_5">
                    <div className="mt-3 fs-6_5">
                        <div className="mt-1">· 대표 : 김우진</div>
                        <div className="mt-1">· 주소 : 인천 미추홀구 매소홀로488번길 6-32 태승빌딩 5층</div>
                        <div className="mt-1">· 평일 : 8:30~17:00 | 점심시간 : 12:00~13:00 | 주말/공휴일 : 휴무</div>
                        <div className="mt-1">· COPYRIGHT(c) 2023 CAR RIRU ALL RIGHTS RESERVED .</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;