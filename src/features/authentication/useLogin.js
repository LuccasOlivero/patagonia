import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading: loading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // save "user" data into react query cache
      queryClient.setQueryData(["user"], user?.user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or pasword are incorrect");
    },
  });

  return { login, loading };
}
