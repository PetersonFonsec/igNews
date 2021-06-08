import { signIn, useSession } from "next-auth/client";
import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";
import styles from "./styles.module.scss";
interface SubscribeButtonPops {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonPops) {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) return signIn("github");

    try {
      const response = await api.post("/subscribe");
      const { sessionId } = response.data;
      const stripe = await getStripeJS();
      stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
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
