import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("stm_token") || "");
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("stm_user");
    return raw ? JSON.parse(raw) : null;
  });
  const isAuthenticated = Boolean(token);

  useEffect(() => {
    if (token) localStorage.setItem("stm_token", token);
    else localStorage.removeItem("stm_token");
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem("stm_user", JSON.stringify(user));
    else localStorage.removeItem("stm_user");
  }, [user]);

  async function handleRegister(form) {
    // La contraseña por defecto = identification (regla del backend)
    const created = await registerUser(form);
    // Opcional: login automático tras registro
    const { token } = await loginUser({
      identification: form.identification,
      password: form.identification,
    });
    setToken(token);

    setUser({
      name: created?.name,
      email: created?.email,
      identification: created?.identification,
    });
    return created;
  }

  async function handleLogin({ identification, password }) {
    const { token } = await loginUser({ identification, password });
    setToken(token);
    
    setUser({ identification }); // mínimo
    return token;
  }

  function logout() {
    setToken("");
    setUser(null);
  }

  const value = { token, user, isAuthenticated, handleRegister, handleLogin, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
