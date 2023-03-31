import Navbar from "./Navbar";
import Product from "./Product";

export default function Layout({ children }) {
  return (
    <>
    <Navbar/>
      <main>{children}</main>
     
      <footer className="center mt-5 flex justify-center space-x-4 bg-[#E7E8EF] p-4 text-xs">
        <p>Built By Mack Grissom </p>
        <span>|</span>
        <a
          href="https://www.mackgrissom.io"
          className="font-medium text-orange-600"
        >
          Need a Website?
        </a>
        
      </footer>
    </>
  )
}
