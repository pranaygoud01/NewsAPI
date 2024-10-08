import React, { useState } from "react";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Home = () => {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-09-08&sortBy=publishedAt&apiKey=33a6eceaa9e149f29d027e870ff25961"
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  useEffect(() => {
    document.title = "News Today | PranayGoud ";
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex justify-center bg-slate-50 h-fit px-[40px] py-[60px] max-md:px-[20px] w-full">
        <div className="flex flex-row max-md:flex-col gap-10 w-11/12 max-md:w-full bg-white mt-5 h-fit shadow-2xl rounded-3xl p-10 max-md:p-2 ">
          <div className="flex flex-col h-fit items-start m-10 w-[60%] max-md:w-9/12  gap-5">
            <a
              href={user.articles?.[0]?.url}
              className="font-bold text-5xl hover:underline cursor-pointer max-md:text-xl "
            >
              {user.articles?.[0]?.title}
            </a>
            <h2 className="font-semibold text-2xl text-blue-600 max-md:text-base">
              {user.articles?.[0].author}
            </h2>
            <p className="max-md:text-xs">{user.articles?.[0]?.description}</p>
            <a
              className="underline text-sm font-bold flex items-center"
              href={user.articles?.[0]?.url}
            >
              Read More{" "}
              <FaLongArrowAltRight className="font-bold text-sm pt-1" />
            </a>
            <p className="font-semibold text-xs text-slate-600 pt-2">
              Published at {user.articles?.[0]?.publishedAt}
            </p>
          </div>
          <div className="w-[40%] max-md:hidden">
            <img
              src={user.articles?.[0]?.urlToImage}
              className="w-full h-full object-cover rounded-3xl"
              alt={user.articles?.[0]?.title}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col  justify-center gap-10 bg-slate-50 h-fit p-[50px] max-md:px-[20px]  ">
        <div>
          <h1 className="font-bold text-2xl">Popular News</h1>
        </div>
        <ul className="w-full  grid grid-cols-3 max-md:grid-cols-1 gap-10 ">
          {user?.articles ? (
            user.articles.map((article, index) => (
              <li className="h-fit rounded-3xl shadow-xl bg-white" key={index}>
                <div className="px-10 pt-10 h-[250px]">
                  <img
                    src={article.urlToImage}
                    className="h-full w-full object-cover rounded-3xl"
                    alt="News Thumbnail"
                  />
                </div>
                <div className="px-10 py-5">
                  <a className="font-bold hover:underline" href={article.url}>
                    {article.title}
                  </a>
                  <p className="font-semibold text-xs text-slate-600 pt-2">
                    Published at {article.publishedAt}
                  </p>
                  <p className="font-bold text-blue-600 text-xs pt-5">
                    Source: {article.source.name}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <p>No data found</p>
          )}
        </ul>
      </div>
    </div>
  );
};
