import React from "react";
import Container from "../../../../../components/Container";
import Button from "../../../../../ui/Button";
import DiscoverOurStory from "../../../../../assets/home-page/about-us-img.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const DiscoverOurStorySection = () => {
  return (
    <section className=" relative py-16">
      <Container>
        <div className=" flex items-center rounded-lg overflow-hidden h-[490px] bg-zinc-100">
          <div className=" basis-6/12">
            <img
              src={DiscoverOurStory}
              className="object-cover w-full"
              alt=""
            />
          </div>
          <div className=" basis-6/12 flex flex-col gap-10  p-[34px]">
            <div>
              <h3 className=" text-3xl font-heading text-heading-950 font-medium mb-4">
                Discover Our Story
              </h3>
              <p className=" mb-4 text-zinc-900">
                Our aesthetic clinic specializes in advanced, non-surgical
                treatments designed to enhance your natural beauty and boost
                your confidence.
              </p>
              <ol className="list-disc px-7 flex flex-col gap-2 text-zinc-900">
                <li>Highly Qualified Professionals</li>
                <li>Hygiene Standards</li>
                <li>Satisfied Clients</li>
                <li>Personalized Consultations</li>
              </ol>
            </div>
            <div>
              <Link to={"/about-us"}>
                <Button className="px-4 py-2 flex items-center gap-2">
                  Discover More <GoArrowUpRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DiscoverOurStorySection;
