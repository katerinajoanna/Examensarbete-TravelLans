import Footer from "../components/Footer";
import Header from "../components/Header";


const AboutPage = () => {
    return (
        <div className="flex flex-col">
            <Header title='About Us' />
            <div className="text-center text-textMuted m-12">
                <h1>  Welcome to Lans Travel!
                    The place where the beauty of our planet comes to life</h1>
                <p>Our website is created for everyone – whether you're a passionate traveler seeking your next adventure or someone who loves to explore the world from the comfort of home. Here, you'll find breathtaking natural wonders from every corner of the globe, along with stories and insights to inspire your wanderlust.</p>
                <p>Can't travel right now? No problem! Dive into our pages and let these incredible places spark your imagination.</p>
                <p>If you need more details on how to visit these remote destinations on a budget, feel free to reach out to us via email – we’re always happy to help fellow adventurers!</p>
                <p>
                    And if you've been to one of these places, we’d love to hear your thoughts. Share your experiences and leave a review on our website. All you need to do is log in and join our community of nature lovers.</p>
                <p>So, pack your virtual bags and start exploring with us. The wonders of the world are just a click away!</p>
                <div>
                    <p> Happy travels!</p>
                    <p>The Lans Travels Team <span className="text-xl md:text-2xl lg:text-3xl">🌿</span></p>
                </div>
            </div>
            <div className='w-full h-[0.5px] bg-bgLine my-12 mb-5 md:mb-8 '></div>
            <Footer />
        </div>
    );
}

export default AboutPage;
