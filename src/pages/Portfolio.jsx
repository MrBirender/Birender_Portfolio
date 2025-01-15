import React from "react";
import { portfolio } from "../data";
import PortfolioItems from "../components/PortfolioItems";

const Portfolio = () => {
  return (
    <section className="my-[40px] max-w-[1140px] mx-auto px-4 md:px-8 ">
      <h2 className=" text-h2 md:text-big font-800  text-center ">
        My <span className="text-first-color">Portfolio</span>
      </h2>


      {/* Portfolio Items */}
      <div className="py-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {portfolio.map((item)=>{
          return <PortfolioItems key={item.id} {...item}/>
        })}
      </div>
      
    </section>
  );
};

export default Portfolio;
