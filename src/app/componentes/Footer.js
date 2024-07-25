import styles from "./css.module.css";
import Image from "next/image";

export default function Macarrao() {
  return (
    <footer className={styles.footer}>
      <ul className="social-list">
        <li><a href="/">Facebook</a></li>
        <li><a href="/">Instagram</a></li>
        <li><a href="/">Twitter</a></li>
        <li><a href="/">LinkedIn</a></li>
      </ul>

      <div className="content">
        <p>A nossa empresa é a melhor, gaste seu dinheiro aqui.</p>
        <p>Desde 2007</p>
      </div>

      <div className={styles.logoFooter}>
        <Image src="/images/logo.jpg" alt="Logo da Empresa" width={50} height={50} className={styles.logo} />
      </div>
    </footer>
  );
}
