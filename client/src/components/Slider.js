import { Page } from "../util/config";
import { motion } from "framer-motion";

export default function Slider(props) {
    const additionalClasses = "text-[#A259FF]";

    function closeSlider() {
        props.setSlider(false);
    }

    function setPage(page) {
        props.setPage(page);
        closeSlider();
    }

    function logout() {
        props.setUserInfo({ username: "", email: "" });
        props.setLoggedIn(false);
        setPage(Page.HOME_PAGE);
    }

    return (
        <div className="md:hidden fixed inset-0 z-50 flex justify-center overflow-hidden">
            {/* Background overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.3 }}
                onClick={closeSlider}
                className="absolute inset-0 bg-black opacity-80"
            ></motion.div>

            {/* Slider Panel */}
            <motion.div
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.4, type: "tween" }}
                className="relative z-10 bg-[#1A1A1A] h-full w-2/3 shadow-lg"
            >
                {/* Close button */}
                <div className="flex justify-end p-3">
                    <img
                        onClick={closeSlider}
                        alt="Close"
                        width="32px"
                        src="https://img.icons8.com/fluency-systems-filled/48/A259FF/multiply.png"
                        className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                    />
                </div>

                {/* Authentication options */}
                {!props.loggedIn && (
                    <div className="flex flex-col items-center mt-12 text-white space-y-6">
                        <button
                            onClick={() => setPage(Page.LOGIN_PAGE)}
                            className="transition duration-500 ease-in-out bg-[#A259FF] rounded-lg px-5 py-2 w-2/3 border-[#A259FF] border-2 hover:bg-transparent hover:text-[#A259FF]"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setPage(Page.SIGNUP_PAGE)}
                            className="transition duration-500 ease-in-out bg-[#A259FF] rounded-lg px-5 py-2 w-2/3 border-[#A259FF] border-2 hover:bg-transparent hover:text-[#A259FF]"
                        >
                            Sign Up
                        </button>
                    </div>
                )}

                {/* Logged-in user info */}
                {props.loggedIn && (
                    <div className="flex flex-col items-center mt-12 text-white">
                        <p className="text-2xl font-mono text-[#A259FF]">{props.userInfo.username}</p>
                        <button
                            onClick={() => logout()}
                            className="mt-6 transition duration-500 ease-in-out bg-[#A259FF] rounded-lg px-5 py-2 w-2/3 border-[#A259FF] border-2 hover:bg-transparent hover:text-[#A259FF]"
                        >
                            Logout
                        </button>
                    </div>
                )}

                {/* Navigation Links */}
                <div className="text-xl mt-12 flex flex-col items-center font-['Work_Sans'] text-white space-y-6">
                    <p
                        onClick={() => setPage(Page.HOME_PAGE)}
                        className={`cursor-pointer transition duration-300 ease-in-out hover:text-[#A259FF] ${
                            props.currentPage === Page.HOME_PAGE ? additionalClasses : ""
                        }`}
                    >
                        Home
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
