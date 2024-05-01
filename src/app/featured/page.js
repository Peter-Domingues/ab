import Footer from "@/components/home/footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/Header";
import FeaturedListings from "@/components/home/FeatuerdListings";

export const metadata = {
  title: "Featured | Anastasia Benedeti",
};

const Featured = () => {
  return (
    <>
      <Header />
      <MobileMenu />

      {/* Explore Apartment Types cities */}
      <section className="pb90 pb30-md mt40">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title title-font">FEATURED PROPERTIES</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <FeaturedListings />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore Apartment Types cities */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt-0 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Featured;
