// useCreateUserForm.ts
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const useCreateUserForm = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://jammeads.jamme.app/api/v1/jamme-user/create-jamme-user-query",
        data
      );
      console.log("Response:", response.data);
      toast.success("Your request has been successfully submitted, and we will be in touch with you soon!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create user.");
    } finally {
      setLoading(false);
    }
  };

  return {
    onSubmit,
    loading,
  };
};

export default useCreateUserForm;
