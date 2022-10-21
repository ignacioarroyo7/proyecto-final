import React from "react";
import { GetStaticProps } from "next";
import Home from "./auth/home";

interface Props {
  documents: Document[];
}

const IndexRoute: React.FC = () => {
  return (
    <>
      <Home></Home>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      documents: [],
    },
  };
};

export default IndexRoute;
