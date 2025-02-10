// import Footer from "../components/Footer";
// import Header from "../components/Header";


// function HomePage() {
//     return (
//         <div>
//             <Header />
//             <main className="p-4 flex-1">
//                 <h1 className="text-center text-3xl text-textSecondary mb-4">Welcome to our website!</h1>

//                 {/* Responsywny kontener */}
//                 <div className="flex justify-center items-center max-w-[800px] m-7 w-full h-[330px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-14 mx-auto">
//                     <p className=" text-textMuted text-left tracking-wide leading-relaxed">
//                         Are you seeking travel inspiration or dreaming of exploring the most breathtaking places on Earth, all from the comfort of your own home? You've come to the right place! Here, you’ll discover the wonders of nature like never before.
//                     </p>
//                 </div>

//                 <div className="w-full h-[0.5px] bg-bgLine my-8"></div>
//                 <h1 className="text-center text-3xl text-textSecondary mb-4">Galleries</h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 1</div>
//                     <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 2</div>
//                     <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 3</div>
//                     <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 4</div>
//                     <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 5</div>
//                     <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 6</div>
//                 </div>
//                 <div className="w-full h-[0.5px] bg-bgLine my-8"></div>
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default HomePage;


import Footer from "../components/Footer";
import Header from "../components/Header";

function HomePage() {
    return (
        <div className="flex flex-col h-screen">
            {/* Header na stałe na górze */}
            <div className="sticky top-0 z-50">
                <Header />
            </div>

            {/* Main, który zajmuje resztę przestrzeni */}
            <main className="flex-1 overflow-y-auto p-4">
                <h1 className="text-center text-3xl text-textSecondary mb-4">Welcome to our website!</h1>

                <div className="flex justify-center items-center max-w-[800px] m-7 w-full h-[330px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-14 mx-auto">
                    <p className="text-textMuted text-left tracking-wide leading-relaxed">
                        Are you seeking travel inspiration or dreaming of exploring the most breathtaking places on Earth, all from the comfort of your own home? You've come to the right place! Here, you’ll discover the wonders of nature like never before.
                    </p>
                </div>

                <div className="w-full h-[0.5px] bg-bgLine my-8"></div>
                <h1 className="text-center text-3xl text-textSecondary mb-4">Galleries</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 1</div>
                    <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 2</div>
                    <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 3</div>
                    <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 4</div>
                    <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 5</div>
                    <div className="h-[336px] bg-[rgba(0,0,0,0.39)] backdrop-blur-md rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6">Content 6</div>
                </div>
            </main>

            {/* Footer przyklejony na dole */}
            <div className="sticky bottom-0 z-50">
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
