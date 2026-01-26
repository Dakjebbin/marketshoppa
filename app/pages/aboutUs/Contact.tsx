import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="mt-20">
      <div className="md:w-[90%] w-[93%] m-auto bg-[#e8f5e24d] md:px-16 px-8 md:py-16 py-10 rounded-4xl flex lg:flex-row flex-col gap-8">
        <div>
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-600 font-light">
            Whether you&apos;re a customer with a question or a shopper looking
            to join our community, we&apos;d love to hear from you.
          </p>

          <div className="flex flex-col gap-6 mt-5">
            <div className="flex items-center gap-3">
              <div className="bg-white inline-flex px-3 py-3 rounded-full">
                <MdOutlineMail className="text-[#3ea40b] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email us</p>
                <a
                  href="mailto:info@marketShoppa.com"
                  className="font-semibold"
                >
                  info@marketShoppa.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white inline-flex px-3 py-3 rounded-full">
                <FaPhoneAlt className="text-[#3ea40b] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Call/Whatsapp</p>
                <a className="font-semibold" href="tel:+234 9164774182">
                  +234 (0) 9164774182
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white inline-flex px-3 py-3 rounded-full">
                <GrLocation className="text-[#3ea40b] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Our Office</p>
                <address className="font-semibold">
                  Port Harcourt, Rivers State, Nigeria
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl px-7 py-5">
          <form>
            <div className="flex items-center justify-between gap-3">
              <span>
                <label className="font-semibold text-sm text-gray-500">Full name</label>
                <input className="px-2 py-3 outline outline-[#3ea40b] w-[50%] bg-gray-50" type="text" placeholder="John Doe" />
              </span>

              <span>
                <label className="font-semibold text-sm text-gray-500">Email address</label>
                <input className="w-[50%]" type="email" placeholder="john@example.com" />
              </span>
            </div>

            <div>
                <label>Message</label>
                <textarea placeholder="How can we help?" name="" id=""></textarea>
            </div>

            <button>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
