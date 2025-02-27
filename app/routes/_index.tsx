import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import '../tailwind.css'
import Products from "~/components/Products";

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

     
    </div>
  );
}


