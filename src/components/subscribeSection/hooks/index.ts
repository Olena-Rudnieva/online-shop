import { useState } from "react";

export const useSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!email) {
      setIsFocused(false);
    }
  };

  return {
    email,
    setEmail,
    isFocused,
    handleSubscribe,
    handleFocus,
    handleBlur,
  };
};