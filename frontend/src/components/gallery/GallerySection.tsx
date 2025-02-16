
const GallerySection: React.FC = () => {
    return (
        <section>
            <h2 className="text-center text-3xl mb-4">Galleries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="h-[336px] bg-gray-800 rounded-md p-6">Content 1</div>
                <div className="h-[336px] bg-gray-800 rounded-md p-6">Content 2</div>
                <div className="h-[336px] bg-gray-800 rounded-md p-6">Content 3</div>
                <div className="h-[336px] bg-gray-800 rounded-md p-6">Content 4</div>
                <div className="h-[336px] bg-gray-800 rounded-md p-6">Content 5</div>
                <div className="h-[336px] bg-gray-800 rounded-md p-6">Content 6</div>
            </div>
        </section>
    );
};

export default GallerySection;