import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";

const GenerarDocumento: React.FC = () => {
  return (
    <>
    <Head>
        <title>Generación de documento</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <h2>
        <Link href="../auth/home">Home</Link>
      </h2>
      <h2>
        <Link href="/apps/validar-documento">Validar documento</Link>
      </h2>
      <h2>
        <Link href="/apps/generar-documento">Generar documento</Link>
      </h2>
    </>
  );
};

export default GenerarDocumento;