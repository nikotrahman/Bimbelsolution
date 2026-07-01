export default function Register() {
  return (
    <div className="max-w-md mx-auto p-6">
      {/* Page Title */}
      <h2 className="text-center mb-6 text-2xl font-semibold">
        Register / Subscribe
      </h2>

      <div className="bg-white shadow rounded-lg">
        <div className="bg-gray-200 px-4 py-2 rounded-t-lg font-semibold">
          Form Pendaftaran
        </div>
        <div className="p-4">
          <form>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Masukkan nama"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Konfirmasi Password
              </label>
              <input
                type="password"
                placeholder="Ulangi password"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
