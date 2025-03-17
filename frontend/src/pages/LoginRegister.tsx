
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const LoginRegister = () => {
    const [activeForm, setActiveForm] = useState<'login' | 'register'>('login');

    return (
        <div className="flex flex-col min-h-screen">
            <Header title="Account" />
            <main className="flex-1 flex flex-col items-center justify-center font-robotoFlex px-6">
                <div className="my-6 flex gap-4">
                    <button
                        className={`px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg rounded font-bold tracking-wide transition ${activeForm === 'login'
                            ? 'bg-textMuted text-bgButton shadow-btnShadow'
                            : ' bg-bgButton text-textMuted shadow-btnShadow'
                            }`}

                        onClick={() => setActiveForm('login')}
                    >
                        Login
                    </button>
                    <button
                        className={`px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg rounded font-bold tracking-wide transition ${activeForm === 'register'
                            ? 'bg-textMuted text-bgButton shadow-btnShadow'
                            : ' bg-bgButton text-textMuted shadow-btnShadow'
                            }`}

                        onClick={() => setActiveForm('register')}
                    >
                        Registration
                    </button>
                </div>

                {activeForm === 'login' && <LoginForm />}
                {activeForm === 'register' && <RegisterForm setActiveForm={setActiveForm} />}
            </main>
            <div className="w-11/12 h-[0.5px] bg-bgLine mx-auto my-2"></div>
            <Footer />
        </div>
    );
};

export default LoginRegister;
