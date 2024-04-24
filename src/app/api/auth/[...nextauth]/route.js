import { loginservice } from "@/app/service/auth.service";
import nextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"

export const authOption = {
    providers: [
        //login by email and password
        CredentialProvider({
            async authorize(userInfo){
                //define object structure
                const newUserInfo = {
                    email: userInfo.email,
                    password: userInfo.password,
                };
                // Calling login service
                const login = await loginservice(newUserInfo);
                return login;
            },
        }),
    ],
    //Used to set token into cookie
    callbacks: {
        async jwt({ token, user }) {
          return { ...token, ...user };
        },
        async session({ session, token }) {
          session.user = token;
          return session;
        },
      },
      //Calling scret key
      secret: process.env.NEXTAUTH_SECRET,
}
const handler = nextAuth(authOption);
export {handler as GET, handler as POST};