import { AiFillFileText } from "react-icons/ai";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import PlanFeature from "../components/choose-plan/PlanFeature";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import PlanSelector from "../components/choose-plan/PlanSelector";
import Faq from "../components/choose-plan/Faq";
import RedirectIfSubscribed from "../components/auth/RedirectIfSubscribed";
export default function Page() {
  return (
    <>
      <RedirectIfSubscribed />
      <section className="w-full">
        <div className="relative text-center w-full pt-12 mb-6 bg-navy md:rounded-b-[16rem]">
          <div className="max-w-250  mx-auto text-white py-0 px-6">
            <h1 className="text-[26px] md:text-5xl font-bold mb-8 md:mb-10">
              Get unlimited access to many amazing books to read
            </h1>
            <p className="text-base md:text-xl mb-8">
              Turn ordinary moments into amazing learning opportunities
            </p>
            <div className="flex justify-center max-w-85  mx-auto rounded-t-[180px] overflow-hidden">
              <Image
                src="/assets/pricing-top.png"
                alt="Pricing"
                width={860}
                height={722}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-267.5 w-full mx-auto px-6">
        <div className="w-full py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center text-center gap-6 max-w-200 mx-auto mb-14">
            <PlanFeature
              icon={<AiFillFileText />}
              highlight={"Key ideas in few min"}
              text={"with many books to read"}
            />
            <PlanFeature
              icon={<RiPlantFill />}
              highlight={"3 million"}
              text={"people growing with Summarist everyday"}
            />
            <PlanFeature
              icon={<FaHandshake />}
              highlight={"Precise recommendations"}
              text={"collections curated by experts"}
            />
          </div>
        </div>

        <h2 className="text-[32px] leading-tight text-navy text-center mb-8 font-bold">
          Choose the plan that fits you
        </h2>
        <PlanSelector />
        <Faq />
      </section>
      <Footer />
    </>
  );
}
