import Layout from "../component/Layout/Layout";
import { useParams } from "react-router-dom";
import {Map, MapMarker} from "react-kakao-maps-sdk";

function Comparison() {
    const { url } = useParams();

    return (
        <Layout url={url}>
            <main>
                <hr className="bg-secondary my-0" />

                <div className="container mt-3">
                    <div className="row">

                        <div className="my-4 px-3">
                            <Map center={{ lat: 37.43864957689775, lng: 126.67474818582193 }}
                                style={{ width: "570px", height: "400px" }} draggable={false}>
                                <MapMarker position={{ lat: 37.43864957689775, lng: 126.67474818582193 }}>
                                </MapMarker>
                            </Map>
                            <div className="mt-3 fw-bold"><i className="bi bi-map me-1"></i>위치</div>
                            <div className="mt-1 fs-6_5"><span id="address">인천 미추홀구 매소홀로488번길 6-32 태승빌딩 5층</span> <span id="address_detail"></span></div>
                            <div className="fs-6_5" id="address_construct_name">인천일보 아카데미</div>
                        </div>
                        {/* <div className="mb-5 w-100">
                            <img src="" className="d-block mb-2 w-100"
                                alt="..." />
                            <button type="button" className="btn btn-dark mt-0 mt-xxl-4 py-3 w-100"
                                            data-bs-toggle="modal"
                                            data-bs-target="#hyundai_modal">
                                        <i className="bi bi-check2-circle me-1"></i>자세히 보기
                                    </button>
                        </div>
                        <div className="mb-5 w-100">
                            <img src="" className="d-block mb-2 w-100"
                                alt="..." />
                            <button type="button" className="btn btn-dark mt-0 mt-xxl-4 py-3 w-100"
                                            data-bs-toggle="modal"
                                            data-bs-target="#samsung_modal">
                                        <i className="bi bi-check2-circle me-1"></i>자세히 보기
                                    </button>
                        </div>
                        <div className="mb-5 w-100">
                            <img src=""
                                className="d-block mb-2 w-100"
                                alt="..." />
                            <button type="button" className="btn btn-dark mt-0 mt-xxl-4 py-3 w-100"
                                            data-bs-toggle="modal"
                                            data-bs-target="#meritz_modal">
                                        <i className="bi bi-check2-circle me-1"></i>자세히 보기
                                    </button>
                        </div> */}
                    </div>
                    <div className="d-xl-flex w-100 me-5 mb-4">
                        <div className="d-flex justify-content-center align-items-center me-xl-4"><img
                            src="/image/icons/image1.png" className="d-block w-100" alt="..." /></div>
                        <div className="d-flex flex-column justify-content-center w-100">
                            <div className="fs-4 mb-1 text-pet">선택</div>
                            <div>선택</div>
                            <button type="button" className="btn btn-outline-pet mt-4 py-3" data-bs-toggle="modal"
                                data-bs-target="#comparison_modal">
                                <i className="bi bi-check2-circle me-1"></i>신청하기
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Comparison;