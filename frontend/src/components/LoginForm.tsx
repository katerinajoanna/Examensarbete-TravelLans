import { useState } from "react";
import { loginUser } from "../services/apiAuth";
import { LoginResponse } from "../types/loginResponse";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response: LoginResponse = await loginUser(formData);
            // console.log("Pełna odpowiedź API:", response);

            if (response.success && response.data.accessToken) {
                localStorage.setItem("accessToken", response.data.accessToken);
                // console.log("Token saved:", localStorage.getItem("accessToken"));
                setSuccess("Login successful! Redirecting...");
                setTimeout(() => navigate('/'), 2000);
            } else {
                throw new Error(response.data?.message || "Login failed.");
            }
        } catch (error) {
            //console.error("Błąd rejestracji:", error);

            if (
                error instanceof Error &&
                "response" in error &&
                typeof error.response === "object" &&
                error.response !== null &&
                "data" in error.response &&
                typeof error.response.data === "object" &&
                error.response.data !== null &&
                "error" in error.response.data &&
                typeof error.response.data.error === "string"
            ) {
                const serverError = error.response.data.error;

                if (serverError.includes("username")) {
                    setError("A user with this name already exists.");
                } else if (serverError.includes("email")) {
                    setError("The email address you provided is already in use.");
                } else {
                    setError(serverError);
                }
            } else {
                setError("Registration failed. Please try again.");
            }
        }

    };

    return (
        <section className="bg-gradient-to-r from-[#f5f5f5] to-[#e8edd2] p-6 rounded shadow-formShadow w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Login</h2>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block">Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded" />
                </div>
                <div>
                    <label className="block">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded" />
                </div>
                <button type="submit" className="w-full bg-bgButton bg-opacity-90 text-textMuted py-2 rounded hover:bg-opacity-100 focus:bg-opacity-100 active:bg-opacity-100 transition">
                    Login
                </button>
            </form>
        </section>
    );
};

export default LoginForm;
