import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/2.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Kesehatan terbaik dalam setiap tegukan.
        </h1>
        <p className="primary-text">
          Kami percaya bahwa kesehatan adalah aset berharga yang harus dijaga
          dengan baik. Oleh karena itu, kami berkomitmen untuk menyajikan produk
          berkualitas tinggi yang terbuat dari bahan-bahan alami pilihan, tanpa
          tambahan bahan kimia berbahaya.
        </p>
        <p className="primary-text">
          Kami bangga menjadi bagian dari perjalanan kesehatan Anda. Dukungan
          dan kepercayaan Anda kepada produk kami menjadi dorongan bagi kami
          untuk terus berinovasi dan menyediakan solusi kesehatan yang dapat
          memenuhi harapan Anda.
        </p>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;
