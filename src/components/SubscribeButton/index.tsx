import styles from "./styles.module.scss";
interface SubscribeButtonPops {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonPops) {
  return (
    <button type="button" className={styles.SubscribeButton}>
      Subscribe now
    </button>
  );
}
