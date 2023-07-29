import Layout from "../component/Layout/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainPage() {
    const { url } = useParams();
    let info = {};
    const [member, setMember] = useState({});

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000
    };

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('member'));
        const thumbnail = JSON.parse(sessionStorage.getItem('memberThumbnail'));
        setMember(data);
        info = data;
        if (info != null) {
            // const hospital_phone = document.getElementById('hospital_phone');
            // const hospital_phone_display = document.getElementById('hospital_phone_display');
            // const kakao_link = document.getElementById('kakao_main_link');
            // const kakao_link_name = document.getElementById('kakao_main_link_name');
            // const comment = document.getElementById('comment');
            // const maker_name = document.getElementById('maker_name');
            // const address = document.getElementById('address');
            // const address_detail = document.getElementById('address_detail');
            // const address_construct_name = document.getElementById('address_construct_name');

            // let imageDiv = document.getElementById('imageDiv');
            // imageDiv.innerHTML = "";

            // hospital_phone.href = `tel:${info.hospital_phone.replaceAll("-", "")}`;
            // hospital_phone_display.innerHTML = info.hospital_phone;
            // if (info.kakao_link == null || info.kakao_link == "" || info.kakao_link == undefined) {
            //     kakao_link.style.display = "none";
            // }

            // kakao_link.href = info.kakao_link;
            // kakao_link_name.innerHTML = info.hospital_name;
            // comment.innerHTML = info.comment;
            // address.innerHTML = info.address;
            // address_detail.innerHTML = info.address_detail;
            // address_construct_name.innerHTML = info.hospital_name;

            for (let i = 0; i < thumbnail.length; i++) {
                let divElement = document.createElement('div');
                let imgElement = document.createElement('img');
                if (i === 0) {
                    divElement.className = "carousel-item active";
                    imgElement.src = process.env.REACT_APP_API_IMAGE_ORIGIN + thumbnail[i].file_path;
                    imgElement.className = "d-block w-100";
                    divElement.appendChild(imgElement);
                } else {
                    divElement.className = "carousel-item";
                    imgElement.src = process.env.REACT_APP_API_IMAGE_ORIGIN + thumbnail[i].file_path;
                    imgElement.className = "d-block w-100";
                    divElement.appendChild(imgElement);
                }
                // imageDiv.appendChild(divElement);
            }
        }
    }, [url]);

    const goHome = () => {
        window.location.href = `/${url}`;
    }

    const goSupport = () => {
        window.location.href = `/support/${url}`;
    }

    const goComparison = () => {
        window.location.href = `/comparison/${url}`;
    }

    const goCard = () => {
        window.location.href = `/card/${url}`;
    }

    const goShopList = () => {
        window.location.href = `/shopList/${url}`;
    }

    const goClaims = () => {
        window.location.href = `/claims/${url}`;
    }

    return (
        <Layout url={url}>
            <main>
                <div id="carouselExampleIndicators_mobile" className="carousel slide border-top border-bottom"
                    data-bs-ride="carousel">
                    <div className="carousel">
                        <Slider {...settings}>
                            <div id="imageDiv">

                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="bg-light" style={{
                    backgroundImage: "url(/image/dog.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                    <div className="p-3">
                        <div className="fw-bold">안녕하세요 카리루 입니다.</div>
                        <div className="fs-6_5 px-3 pt-1"><span></span>
                            <span id="comment">
                            </span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <a className="d-flex align-items-center justify-content-center px-3 py-1 w-100" id="hospital_phone"
                        href="tel:18770117">
                        <img src="/image/icons/incuiry_01.svg" className="d-inline-block" alt="..." />
                        <div>
                            <div className="fs-6_5 ms-2">전화문의</div>
                            <div className="fs-6_5 ms-2" id="hospital_phone_display">032-222-3333</div>
                        </div>
                    </a>
                    <a className="align-items-center justify-content-center px-3 py-1 w-100" style={{ display: "flex" }}
                        id="kakao_main_link"
                        href="http://pf.kakao.com/_EMMFxj" target="_blank">
                        <img src="/image/icons/incuiry_02.svg" className="d-inline-block" alt="..." />
                        <div>
                            <div className="fs-6_5 ms-2">카톡문의</div>
                            <div className="fs-6_5 ms-2" id="kakao_main_link_name">car riru</div>
                        </div>
                    </a>
                </div>
                
                <div className="container mt-4">
                <div id="demo" className="d-flex align-items-center w-100 py-2"  class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>

                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <img src="/image/icons/c3.jpg" alt="Los Angeles" class="rounded mx-auto d-block" style={{height: "500px"}} />
                        </div>
                        <div class="carousel-item">
                            <img src="/image/icons/c2.jpg" alt="Chicago" class="rounded mx-auto d-block" style={{height: "500px"}} />
                        </div>
                        <div class="carousel-item">
                            <img src="/image/icons/c1.jpg" alt="New York" class="rounded mx-auto d-block" style={{height: "500px"}} />
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
                    <div className="mb-3">
                        <a onClick={() => goComparison()} target="_self">
                            <div className="d-flex align-items-center border rounded-3 px-3" style={{ backgroundColor: "#CCCCCC" }}>
                                <div className="d-flex align-items-center w-100 py-2">
                                    <img src="/image/icons/image1.png" className="d-block w-25" alt="..." />
                                    <div className="w-50 pl-5">
                                        <div className="fw-bold mb-1 fs-5">가지러 가기</div>
                                        <div className="fs-6_5">가까운 카리루존 찾기</div>
                                    </div>
                                </div>
                                <i className="bi bi-chevron-right me-1"></i>
                            </div>
                        </a>
                    </div>
                    <div className="mb-3">
                        <a onClick={() => goClaims()} target="_self">
                            <div className="d-flex align-items-center border rounded-3 px-3" style={{ backgroundColor: "#CCCCCC" }}>
                                <div className="d-flex align-items-center w-100 py-2">
                                    <img src="/image/icons/image2.png" className="d-block w-25" alt="..." />
                                    <div className="50 pl-5">
                                        <div className="fw-bold mb-1 fs-5">여기로 부르기</div>
                                        <div className="fs-6_5">원하는 차 받기</div>
                                    </div>
                                </div>
                                <i className="bi bi-chevron-right me-1"></i>
                            </div>
                        </a>
                    </div>
                    <div className="mb-3">
                        <a onClick={() => goCard()} target="_self">
                            <div className="d-flex align-items-center border rounded-3 px-3" style={{ backgroundColor: "#CCCCCC" }}>
                                <div className="d-flex align-items-center w-100 py-2">
                                    <img src="/image/icons/image3.png" className="d-block w-25" alt="..." />
                                    <div className="w-50 pl-5">
                                        <div className="fw-bold mb-1 fs-5">장기 렌트</div>
                                        <div className="fs-6_5">새차를 내 차처럼!</div>
                                    </div>
                                </div>
                                <i className="bi bi-chevron-right me-1"></i>
                            </div>
                        </a>
                    </div>
                    <div className="mb-3">
                        <a onClick={() => goSupport()} target="_self">
                            <div className="d-flex align-items-center border rounded-3 px-3" style={{ backgroundColor: "#CCCCCC" }}>
                                <div className="d-flex align-items-center w-100 py-2">
                                    <img src="/image/icons/image4.png" className="d-block w-25" alt="..." />
                                    <div className="w-50 pl-5">
                                        <div className="fw-bold mb-1 fs-5">이벤트</div>
                                        <div className="fs-6_5">한정 특가!</div>
                                    </div>
                                </div>
                                <i className="bi bi-chevron-right me-1"></i>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className="my-4 px-3">
                    <Map center={{lat: member.loc_lat, lng: member.loc_lng}}
                         style={{width: "570px", height: "400px"}} draggable={false}>
                        <MapMarker position={{lat: member.loc_lat, lng: member.loc_lng}}>
                        </MapMarker>
                    </Map>
                    <div className="mt-3 fw-bold"><i className="bi bi-map me-1"></i>찾아오시는 길</div>
                    <div className="mt-1 fs-6_5"><span id="address">부산광역시 동구 범일로102번길 16-3</span> <span id="address_detail">2층</span></div>
                    <div className="fs-6_5" id="address_construct_name">제이동물병원</div>
                </div> */}
            </main>
        </Layout>
    );
}

export default MainPage;