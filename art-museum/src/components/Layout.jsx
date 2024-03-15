import { Outlet } from "react-router";
import harvardArt from "../data/harvardArt";
import GalleryNavigation from "./GalleryNavigation";

function Layout() {
    return (
        <div className="page-wrapper">
            <GalleryNavigation galleries={harvardArt.records} />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;