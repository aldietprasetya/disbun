import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from 'axios';
import { appConfig } from 'src/config';

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "johndoe@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const payload = {
          username: credentials.username,
          password: credentials.password,
        };
        // database look up
        if (
          credentials.username === "user" &&
          credentials.password === "user"
        ) {
          return {
            "status": "success",
            "data": {
              "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpZCI6InVzZXItUmxCSW9aUUNaMmZEWjJSWjdxQ0F6IiwiaWF0IjoxNjUyNzAzNDczfQ.fjmIN0BPFF0YteiyInPlY4Nxf6JyQ1nJaEPx3hISMMA",
              "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpZCI6InVzZXItUmxCSW9aUUNaMmZEWjJSWjdxQ0F6IiwiaWF0IjoxNjUyNzAzNDczfQ.G4ZjEG3H8niMeqNP12LGq3v9CShA7BxR9RxN-qG11hQ",
              "acquiredUser" : {
                companyname: "Pt Sejahtera Indonesia",
                created_at: "2022-05-22T15:22:10.634Z",
                deleted_at: null,
                email: "dhandoyo14@gmail.com",
                id: "user-YlqIAXes7IahWEAJygCvZ",
                is_verified: false,
                last_login: "2022-08-06T06:34:15.877Z",
                managername: "Dwi Handoyo",
                phonenumber: "089507955201",
                role: 1,
                updated_at: "2022-06-12T03:08:03.505Z",
                username: "user2"
              }
            }
          };
        }

        const res = await axios.post(
          `${appConfig.baseUrl}/authentications`,
          payload,
        );

        const user = await res.data;
        if (res.data.status == 'failed') {
          throw new Error(res.data.message);
        }
        // If no error and we have user data, return it
        if (res.data.status == 'success' && user) {
          const getMe = await axios.get(`${appConfig.baseUrl}/users/profile`, {
            headers: {
              Authorization: `Bearer ${user.data.accessToken}`,
            },
          });
          if (getMe.data.status == 'success') {
            user.data.acquiredUser = getMe.data.data.acquiredUser
          }
          return user;
        }

        // login failed
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.data.accessToken,
          refreshToken: user.data.refreshToken,
          acquiredUser: (user.data.acquiredUser != undefined ? user.data.acquiredUser : null)
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.accessTokenExpires = token.accessTokenExpires;
      session.user.acquiredUser = token.acquiredUser;

      return session;
    },
  },
  secret: 'IamVeryHandsome',
  jwt: {
    secret: "test",
    encryption: true,
  },
});
