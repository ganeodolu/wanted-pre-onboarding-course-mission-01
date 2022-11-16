import { getCookie, setCookie } from "cookies-next";
import API from "src/libs/api";

interface LogIn {
  email: string;
  password: string;
}

interface Accounts {
  page: number;
  limit: number;
  brokerId: number | null;
  isActive: boolean | null;
  status: number | null;
}

interface Users {
  page: number;
  limit: number;
  isActive: boolean;
}

export const logIn = async ({ email, password }: LogIn) => {
  try {
    const response = await API.post("/login", {
      email,
      password
    });
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

export const getAccounts = async ({
  page,
  limit,
  brokerId,
  isActive,
  status
}: Accounts) => {
  try {
    const accessToken = getCookie("accessToken");
    console.log(accessToken);
    API.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    const response = await API.get("/accounts", {
      params: {
        _page: page,
        _limit: limit,
        ...(brokerId ? { broker_id: brokerId } : {}),
        ...(isActive ? { is_active: isActive } : {}),
        ...(status ? { status } : {})
      }
    });
    return response;
  } catch (error: any) {
    console.log(error);
  }
};

export const getUsers = async ({ page, limit, isActive }: Users) => {
  try {
    const accessToken = getCookie("accessToken");
    API.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    const response = await API.get("/user", {
      params: {
        _page: page,
        _limit: limit,
        ...(isActive ? { is_active: isActive } : {})
      }
    });
    return response;
  } catch (error: any) {
    console.log(error);
  }
};
