import React from "react";
import Seo from "../../components/Seo.jsx";

function Blog() {
  return (
    <div>
      <Seo
        title="Blog"
        description="Insights and stories from Happymindz on senior care, wellness, and community living."
        schema="webpage"
      />
      <h1 className="sr-only">Happymindz Blog</h1>
      Blog
    </div>
  );
}

export default Blog;
