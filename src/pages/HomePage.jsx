import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Skills from "../components/Skills";
import Project from "../components/Project";

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Tareq Sefati - Portfolio</title>
            </Helmet>
            <div>
                <Banner />
                <Skills />
                <Project />
                <ContactUs />
            </div>
        </>

    );
}
