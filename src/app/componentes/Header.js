import Link from "next/link";
import styles from "./css.module.css";
import Image from "next/image";

export default function Menu() {
  return (
    <header className={styles.cabecalho}>
      <nav>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Image src="/images/icone.jpg" alt="Logo da Empresa" width={50} height={50} className={styles.logo} />
          </div>
          <Link href="/">
            Home
          </Link>
          <Link href="/registro">
            sei lá o que
          </Link>
          <Link href="/localizacao">
            sei lá o que
          </Link>
          <p className={styles.mensagem}>A nossa empresa é a melhor, gaste seu dinheiro conosco!</p>
          <div className={styles.carrinho}>
            <Link href="/">
              <Image src="/images/carrinho.png" alt="Carrinho" width={40} height={40} />
            </Link>
          </div>
          <button className={styles.adicionarProduto}>Adicionar Produto</button>
        </div>
      </nav>
    </header>
  );
}
