import React from "react";
import Container from "../../../components/Container";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import vector from "../../../assets/img/Vector.png";
import Logo from "../../../components/Logo";
import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogoLight, PiYoutubeLogoThin } from "react-icons/pi";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { PiPhone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="mt-auto relative">
      <div className="p-12 relative">
        <img
          src={vector}
          className="absolute top-0 right-0 w-full h-full -z-10"
        />
        <div className=" flex flex-col  gap-12 max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-5">
            <h3 className=" font-heading text-heading-950 text-3xl text-center">
              Subscribe to our newsletter!
            </h3>
            <p className=" text-zinc-900 text-center">
              Contact us today to schedule your consultation or learn more about
              our treatments. Your transformation starts now!
            </p>
          </div>
          <form action="" className=" flex items-center gap-2">
            <Input type="email" placeholder="Enter your email" />
            <Button type="submit" className="px-4 py-2">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="bg-zinc-200 pt-6 pb-14">
        <Container>
          <div className="grid grid-cols-3 gap-5">
            <div className="flex col-span-1 flex-col justify-center gap-6">
              <div>
                <Logo className="h-20" />
              </div>
              <div className="flex gap-4 col-span-1">
                <Link
                  to={"https://www.facebook.com"}
                  className="bg-zinc-300 p-2 rounded-sm place-items-center align-middle"
                >
                  <SlSocialFacebook className="size-4" />
                </Link>
                <Link
                  to={"https://www.youtube.com/"}
                  className="bg-zinc-300 p-2 rounded-sm place-items-center align-middle"
                >
                  <PiYoutubeLogoThin className="size-4" />
                </Link>
                <Link
                  to={"https://www.instagram.com/"}
                  className="bg-zinc-300 p-2 rounded-sm place-items-center align-middle"
                >
                  <PiInstagramLogoLight className="size-4" />
                </Link>
                <Link
                  to={"https://www.twitter.com/"}
                  className="bg-zinc-300 p-2 rounded-sm place-items-center align-middle"
                >
                  <TbBrandTwitterFilled className="size-4" />
                </Link>
              </div>
            </div>
            <div className="grid col-span-2 grid-cols-4 gap-5">
              <div className="py-5 flex flex-col gap-4 col-span-1">
                <h6 className="font-heading text-heading-950">Quick Links</h6>
                <div className="flex flex-col gap-2 text-sm">
                  <Link to={"/about-us"}>About Us</Link>
                  <Link to={"/issues"}>Issues</Link>
                  <Link to={"/blog"}>Blog</Link>
                </div>
              </div>
              <div className="py-5 flex flex-col gap-4 col-span-1">
                <h6 className="font-heading text-heading-950">Support</h6>
                <div className="flex flex-col gap-2 text-sm">
                  <Link to={"/book-appointment"}>Booking</Link>
                  <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
                  <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </div>
              </div>
              <div className="py-5 flex flex-col gap-4 col-span-2">
                <h6 className="font-heading text-heading-950">Contact Us</h6>
                <div className="flex flex-col gap-2 text-sm">
                  <Link className=" flex gap-2 items-center">
                    <SlLocationPin className="size-4" />
                    No-305, Pyay Road, Diamond Condo, Yangon
                  </Link>
                  <Link className=" flex gap-2 items-center">
                    <HiOutlineMail className="size-4" />
                    paradise2020@gmail.com
                  </Link>

                  <Link className=" flex gap-2 items-center">
                    <PiPhone className="size-4" />
                    +95966448752
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
