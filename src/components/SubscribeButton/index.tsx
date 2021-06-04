import { signIn, useSession } from "next-auth/client";
import styles from "./styles.module.scss";
interface SubscribeButtonPops {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonPops) {
  const [session] = useSession();

  function handleSubscribe() {
    if (!session) return signIn("github");
  }

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className={styles.SubscribeButton}
    >
      Subscribe now
    </button>
  );
}
