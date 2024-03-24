import { Box, CircularProgress } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState({});

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

const useArticle = () => {
  const context = useContext(ArticleContext);
  return context;
};

export { ArticleProvider, useArticle };
