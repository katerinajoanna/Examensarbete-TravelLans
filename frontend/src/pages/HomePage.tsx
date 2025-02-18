
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import GallerySection from "../components/gallery/GallerySection";


const HomePage: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <Header />
            <main className='flex-1 p-4'>
                <HeroSection
                    title="Welcome to our website!"
                    description="Are you seeking travel inspiration or dreaming of exploring the most breathtaking places on Earth, all from the comfort of your own home? You've come to the right place!"
                />

                <div className='w-full h-[0.5px] bg-bgLine my-12 mb-5 md:mb-8'></div>
                <GallerySection />
                <div className='w-full h-[0.5px] bg-bgLine mt-12'></div>

            </main>

            <Footer />
        </div>
    );
}

export default HomePage;
