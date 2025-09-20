import { useState, type FormEvent } from "react";
import { BriefcaseBusiness, Mail, Send, Zap } from "lucide-react";
import { createRecord } from "../utils";
const Waitlist = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [alert, setAlert] = useState({
        title: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);
    const [businessType, setBusinessType] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!emailAddress || !businessName || !businessType) {
            setAlert({
                title: "Please fill out all field!",
                description: "Please fill out all field!",
            });
            return;
        }

        const user = {
            emailAddress: emailAddress,
            businessName: businessName,
            businessType: businessType,
        };
        setLoading(true);
        try {
            const response = await createRecord(user);
            console.log(response);
            setLoading(false);
            setAlert({
                title: "Welcome to the waitlist!",
                description: "We'll notify you the moment ReviewReply launches",
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
            setAlert({
                title: "An error occured!, please try again",
                description: "Please try signing up again",
            });
        }
    };
    return (
        <div className=" mt-10 p-8 space-y-4 rounded-lg max-w-[500px] mx-auto bg-gray-200/30 shadow px-6">
            {/* <div className="success-message" id="successMessage">
                🎉 You're on the list! We'll notify you the moment ReviewReply
                launches.
            </div> */}

            <h1 className="text-4xl space-y-6 font-bold font-secondary text-center">
                Join the Waitlist
            </h1>

            <form
                id="waitlistForm"
                onSubmit={(e) => handleSubmit(e)}
                className="font-secondary space-y-5"
            >
                <div className="flex gap-2 items-center text-gray-500 border border-gray-400 px-4 py-2 rounded-lg">
                    <Mail className="w-6 h-6" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="w-full placeholder:text-gray-500 outline-none"
                        required
                        placeholder="your@email.com"
                    />
                </div>

                <div className="mt-4 flex gap-2 items-center text-gray-500 border border-gray-400 px-4 py-2 rounded-lg">
                    <BriefcaseBusiness />
                    <input
                        type="text"
                        id="businessName"
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full placeholder:text-gray-500 outline-none"
                        name="businessName"
                        required
                        placeholder="Your Business Name"
                    />
                </div>

                <div className="mt-4 w-full">
                    <select
                        className="w-full p-2.5 outline-none bg-gray-500/20 rounded border border-gray-400"
                        id="businessType"
                        onChange={(e) => setBusinessType(e.target.value)}
                        name="businessType"
                        required
                    >
                        <option value="">Select your business type</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="dental">Dental Practice</option>
                        <option value="salon">Hair/Beauty Salon</option>
                        <option value="retail">Retail Store</option>
                        <option value="professional">
                            Professional Services
                        </option>
                        <option value="automotive">Automotive</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="mt-4 w-full transition-transform hover:scale-105 flex items-center gap-2 justify-center text-center bg-gray-800 py-4 text-white rounded-lg font-primary"
                >
                    {loading
                        ? "Joining..."
                        : "Skip The Enterprise Hassle - Join Waitlist"}
                    <Send className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 justify-center bg-yellow-500/30 py-2 rounded-lg font-secondary text-sm backdrop-blur-lg">
                    <Zap className="text-yellow-800 w-4 h-4" />
                    <p className="text-yellow-800">
                        First 100 members lock in $29/month forever
                    </p>
                </div>
            </form>
            {alert ? (
                <div className="absolute shadow top-4 right-4 px-6 py-4 w-[450px] bg-gray-100">
                    <h1 className="font-bold font-secondary text-lg">
                        {alert.title}
                    </h1>
                    <p className="text-foreground font-secondary">
                        {alert.description}
                    </p>
                </div>
            ) : null}
        </div>
    );
};

export default Waitlist;
