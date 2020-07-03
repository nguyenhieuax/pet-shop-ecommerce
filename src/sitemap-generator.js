require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./App.js").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://all4pet-c1401.firebaseapp.com")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();