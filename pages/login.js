export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-4 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded px-4 py-2"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white font-semibold rounded px-4 py-2 hover:bg-indigo-600 transition"
        >
          Login
        </button>
      </form>
    </main>
  );
}
