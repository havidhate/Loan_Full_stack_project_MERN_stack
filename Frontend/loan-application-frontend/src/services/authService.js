import axiosInstance from "./axiosInstance";

export const register = async (userData) => {
  try {
    const res = await axiosInstance.post("/auth/signup", userData); // ✅ FIXED
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export const login = async (credentials) => {
  try {
    const res = await axiosInstance.post("/auth/login", credentials); // ✅ This is correct
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};
