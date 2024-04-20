import NavBarApp from "./NavBarApp";
import { Route, Routes } from "react-router-dom";
import { ServicesApp } from "./ServicesApp";
import { AboutApp } from "./AboutApp";
import { HomeApp } from "./HomeApp";

const RoutesApp = () => {
    return (
        <>
            <NavBarApp />

            <div >
                <Routes>
                    <Route path="Home" element={<HomeApp />} />

                    <Route path="Services" element={<ServicesApp />} />

                    <Route path="About" element={<AboutApp />} />

                </Routes>
            </div>
        </>
    );
};

export default RoutesApp;