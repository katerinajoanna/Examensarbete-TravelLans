import GalleryCard from "./GalleryCard";
import africa from "../../assets/images/Canyonlands-National-Park-Utah.jpg";
import asia from "../../assets/images/Niagara-cud-natury-w-nocy-.jpg";
import europe from "../../assets/images/istockphoto.jpg";
import northAmerica from "../../assets/images/poziomewod3.jpg";
import southAmerica from "../../assets/images/poziomywod2.jpeg";
import australia from "../../assets/images/zhangjiajie-d485479.jpg";

const GallerySection: React.FC = () => {
    return (
        <section className='max-w-7xl mx-auto p-3'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl text-textSecondary text-center font-robotoSans italic font-bold tracking-wider text-stroke mb-8 md:mb-12 lg:mb-14'>
                Galleries
            </h2>

            <div className='grid grid-cols-1 font-robotoFlex tracking-[0.05em] stroke-continent sm:grid-cols-2 lg:grid-cols-3 gap-6 text-2xl '>
                <GalleryCard title='Africa' image={africa} />
                <GalleryCard title='Asia' image={asia} />
                <GalleryCard title='Europe' image={europe} />
                <GalleryCard title='North America' image={northAmerica} />
                <GalleryCard title='South America' image={southAmerica} />
                <GalleryCard title='Oceania' image={australia} />
            </div>
        </section>
    );
};

export default GallerySection;

