import React, { useContext, useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import CardsList from "../components/CardsList";
import AppContext from "../context/context";
import { setPagination, getCurrentPageContent } from "../functions/pagination";
import Spinner from "../components/Spinner";

function HomePage() {
  const context = useContext(AppContext);
  const [characters, setCharacters] = useState({ loading: true });
  const [maxPageContent, setMaxPageContent] = useState(15);
  const [pages, setPages] = useState({ pageNum: 3, active: 1 });

  useEffect(
    function () {
      if (!context.loading) {
        const { loading, data } = context;
        setCharacters((prev) => {
          return {
            loading,
            data: getCurrentPageContent(pages.active, data, maxPageContent),
          };
        });
        setPages((prev) => {
          return {
            ...prev,
            pageNum: setPagination(maxPageContent, data.length),
          };
        });
      }
    },
    [context]
  );
  return characters.loading ? (
    <Spinner />
  ) : (
    <>
      <CardsList characters={characters} />
      <Pagination
        pages={pages}
        setPages={setPages}
        currentContent={setCharacters}
        maxPageContent={maxPageContent}
      />
    </>
  );
}

export default HomePage;
