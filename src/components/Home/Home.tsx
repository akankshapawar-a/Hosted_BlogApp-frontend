import Category from "../Create/Category";
import CreateBlogButton from "../Create/CreateBlogButton/CreateBlogButton";
import CreatePost from "../Create/Posts/CreatePost";
import React from "react";
import HomeImages from "./HomeImage/HomeImage";


const Home=()=>{
  return (
     <>
    <HomeImages/>
    <CreateBlogButton/>
    <div className="flex  dark:bg-gray-800  ">
    <div className=" dark:bg-gray-800 ">
  <Category/>
  </div>
   <div className="mt-0 sm:ml-4 xxs:ml-2 ss:ml-1  dark:bg-gray-800 ">
  <CreatePost />
  </div>
  </div>
     </>
  );
} 

export default Home