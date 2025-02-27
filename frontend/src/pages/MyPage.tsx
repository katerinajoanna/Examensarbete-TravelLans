import Footer from "../components/Footer";
import Header from "../components/Header";


const MyPage = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <Header title='My page' />
            <main className="flex-1 max-w-7xl p-4 mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-auto">

            </main>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto mb-2"></div>
            <Footer />
        </div>
    );
}

export default MyPage;

