import React, { useState,useRef } from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
    const [result, setResult] = useState("");
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const onSubmit = async (data) => {
        setResult("Sending...");

        // Web3Forms API endpoint
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey || "YOUR_ACCESS_KEY_HERE", // replace with Web3Forms key
                from_name: "IfeBanks' Portfolio",
                ...data,
            }),
        });

        const json = await response.json();

        if (json.success) {
            setResult("Message sent successfully ✅");
            reset(); // clears form

            setTimeout(() => setResult(""),3000)
        } else {
            setResult("Something went wrong ❌");
            setTimeout(() => setResult(""),3000)
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-white space-y-5"
        >
            <input type="hidden" name="from_name" value="IfeBanks' Portfolio"></input>
            {/* Name */}
            <div className="group border-b-2 xl:w-[60%] border-gray-500 py-1 flex gap-2 items-center transition-all duration-300 focus-within:border-[#871be6]">
                <label htmlFor="name" className="text-xl text-gray-500 group-focus-within:text-[#871be6]">
                    Name*:
                </label>
                <input
                    id="name"
                    type="text"
                    {...register("name", { required: true })}
                    className="pr-2 outline-none text-xl bg-transparent w-full"
                />
            </div>
            {errors.name && <p className="text-red-400">Name is required</p>}

            {/* Email */}
            <div className="group border-b-2 xl:w-[60%] border-gray-500 py-1 flex gap-2 items-center transition-all duration-300 focus-within:border-[#871be6]">
                <label htmlFor="email" className="text-xl text-gray-500 group-focus-within:text-[#871be6]">
                    Email*:
                </label>
                <input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                    className="pr-2 outline-none text-xl bg-transparent w-full"
                />
            </div>
            {errors.email && <p className="text-red-400">Email is required</p>}

            {/* Location */}
            <div className="group border-b-2 xl:w-[60%] border-gray-500 py-1 flex gap-2 items-center transition-all duration-300 focus-within:border-[#871be6]">
                <label htmlFor="location" className="text-xl text-gray-500 group-focus-within:text-[#871be6]">
                    Location:
                </label>
                <input
                    id="location"
                    type="text"
                    {...register("location")}
                    className="pr-2 outline-none text-xl bg-transparent w-full"
                />
            </div>

            {/* Subject */}
            <div className="group border-b-2 xl:w-[60%] border-gray-500 py-1 flex gap-2 items-center transition-all duration-300 focus-within:border-[#871be6]">
                <label htmlFor="subject" className="text-xl text-gray-500 group-focus-within:text-[#871be6]">
                    Subject*:
                </label>
                <input
                    id="subject"
                    type="text"
                    {...register("subject", { required: true })}
                    className="pr-2 outline-none text-xl bg-transparent w-full"
                />
            </div>
            {errors.subject && <p className="text-red-400">Subject is required</p>}

            {/* Message */}
            <div className="group border-b-2 xl:w-[60%] border-gray-500 py-1 flex gap-2 items-start transition-all duration-300 focus-within:border-[#871be6]">
                <label htmlFor="message" className="text-xl text-gray-500 group-focus-within:text-[#871be6]">
                    Message*:
                </label>
                <textarea
                    id="message"
                    rows={3}
                    {...register("message", { required: true })}
                    className="pr-2 outline-none text-xl bg-transparent w-full"
                />
            </div>
            {errors.message && <p className="text-red-400">Message is required</p>}

            {/* Submit Button */}
            <button
                type="submit"
                className="flex justify-start items-start py-3 px-6 text-white font-semibold bg-[#871be6] hover:bg-[#9a3aed] transition-colors rounded-xl"
            >
                Submit
            </button>

            {/* Response */}
            <p className="pt-2">{result}</p>
        </form>
    );
}

export default ContactForm;
