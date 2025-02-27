const LoginForm = () => {
    return (
        <section className="bg-gradient-to-r from-[#f5f5f5] to-[#e8edd2] p-6 rounded shadow-formShadow w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Username</label>
                    <input
                        type="text"
                        className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full " />
                </div>
                <div>
                    <label
                        className="block">Password</label>
                    <input
                        type="password"
                        className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full" />
                </div>
                <button
                    type="submit"
                    className="w-full bg-bgButton bg-opacity-90 text-textMuted py-2 rounded">Login</button>
            </form>
        </section>
    );
};

export default LoginForm;