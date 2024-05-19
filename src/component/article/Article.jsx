import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="app__blog-container_article">
      <div className="app__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="app__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
