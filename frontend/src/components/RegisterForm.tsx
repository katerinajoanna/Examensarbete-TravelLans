import { useState } from "react";
import { registerUser } from "../services/apiAuth";
import { RegisterResponse } from "../types/registerResponse";

const RegisterForm = ({ setActiveForm }: { setActiveForm: (form: 'login' | 'register') => void }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        country: "",
        city: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response: RegisterResponse = await registerUser({
                username: formData.username,
                email: formData.email,
                country: formData.country,
                city: formData.city,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
            });

            if (response.success) {
                setSuccess("Registration successful! Redirecting to login...");
                setTimeout(() => setActiveForm("login"), 2000);
            } else if (response.message === "The username is already taken.") {
                setError("This username is already registered. Try logging in!");
            } else {
                setError("Registration failed. Please try again.");
            }


        } catch (error: unknown) {
            if (error instanceof Error) setError(error.message);
        }
    };

    return (
        <section className="bg-gradient-to-r from-[#f5f5f5] to-[#e8edd2] p-6 rounded shadow-formShadow w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Register</h2>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <form className="space-y-2" onSubmit={handleSubmit}>
                <div>
                    <label className="block">Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded" />
                </div>
                <div>
                    <label className="block">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded" />
                </div>
                <div>
                    <label className="block">Country</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded" />
                </div>
                <div>
                    <label className="block">City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded" />
                </div>
                <div>
                    <label className="block">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded" />
                </div>
                <div>
                    <label className="block">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded" />
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2 h-5 w-5 cursor-pointer appearance-none border border-bgLine rounded-sm checked:bg-lime-500 checked:border-transparent focus:ring-1 focus:ring-bgLine before:content-['✔'] before:text-textMuted before:text-xs before:flex before:items-center before:justify-center" required />
                    <label>I accept the terms and conditions</label>
                </div>
                <button type="submit" className="w-full bg-bgButton bg-opacity-90 text-textMuted py-2 rounded hover:bg-opacity-100 focus:bg-opacity-100 active:bg-opacity-100 transition">
                    Register
                </button>
            </form>
        </section>
    );
};

export default RegisterForm;
