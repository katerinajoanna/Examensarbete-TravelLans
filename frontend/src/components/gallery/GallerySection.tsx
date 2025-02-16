import GalleryCard from "./GalleryCard";

const GallerySection: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto p-3">
            <h2 className="text-textSecondary text-center text-3xl font-robotoSans italic font-bold tracking-wider mb-8">
                Galleries
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <GalleryCard title="Africa" />
                <GalleryCard title="Asia" />
                <GalleryCard title="Europe" />
                <GalleryCard title="North America" />
                <GalleryCard title="South America" />
                <GalleryCard title="Australia" />
            </div>
        </section>
    );
};

export default GallerySection;

