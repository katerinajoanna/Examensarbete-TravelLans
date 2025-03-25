import Footer from "../components/Footer";
import Header from "../components/Header";
import WriteForm from "../components/WriteForm";

const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header title='Contact' />
            <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl text-textSecondary stroke-galery font-bold italic tracking-wide p-3 md:p-5 lg:p-6 xl:p-6 mt-6">Write to us</h1>
            <p className="text-base text-bgNoteLight text-center md:text-xl xl:text-2xl font-medium tracking-wide mb-4">
                You can ask us about the following topics, or anything else you’d like to know.
            </p>
            <div className="flex justify-center">
                <div className="text-left w-fit">
                    <ul className=" list-disc list-inside text-bgNoteLight text-sm mb-6">
                        <li>Order slides or photos of places that interest you.</li>
                        <li>How can I get to these places?</li>
                        <li>Do you provide help with travel and finding a guide?</li>
                    </ul>
                </div>
            </div>
            <main className="flex flex-1 flex-col items-center justify-center mb-6">
                <WriteForm />

            </main>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto mb-2">
            </div>

            <Footer />
        </div>
    );
}

export default ContactPage;
