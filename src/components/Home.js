import { useAuth } from "../context/authContext";

export function Home() {
  const { user, logout, loading } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>loading...</h1>;

  return (
    <div className="w-full max-w-xs m-auto text-blue">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-xl mb-4">Welcome {user.displayName || user.email}</p>
        <button
          className="bg-red-500 hover:bg-gray-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
    </div>
  );
}
