// hooks/useAuth.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/auth/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const { isSuccess, isError, isLoading, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return { isLoading, isError, user, isSuccess };
};

export default useAuth;
