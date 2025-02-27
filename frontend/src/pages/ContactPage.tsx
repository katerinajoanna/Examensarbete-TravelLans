import Footer from "../components/Footer";
import Header from "../components/Header";


const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title='Contact' />
            <main className="flex flex-1 flex-col items-center justify-center">

            </main>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto mb-2">
            </div>

            <Footer />
        </div>
    );
}

export default ContactPage;
