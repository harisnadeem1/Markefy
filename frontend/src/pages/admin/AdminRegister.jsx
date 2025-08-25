import React, { useState } from "react";

const AdminRegister = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Admin registered successfully!");
        setForm({ username: "", password: "" });
      } else {
        setMessage(data.error || "❌ Failed to register");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1
          className="text-2xl font-bold mb-6 text-center"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Register Admin
        </h1>

        {message && (
          <div className="mb-4 text-center text-sm text-red-600">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full border p-3 rounded text-sm"
            style={{ fontFamily: "'Inconsolata', monospace" }}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-3 rounded text-sm"
            style={{ fontFamily: "'Inconsolata', monospace" }}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0071bc] text-white py-3 rounded uppercase tracking-wide text-sm hover:bg-[#005a94] transition disabled:opacity-50"
            style={{ fontFamily: "'Inconsolata', monospace" }}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminRegister;
