import Image from 'next/image';
import styles from "./componentes/css.module.css";

export default function NotFound() {
  return (
    <div  className={styles.notFound }>
      <Image
        width={100}
        height={100}
        src="/images/logo.jpg"
        alt="Logo"
      />
      <h1 >Página não encontrada</h1>
    </div>
  );
}