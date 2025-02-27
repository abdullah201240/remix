import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import '../tailwind.css'
import Products from "~/components/Products";
import Explore from "~/components/Explore";
import Footer from "~/components/Footer";
import Featured from "~/components/Featured";


export const meta: MetaFunction = () => {
  return [
    { title: "Bakery" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
            <Navbar />
            <Hero/>
            <Products/>
            <Explore/>
            <Featured/>
            <Footer/>

     
    </div>
  );
}


