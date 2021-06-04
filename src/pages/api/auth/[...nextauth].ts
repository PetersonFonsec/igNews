import { query as q } from "faunadb";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: "read:user",
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index("user_by_email"), q.Casefold(user.mail)))
            ),
            q.Create(q.Collection("users"), {
              data: {
                email: user.email,
              },
            }),
            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.mail)))
          )
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});
