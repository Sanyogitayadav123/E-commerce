import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET_KEY } from "../../../../api_url";

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId:GOOGLE_CLIENT_ID,
          clientSecret:GOOGLE_CLIENT_SECRET
        })
      ],
      secret:JWT_SECRET_KEY
})


