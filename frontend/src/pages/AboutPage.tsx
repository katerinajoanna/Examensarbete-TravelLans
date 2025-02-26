
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title='About Us' />
            <main className="flex-1 text-center text-textMuted font-robotoSerif m-6 md:m-8 lg:m-10 xl:m-[3.5rem]">
                <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-textMuted sm:leading-7 md:leading-8 lg:leading-[2.6rem] font-robotoSerif tracking-widest md:tracking-[.09rem] p-1 mt-8">
                    Welcome to Lans Travel!
                </h2>
                <h2 className="font-semibold text-xl sm:text-xl md:text-3xl lg:text-4xl text-textMuted sm:leading-7 md:leading-10 lg:leading-[2.6rem] font-robotoSerif tracking-widest md:tracking-[.09rem] p-1 mt-4">
                    The place where the beauty of our planet comes to life.
                </h2>
                <p className="text-left text-xs sm:text-base md:text-xl lg:text-xl text-textMuted leading-5 sm:leading-6 md:leading-8 lg:leading-[2rem] font-robotoSerif tracking-widest md:tracking-[.09rem] p-4 mt-8">
                    Our website is created for everyone – whether you're a passionate traveler seeking your next adventure or someone who loves to explore the world from the comfort of home. Here, you'll find breathtaking natural wonders from every corner of the globe, along with stories and insights to inspire your wanderlust.
                </p>
                <p className="text-left text-xs sm:text-base md:text-xl lg:text-xl text-textMuted leading-5 sm:leading-6 md:leading-8 lg:leading-[2rem] font-robotoSerif tracking-widest md:tracking-[.09rem] p-4 mt-4">
                    Can't travel right now? No problem! Dive into our pages and let these incredible places spark your imagination.
                </p>
                <p className="text-left text-xs sm:text-base md:text-xl lg:text-xl text-textMuted leading-5 sm:leading-6 md:leading-8 lg:leading-[2rem] font-robotoSerif tracking-widest md:tracking-[.09rem] p-4 mt-4">
                    If you need more details on how to visit these remote destinations on a budget, feel free to reach out to us via email – we’re always happy to help fellow adventurers!
                </p>
                <p className="text-left text-xs sm:text-base md:text-xl lg:text-xl text-textMuted leading-5 sm:leading-6 md:leading-8 lg:leading-[2rem] font-robotoSerif tracking-widest md:tracking-[.09rem] p-4 mt-4">
                    And if you've been to one of these places, we’d love to hear your thoughts. Share your experiences and leave a review on our website. All you need to do is log in and join our community of nature lovers.
                </p>
                <p className="text-left text-xs sm:text-base md:text-xl lg:text-xl text-textMuted leading-5 sm:leading-6 md:leading-8 lg:leading-[2rem] font-robotoSerif tracking-widest md:tracking-[.09rem] p-4 mt-4">
                    So, pack your virtual bags and start exploring with us. The wonders of the world are just a click away!
                </p>
                <div className="text-center text-xs sm:text-base md:text-xl lg:text-xl mt-8 mb-9 md:mb-[4rem]">
                    <p>Happy travels!</p>
                    <p>
                        The Lans Travels Team <span className="text-xl md:text-2xl lg:text-3xl">🌿</span>
                    </p>
                </div>

            </main>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto mb-2"></div>
            <Footer />
        </div>
    );
};

export default AboutPage;

