import API from "src/libs/api";

interface LogIn {
  email: string;
  password: string;
}

const logIn = async ({ email, password }: LogIn) => {
  try {
    const response = await API.post("/login", {
      email,
      password
    });
    return response;
  } catch (error: any) {
    console.log(error);
  }
};

export { logIn };
