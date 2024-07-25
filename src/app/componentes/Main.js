"use client"; 
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./css.module.css";
import Spinner from "./Spinner";
import ErrorGetData from "./ErrorGetData"; 


export default function Main() {
    const [listProduct, setListProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [errorFetch, setErrorFetch] = useState(false);
  
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");
        const data = await response.json();
        setListProduct(data);
      } catch {
        setErrorFetch(true);
      }
    };
  
    useEffect(() => {
      getProduct();
    }, []);
  
    const orderAz = () => {
      const newList = [...listProduct].sort((a, b) => a.nome.localeCompare(b.nome));
      setListProduct(newList);
    };
  
    const orderP = () => {
      const newList = [...listProduct].sort((a, b) => a.classe.localeCompare(b.classe));
      setListProduct(newList);
    };
  
    const orderPr = () => {
      const newList = [...listProduct].sort((a, b) => b.classe.localeCompare(a.classe));
      setListProduct(newList);
    };

    const filteredProducts = listProduct.filter((product) =>
      product.nome.toLowerCase().includes(search.toLowerCase())
    );
  
    if (errorFetch) {
      return <ErrorGetData />;
    }
  
    if (listProduct.length === 0) {
      return (
        <main>
          <Spinner />
        </main>
      );
    }
  
    return (
      <main className={styles.main}>
        <input type="text" placeholder="Pesquisar..." onChange={(e) => setSearch(e.target.value)} />
        <button onClick={orderAz}>Ordenar A-Z</button>
        <button onClick={orderP}>Ordenar Tier Menor - Maior</button>
        <button onClick={orderPr}>Ordenar Tier Maior - Menor</button>
        <br />
        <div className={styles.main}>
          {filteredProducts.map((product) => (
            <div className={styles.card} key={product.id}>
              <p className="nome">{product.nome}</p>
              <p>Piloto: {product.piloto}</p>
              <p>{product.estrategia}</p>
              <p>{product.classe}</p>
              <Link href={`/protocolo/${product.id}`} className={styles.customButton}>
  Detalhes
</Link>

            </div>
          ))}
        </div>
      </main>
    );
  }
