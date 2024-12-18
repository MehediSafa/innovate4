import React from 'react';
import Container from './Container';
import banner1 from '../assets/banner1.png';
import rev1 from '../assets/rev1.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// Custom Arrow Components
function CustomNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-[-25px] transform -translate-y-1/2 z-10 w-[50px] h-[50px] flex items-center justify-center bg-[#FF7628] rounded-full cursor-pointer shadow-md hover:bg-[#FF5722]"
            onClick={onClick}
        >
            <GrFormNext className="text-white text-[24px]" />
        </div>
    );
}

function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-[-25px] transform -translate-y-1/2 z-10 w-[50px] h-[50px] flex items-center justify-center bg-[#FF7628] rounded-full cursor-pointer shadow-md hover:bg-[#FF5722]"
            onClick={onClick}
        >
            <GrFormPrevious className="text-white text-[24px]" />
        </div>
    );
}

const Review = () => {
    // Slider Settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Mobile Devices
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-[60px] bg-[#F9FAFC]">
            <Container>
                <div className="text-center mb-[40px]">
                    <h2 className="font-sans font-extrabold text-[36px] md:text-[48px] text-[#192239]">
                        What Our Clients Say
                    </h2>
                    <p className="text-[#6C7D93] font-medium text-[16px] md:text-[18px] max-w-[600px] mx-auto mt-4">
                        Here are some valuable testimonials from our amazing clients.
                    </p>
                </div>

                <div className="relative">
                    <Slider {...settings}>
                        {/* Review Card 1 */}
                        <div className="p-6 flex flex-col items-center bg-white rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300 mx-3">
                            <img src={banner1} alt="Client" className="w-[100px] h-[100px] rounded-full mb-4" />
                            <p className="text-[#6C7D93] font-normal text-[16px] text-center">
                                "People use digital devices instead of visiting physical shops. Digital marketing campaigns are becoming more prevalent and efficient."
                            </p>
                            <div className="flex items-center mt-4">
                                <img src={rev1} alt="Reviewer" className="w-[50px] h-[50px] rounded-full" />
                                <div className="ml-3">
                                    <h3 className="text-[#202427] font-bold text-[18px]">Eleanor Pena</h3>
                                    <p className="text-[#6C7D93] text-[14px]">Architect</p>
                                </div>
                            </div>
                        </div>

                        {/* Review Card 2 */}
                        <div className="p-6 flex flex-col items-center bg-[#E3F2FD] rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300 mx-3">
                            <img src={banner1} alt="Client" className="w-[100px] h-[100px] rounded-full mb-4" />
                            <p className="text-[#6C7D93] font-normal text-[16px] text-center">
                                "Their expertise and dedication have been invaluable in our company's growth journey."
                            </p>
                            <div className="flex items-center mt-4">
                                <img src={rev1} alt="Reviewer" className="w-[50px] h-[50px] rounded-full" />
                                <div className="ml-3">
                                    <h3 className="text-[#202427] font-bold text-[18px]">Kristin Watson</h3>
                                    <p className="text-[#6C7D93] text-[14px]">Designer</p>
                                </div>
                            </div>
                        </div>

                        {/* Review Card 3 */}
                        <div className="p-6 flex flex-col items-center bg-[#FFEBEE] rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300 mx-3">
                            <img src={banner1} alt="Client" className="w-[100px] h-[100px] rounded-full mb-4" />
                            <p className="text-[#6C7D93] font-normal text-[16px] text-center">
                                "The team provided excellent results. Their strategy brought us amazing growth and leads."
                            </p>
                            <div className="flex items-center mt-4">
                                <img src={rev1} alt="Reviewer" className="w-[50px] h-[50px] rounded-full" />
                                <div className="ml-3">
                                    <h3 className="text-[#202427] font-bold text-[18px]">Devon Lane</h3>
                                    <p className="text-[#6C7D93] text-[14px]">Marketing Lead</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
        </section>
    );
};

export default Review;
