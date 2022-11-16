import { setCookie } from "cookies-next";
import API from "src/libs/api";

interface LogIn {
  email: string;
  password: string;
}

export const logIn = async ({ email, password }: LogIn) => {
  try {
    const response = await API.post("/login", {
      email,
      password
    });
    console.log(response);
    const {
      data: { accessToken, user }
    } = response;
    setCookie("accessToken", accessToken);
    setCookie("user", user);
    return response;
  } catch (error: any) {
    console.log(error);
  }
};
