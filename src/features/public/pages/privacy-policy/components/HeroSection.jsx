import React from "react";
import Container from "../../../../../components/Container";
import Breadcrumb from "../../../../../components/Breadcrumb";
import heroBackground from "../../../../../assets/img/Leonardo_Kino_XL_aesthetic_clinic_midnight_blue_color_3 1.png";

const HeroSection = () => {
  return (
    <section className=" relative ">
      <img
        src={heroBackground}
        className=" absolute left-0 top-0 w-full h-full -z-10"
      />
      <Container>
        <div className=" flex flex-col gap-3 py-48">
          <h2 className=" font-heading text-4xl font-medium text-zinc-50">
            Privacy Policy
          </h2>
          <Breadcrumb currentPageTitle={"Privacy Policy"} />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
