"use client";
import Image from "next/image";
import React, { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/26093506/pexels-photo-26093506/free-photo-of-portrait-of-a-pretty-brunette-leaning-on-a-stool.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/20278818/pexels-photo-20278818/free-photo-of-model-wearing-a-black-dress-posing-against-a-wooden-door-and-a-clay-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/26691060/pexels-photo-26691060/free-photo-of-woman-in-front-of-a-wall-of-locks.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/26536274/pexels-photo-26536274/free-photo-of-man-in-hat-sitting-on-bench-in-forest-and-playing-guitar.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
//   },
// ];

const ProductImages = ({items}:{items:any}) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4">
        {items.map((item:any,i:number) => (
          <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item._id} onClick={()=>setIndex(i)}>
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
