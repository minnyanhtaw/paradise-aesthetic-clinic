import React from "react";
import Button from "../../../../../ui/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-20 relative">
      <div className=" max-w-2xl mx-auto flex flex-col gap-10 items-center">
        <div className=" flex flex-col gap-4">
          <p className="text-sm text-zinc-50 text-center">Glow Beyond Limits</p>
          <h1 className="text-5xl font-semibold text-center font-heading text-zinc-50">
            Expert Care of Timeless Beauty
          </h1>
          <p className=" font-medium text-center text-zinc-50 leading-6">
            Timeless beauty begins with expert attention to detail. Our
            expertise brings out your most confident, timeless self.
          </p>
        </div>
        <Link to={"/book-appointment"}>
          <Button className="px-4 py-2">Book Consultation</Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
