import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";

const TodolistPage = async () => {
  return (
    <div className="flex w-full">
      <div className="w-[20%]">
        <SidebarComponent />
      </div>
      <div className="w-[80%] p-5">
        <NavbarComponent />
        <div className="mt-5">
          <ListBoardComponentHeader />
        </div>
        <div className="flex gap-5">
            <img src="https://sofontsy.com/cdn/shop/products/welcome-cutting-file-for-farmhouse-sign-welcome-sign-greeting-sign-svg-dxf-and-more-glowforge-laser-ready-svg-diva-watts-designs-306122_1024x.jpg?v=1617077597" alt="" />
        </div>
      </div>
    </div>
  );
};
export default TodolistPage;
