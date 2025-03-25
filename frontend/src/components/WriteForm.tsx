import { useState } from "react";
import { ContactFormData } from "../types/contactFormData";

const WriteForm = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        //meze dodac odsluge wysylania formulaza??
    }

    return (
        <section className="bg-gradient-to-r from-[#f5f5f5] to-[#e8edd2] p-6 rounded shadow-formShadow w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">

            <form onSubmit={handleSubmit} className="space-y-4 font-robotoFlex">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Your E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Your Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="border border-bgLine focus:border-borderInput focus:outline-none p-2 w-full rounded resize-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-bgButton bg-opacity-90 text-textMuted py-2 rounded hover:bg-opacity-100 focus:bg-opacity-100 active:bg-opacity-100 transition">
                    Send Message
                </button>
            </form>
        </section >
    );
};

export default WriteForm;
