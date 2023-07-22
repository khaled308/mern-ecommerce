import axios from "axios";

export const loginService = async (data) => {
  const response = await axios.post("/auth/login", data);
  return response.data;
};

export const getUserService = async () => {
  const response = await axios.get("/auth/user");
  return response.data;
};

export const registerService = async (data) => {
  const response = await axios.post("/auth/register", data);
  return response.data;
};
