import React from "react";
import Container from "../../../components/Container";
import Input from "../../../../src/ui/Input";
import Button from "../../../../src/ui/Button";
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
        {/* <img
          src={}
          className="absolute top-0 right-0 w-full h-full -z-10"
        /> */}
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
            <Button className="px-4 py-2">Subscribe</Button>
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
                  className="bg-zinc-300 p-2 rounded place-items-center align-middle hover:bg-transparent duration-100"
                >
                  <SlSocialFacebook className="size-4" />
                </Link>
                <Link
                  to={"https://www.youtube.com/"}
                  className="bg-zinc-300 p-2 rounded place-items-center align-middle hover:bg-transparent duration-100"
                >
                  <PiYoutubeLogoThin className="size-4" />
                </Link>
                <Link
                  to={"https://www.instagram.com/"}
                  className="bg-zinc-300 p-2 rounded place-items-center align-middle hover:bg-transparent duration-100"
                >
                  <PiInstagramLogoLight className="size-4" />
                </Link>
                <Link
                  to={"https://www.twitter.com/"}
                  className="bg-zinc-300 p-2 rounded place-items-center align-middle hover:bg-transparent duration-100"
                >
                  <TbBrandTwitterFilled className="size-4" />
                </Link>
              </div>
            </div>
            <div className="grid col-span-2 grid-cols-4 gap-5">
              <div className="py-5 flex flex-col gap-4 col-span-1">
                <h6 className="font-heading text-heading-950">Quick Links</h6>
                <div className="flex flex-col gap-2 text-sm">
                  <Link className=" hover:text-heading-900" to={"/about-us"}>
                    About Us
                  </Link>
                  <Link className=" hover:text-heading-900" to={"/issues"}>
                    Issues
                  </Link>
                  <Link className=" hover:text-heading-900" to={"/blog"}>
                    Blog
                  </Link>
                </div>
              </div>
              <div className="py-5 flex flex-col gap-4 col-span-1">
                <h6 className="font-heading text-heading-950">Support</h6>
                <div className="flex flex-col gap-2 text-sm">
                  <Link
                    className=" hover:text-heading-900"
                    to={"/book-appointment"}
                  >
                    Booking
                  </Link>
                  <Link
                    className=" hover:text-heading-900"
                    to={"/terms-and-conditions"}
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    className=" hover:text-heading-900"
                    to={"/privacy-policy"}
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div className="py-5 flex flex-col gap-4 col-span-2">
                <h6 className="font-heading text-heading-950">Contact Us</h6>
                <div className="flex flex-col gap-2 text-sm">
                  <Link className=" flex gap-2 hover:text-heading-900 items-center">
                    <SlLocationPin className="size-4" />
                    No-305, Pyay Road, Diamond Condo, Yangon
                  </Link>
                  <Link className=" flex gap-2 hover:text-heading-900 items-center">
                    <HiOutlineMail className="size-4" />
                    paradise2020@gmail.com
                  </Link>

                  <Link className=" flex gap-2 hover:text-heading-900 items-center">
                    <PiPhone className="size-4" />
                    +95966448752
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className=" h-16 bg-primary-950 flex items-center justify-center">
        <p className=" text-center text-zinc-50">
          Paradise Aesthetic Clinic &copy; 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
