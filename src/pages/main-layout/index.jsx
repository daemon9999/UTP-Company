import {  useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import Menu from "src/components/menu";
import Header from "src/layouts/header";


export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);


 
  return (
    <>
  
      {isOpen && <Menu setIsOpen={setIsOpen} />}
      <Header setIsOpen={setIsOpen} />
      <Outlet />
      <Footer />

      <style jsx>{`
        body{position: ${isOpen ? 'fixed': 'static'}}
      
      `}</style>
    </>
  );
}
