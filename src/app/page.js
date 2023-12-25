import PrimeButton from "@/components/Buttons/PrimeButton";
import Homehero from "@/components/Hero/Homehero";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <Homehero />

      {/* category section cards */}
      <section className="category-section">
        <p className="section-title">CATEGORY</p>
        <h2 className="title text-center">We Offer Best Services</h2>
        <div className="card-section flex">
          <div className="card card-item-1">
            <img alt="tour-guide" src="./Images/tour-guide 1.png" />
            <h3 className="card-heading">Guided Tours</h3>
            <p className="card-description">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
          <div className="card card-item-2">
            <img alt="tour-guide" src="./Images/travelling 1.png" />
            <h3 className="card-heading">Best Flights Options</h3>
            <p className="card-description">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
          <div className="card card-item-3">
            <img alt="tour-guide" src="./Images/hands 1.png" />
            <h3 className="card-heading">Religious Tours</h3>
            <p className="card-description">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
          <div className="card card-item-4">
            <img alt="tour-guide" src="./Images/medical-team 1.png" />
            <h3 className="card-heading">Medical insurance</h3>
            <p className="card-description">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
        </div>
      </section>

      {/* honeymoon special */}

      <section className="md:max-w-[1190px] honeymoon-section flex flex-wrap-reverse md:flex-nowrap justify-center items-center gap-[50px] my-20">
        <div class="image-container max-w-[50%]">
          <img
            src="./Images/large-image.jpeg"
            className="large-image"
            alt="Large Image"
          />
          <img
            src="./Images/gradient.svg"
            className="absolute top-[-9px] right-[-6px] z-1 h-[100%]"
            alt="Large Image"
          />
          <img
            src="/Images/small-image1.png"
            className="small-image small-image1"
            alt="Small Image 1"
          />
          <img
            src="./Images/small-image2.png"
            className="small-image small-image2"
            alt="Small Image 2"
          />
          <div className="frame"></div>
        </div>

        <div className="content max-w-[90%] md:max-w-[50%]">
          <p className="text-[#df6951] font-bold">Honeymoon Specials</p>
          <h2 className="text-[#181e4b]  text-[30px] leading-[30px]   md:text-[50px] font-bold md:leading-[55px] ">
            Our Romantic Tropical Destinations
          </h2>
          <p className="section-description text-black my-5">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <PrimeButton text="View Packages" />
        </div>
      </section>

      {/* booking resort  section  */}

      <section className="icons-box">
        <div className="content max-w-[90%] md:max-w-[50%]">
          <p className="text-[#df6951] font-bold">Fast & Easy</p>
          <h2 className="text-[#181e4b]  text-[30px] leading-[30px] md:text-[50px] font-bold md:leading-[55px] ">
            Get Your Favourite Resort Bookings
          </h2>
          <div className="icons-box flex flex-col">
            <div className="flex  gap-4  text-black py-5  ">
              <img className="" src="./Images/Group 7.svg" alt="group7" />
              <div className="">
                <p className="text-[#5E6282] text-[16px] font-bold">
                  Choose Destination
                </p>
                <p className="text-[#5E6282] font-[400]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
            <div className="flex  gap-4  text-black py-5 ">
              <img className="" src="./Images/Group 11.svg" alt="group7" />
              <div className="">
                <p className="text-[#5E6282] text-[16px] font-bold">
                  Check Availability
                </p>
                <p className="text-[#5E6282] font-[400]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
            <div className="flex  gap-4  text-black py-5 ">
              <img className="" src="./Images/Group 12.svg" alt="group7" />
              <div className="">
                <p className="text-[#5E6282] text-[16px] font-bold">Let’s Go</p>
                <p className="text-[#5E6282] font-[400]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img alt="flight" src="./Images/flight.png" />
        </div>
      </section>
    </main>
  );
}
