import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Members from "./components/Members/Members";
import Listen from "./components/Listen/Listen";
import Shows from "./components/Shows/Shows";
import ContactUs from "./components/ContactUs/ContactUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Navbar from "./components/NavBar/NavBar";
export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="min-h-screen bg-white">
        <Intro />
        <Listen />
        <About />
        <Members />
        {/* <Shows /> */}
        <PhotoGallery />
        <ContactUs />
      </main>
    </>
  );
}
