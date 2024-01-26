import React from "react";
import NewsItem from "../../../components/NewsItem";
const news = [
  { title: "Novidades", content: "Novidades", img: "/img/news1.png" },
  { title: "Novidades", content: "Novidades", img: "/img/news1.png" },
  { title: "Novidades", content: "Novidades", img: "/img/news1.png" },
  { title: "Novidades", content: "Novidades", img: "/img/news1.png" },
  { title: "Novidades", content: "Novidades", img: "/img/news1.png" },
];

const newsPage = () => {
  return (
    <div>
      <h1 className="text-primary text-3xl">Novidades</h1>
      <div className="container grid grid-cols-2 gap-12 mt-32">
        {news.map((item, index) => (
          <NewsItem key={index} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default newsPage;
