import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        {" "}
        <div className="testimonials testimonials1">
          <div className="containerr">
            <div className="testimonial-heading">
              <div className="svg-wrapper">
                <RoomServiceIcon style={{ color: "gray", fontSize: "100px" }} />
              </div>
              <div className="heading">
                <div className="line"></div>
                <h1>Our Services</h1>
                <div className="line"></div>
              </div>
            </div>
            <div className="content">
              <span>"</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita eum quo incidunt inventore ut, similique sit tempora
                itaque qui a officiis voluptate. Repudiandae rerum dolorem neque
                omnis eum sed non eveniet fugiat distinctio. Odio iure
                laudantium magnam ab nostrum!{" "}
              </p>
            
            <p id="ted">Ted Chapmen, <span>Client</span></p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials testimonials2">
          <div className="containerr">
            <div className="testimonial-heading">
              <div className="svg-wrapper">
                <RoomServiceIcon style={{ color: "gray", fontSize: "100px" }} />
              </div>
              <div className="heading">
                <div className="line"></div>
                <h1>Our Services</h1>
                <div className="line"></div>
              </div>
            </div>
            <div className="content">
              <span>"</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita eum quo incidunt inventore ut, similique sit tempora
                itaque qui a officiis voluptate. Repudiandae rerum dolorem neque
                omnis eum sed non eveniet fugiat distinctio. Odio iure
                laudantium magnam ab nostrum!{" "}
              </p>
            
            <p id="ted">Ted Chapmen, <span>Client</span></p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonials testimonials3">
          <div className="containerr">
            <div className="testimonial-heading">
              <div className="svg-wrapper">
                <RoomServiceIcon style={{ color: "gray", fontSize: "100px" }} />
              </div>
              <div className="heading">
                <div className="line"></div>
                <h1>Our Services</h1>
                <div className="line"></div>
              </div>
            </div>

            <div className="content">
              <span>"</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita eum quo incidunt inventore ut, similique sit tempora
                itaque qui a officiis voluptate. Repudiandae rerum dolorem neque
                omnis eum sed non eveniet fugiat distinctio. Odio iure
                laudantium magnam ab nostrum!{" "}
              </p>
            
            <p id="ted">Ted Chapmen, <span>Client</span></p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonials;
