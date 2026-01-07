import React, { useState } from "react";
import { useAuth } from "./AuthContext";

export default function AuthForm() {
  const { handleRegister, handleLogin, isAuthenticated, user, logout } = useAuth();
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // Campos comunes
  const [identification_type_id, setType] = useState(1);
  const [identification, setIdentification] = useState("");
  const [password, setPassword] = useState("");

  // Campos registro
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      if (mode === "register") {
        if (!name || !email || !identification || !cellphone) {
          throw new Error("Completa todos los campos requeridos.");
        }
        await handleRegister({
          name,
          identification_type_id: Number(identification_type_id),
          identification: identification.trim(),
          email: email.trim(),
          cellphone: cellphone.trim(),
        });
      } else {
        if (!identification || !password) {
          throw new Error("Identificación y contraseña son requeridas.");
        }
        await handleLogin({
          identification: identification.trim(),
          password: password,
        });
      }
    } catch (e) {
      // Mensajes típicos:
      // 401 credenciales incorrectas, 422 validación, 500 servidor
      setErr(e?.data?.message || e.message || "Error");
    } finally {
      setLoading(false);
    }
  }

  if (isAuthenticated) {
    return (
      <div style={{ maxWidth: 480, margin: "24px auto", padding: 16, border: "1px solid #eee", borderRadius: 8 }}>
        <h3>Sesión iniciada</h3>
        <p><b>Usuario:</b> {user?.name || user?.email || user?.identification}</p>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 520, margin: "24px auto", padding: 16, border: "1px solid #eee", borderRadius: 8 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button
          onClick={() => setMode("login")}
          style={{ padding: "8px 12px", background: mode === "login" ? "#660099" : "#ccc", color: "#fff", border: 0, borderRadius: 6 }}
        >
          Iniciar sesión
        </button>
        <button
          onClick={() => setMode("register")}
          style={{ padding: "8px 12px", background: mode === "register" ? "#660099" : "#ccc", color: "#fff", border: 0, borderRadius: 6 }}
        >
          Registrarme
        </button>
      </div>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        {mode === "register" && (
          <>
            <label>
              Nombre completo*
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Email*
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
              Celular* (solo para source=main)
              <input value={cellphone} onChange={(e) => setCellphone(e.target.value)} required />
            </label>
          </>
        )}

        <label>
          Tipo de identificación*
          <select value={identification_type_id} onChange={(e) => setType(e.target.value)}>
            <option value={1}>Cédula (1)</option>
            <option value={2}>Pasaporte (2)</option>
          </select>
        </label>

        <label>
          Identificación*
          <input value={identification} onChange={(e) => setIdentification(e.target.value)} required />
        </label>

        {mode === "login" && (
          <label>
            Contraseña* {`(por defecto es la misma identificación si te registraste aquí)`}
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
        )}

        {err && <div style={{ color: "crimson" }}>{err}</div>}

        <button type="submit" disabled={loading} style={{ padding: "10px 14px", background: "#660099", color: "#fff", border: 0, borderRadius: 6 }}>
          {loading ? "Enviando..." : (mode === "register" ? "Crear cuenta" : "Entrar")}
        </button>
      </form>

      {mode === "register" && (
        <p style={{ marginTop: 12, fontSize: 13, color: "#555" }}>
          * Al registrarte, la contraseña se genera automáticamente como tu número de identificación.
          Luego hacemos login automático con esos datos.
        </p>
      )}
    </div>
  );
}
