import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useState } from "react";

export function SingInButton() {
  const [isUserLogged, setUserLogged] = useState(true);
  return isUserLogged ? (
    <button type="button" className={styles.SingInButton}>
      <FaGithub color="#04d361" />
      Diego Fernandes
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.SingInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
