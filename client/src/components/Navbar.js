import { Page } from "../util/config";

export default function Navbar(props) {
    const additionalClasses = "text-[#A259FF]";

    function setPage(property) {
        props.setPage(property);
    }

    function logout() {
        props.setUserInfo({ username: "", email: "" });
        props.setLoggedIn(false);
        setPage(Page.HOME_PAGE);
    }

    return (
        <nav className="bg-[#0D0D0D] md:px-8 px-4 py-4 flex justify-between items-center shadow-lg">
            {/* Logo and Brand Text */}
            <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
                <img
                    width="32px"
                    src="https://img.icons8.com/material-rounded/48/A259FF/cyber-security.png"
                    alt="Logo"
                />
                <p className="ml-3 text-lg md:text-2xl font-semibold text-white font-['Space_Mono']">
                    SecurePass
                </p>
            </div>

            {/* Navigation Links for Larger Screens */}
            <div className="hidden md:flex items-center font-['Work_Sans']">
                {/* Conditionally render login/signup or user details */}
                {!props.loggedIn && (
                    <div className="flex items-center">
                        <button
                            onClick={() => setPage(Page.LOGIN_PAGE)}
                            className="bg-[#A259FF] text-white rounded-lg px-5 py-2 ml-4 border-2 border-[#A259FF] hover:bg-transparent hover:text-[#A259FF] transition duration-300 ease-in-out"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setPage(Page.SIGNUP_PAGE)}
                            className="bg-[#A259FF] text-white rounded-lg px-5 py-2 ml-4 border-2 border-[#A259FF] hover:bg-transparent hover:text-[#A259FF] transition duration-300 ease-in-out"
                        >
                            Sign Up
                        </button>
                    </div>
                )}

                {props.loggedIn && (
                    <div className="flex items-center">
                        <p className="text-2xl font-mono text-[#A259FF] ml-4">
                            {props.userInfo.username}
                        </p>
                        <button
                            onClick={() => logout()}
                            className="bg-[#A259FF] text-white rounded-lg px-5 py-2 ml-4 border-2 border-[#A259FF] hover:bg-transparent hover:text-[#A259FF] transition duration-300 ease-in-out"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <img
                    onClick={() => props.setSlider(true)}
                    width="32px"
                    src="https://img.icons8.com/fluency-systems-regular/48/A259FF/menu--v1.png"
                    alt="Menu"
                    className="cursor-pointer"
                />
            </div>
        </nav>
    );
}
