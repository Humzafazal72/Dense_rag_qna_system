import { getSession } from "@/actions/actions";
import { NextResponse } from "next/server";
import cookie from "cookie";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID,
        client_secret: process.env.AUTH_GOOGLE_SECRET,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: process.env.NEXT_PUBLIC_BASE_URL + "/api/google-callback",
      }),
    });

    const tokenData = await tokenResponse.json();

    // const userResponse = await fetch(
    //   "https://www.googleapis.com/oauth2/v1/userinfo",
    //   {
    //     headers: { Authorization: `Bearer ${tokenData.access_token}` },
    //   }
    // );

    // const userData = await userResponse.json();

    const session = await getSession();
    const backendResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/google-login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: tokenData.access_token }),
      }
    );

    const loginAPIData = await backendResponse.json();

    if (loginAPIData.success) {
      const cookies = backendResponse.headers.get("set-cookie");
      if (cookies) {
        const cookiesArray = cookies.split(",").map(cookie.parse);
        cookiesArray.forEach((cookieObj) => {
          if (cookieObj.csrftoken) {
            session.csrfToken = cookieObj.csrftoken;
          }
          if (cookieObj.sessionid) {
            session.sessionId = cookieObj.sessionid;
          }
        });
      }

      // return {
      //   userId: loginAPIData.user_id,
      //   user_email: loginAPIData.user_email,
      //   user_name: loginAPIData.user_name,
      //   profile_picture: loginAPIData.profile_picture,
      //   auth_type: loginAPIData.auth_type,
      //   csrfToken: session.csrfToken,
      //   sessionId: session.sessionId,
      // };

      session.userId = loginAPIData.user_id;
      session.user_email = loginAPIData.user_email;
      session.user_name = loginAPIData.user_name;
      // session.profile_picture = loginAPIData.profile_picture;
      session.auth_type = loginAPIData.auth_type;
      session.isLoggedIn = true;
      await session.save();
      return NextResponse.redirect(new URL("/home", req.url));
    } else {
      const googleSignUpResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/google-signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: tokenData.access_token }),
        }
      );
      const signupAPIData = await googleSignUpResponse.json();
      if (signupAPIData.success) {
        const cookies = googleSignUpResponse.headers.get("set-cookie");
        if (cookies) {
          const cookiesArray = cookies.split(",").map(cookie.parse);
          cookiesArray.forEach((cookieObj) => {
            if (cookieObj.csrftoken) {
              session.csrfToken = cookieObj.csrftoken;
            }
            if (cookieObj.sessionid) {
              session.sessionId = cookieObj.sessionid;
            }
          });
        }

        // return {
        //   userId: signupAPIData.user_id,
        //   user_email: signupAPIData.user_email,
        //   user_name: signupAPIData.user_name,
        //   profile_picture: signupAPIData.profile_picture,
        //   auth_type: signupAPIData.auth_type,
        //   csrfToken: session.csrfToken,
        //   sessionId: session.sessionId,
        // };

        session.userId = signupAPIData.user_id;
        session.user_email = signupAPIData.user_email;
        session.user_name = signupAPIData.user_name;
        // session.profile_picture = signupAPIData.profile_picture;
        session.auth_type = signupAPIData.auth_type;
        session.isLoggedIn = true;
        await session.save();
        return NextResponse.redirect(new URL("/home", req.url));
      } else {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }
  } catch (error) {
    console.error("Google Auth Error:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
