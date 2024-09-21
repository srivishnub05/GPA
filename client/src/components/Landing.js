import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AttackBlock from "./Items/AttackBlock";

export default function Home() {

    function handleKnowMore() {
        const element = document.getElementById('home--2');
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="bg-[#0D0D0D] text-gray-300 font-sans min-h-screen">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row justify-between items-center py-16 md:py-24 px-6 md:px-20">

                {/* Hero Text */}
                <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                        Elevate Your Security <br /> with Graphical Passwords
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-8">
                        Experience a secure and user-friendly approach to password authentication designed to prevent modern cyber threats.
                    </p>
                    <button
                        onClick={handleKnowMore}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 ease-in-out">
                        <FontAwesomeIcon icon={faUnlock} className="mr-2" />
                        Learn More
                    </button>
                </div>

                {/* Hero Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        alt="Graphical Password Concept"
                        className="w-full max-w-sm rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105"
                        src="https://www.nokia.com/sites/default/files/2022-01/cybersecurity4_0.jpg"
                    />
                </div>
            </div>

            {/* Resistance to Attacks Section */}
            <div id="home--2" className="py-20 bg-[#1A1A1A] px-6 md:px-20">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Unmatched Security Against Attacks
                    </h2>
                    <p className="text-lg text-gray-400 mb-12">
                        Our system defends against the most prevalent forms of cyberattacks. Stay protected with cutting-edge security features.
                    </p>
                </div>

                {/* Attack Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <AttackBlock
                        icon="https://img.icons8.com/ios-filled/100/A259FF/re-enter-pincode.png"
                        title="Bruteforce Defense"
                        desc="Automatically lock accounts after multiple failed attempts and notify users via email. Access can only be restored through a secure link sent by the system."
                    />
                    <AttackBlock
                        icon="https://img.icons8.com/ios-filled/100/A259FF/show-password.png"
                        title="Shoulder Surfing Protection"
                        desc="Our graphical system helps prevent unauthorized access attempts even if someone is watching over your shoulder."
                    />
                    <AttackBlock
                        icon="https://img.icons8.com/ios-filled/100/A259FF/spyware-free.png"
                        title="Spyware Resistance"
                        desc="Graphical passwords are harder for spyware to capture compared to traditional key-based passwords, adding an extra layer of security."
                    />
                    <AttackBlock
                        icon="https://img.icons8.com/ios-filled/100/A259FF/enter-pin.png"
                        title="Phishing Immunity"
                        desc="By using unique graphical elements, our system resists phishing attempts, as attackers can't replicate the authentication process."
                    />
                </div>
            </div>
        </div>
    );
}
