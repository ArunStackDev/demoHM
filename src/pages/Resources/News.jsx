import React from "react";
import Seo from "../../components/Seo.jsx";

function News() {
  return (
    <div>
      <Seo
        title="News"
        description="Latest news and updates from Happymindz and our senior care community."
        schema="webpage"
      />
      <h1 className="sr-only">Happymindz News</h1>
      News
    </div>
  );
}

export default News;
