import { SingInButton } from "../SingInButton";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header_content}>
        <img src="/images/logo.svg" alt="IgNews" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SingInButton />
      </div>
    </header>
  );
}
