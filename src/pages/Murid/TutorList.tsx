interface Teacher {
  name: string;
  subject: string;
  rating: number;
  price: string;
  joined: boolean;
}

const teachers: Teacher[] = [
  {
    name: "Pak Budi",
    subject: "Matematika",
    rating: 4.8,
    price: "Rp100.000",
    joined: false,
  },
  {
    name: "Bu Sari",
    subject: "Fisika",
    rating: 4.7,
    price: "Rp120.000",
    joined: true,
  },
  {
    name: "Pak Andi",
    subject: "Kimia",
    rating: 4.6,
    price: "Rp90.000",
    joined: false,
  },
  {
    name: "Bu Rina",
    subject: "Biologi",
    rating: 4.9,
    price: "Rp110.000",
    joined: false,
  },
  {
    name: "Pak Joko",
    subject: "Sejarah",
    rating: 4.5,
    price: "Rp80.000",
    joined: true,
  },
  {
    name: "Bu Dewi",
    subject: "Geografi",
    rating: 4.4,
    price: "Rp95.000",
    joined: false,
  },
  {
    name: "Pak Hadi",
    subject: "Ekonomi",
    rating: 4.6,
    price: "Rp100.000",
    joined: false,
  },
  {
    name: "Bu Lina",
    subject: "Sosiologi",
    rating: 4.3,
    price: "Rp85.000",
    joined: false,
  },
  {
    name: "Pak Agus",
    subject: "Bahasa Indonesia",
    rating: 4.7,
    price: "Rp90.000",
    joined: true,
  },
  {
    name: "Bu Maya",
    subject: "Bahasa Inggris",
    rating: 4.8,
    price: "Rp130.000",
    joined: false,
  },
];

// Helper to render stars
function renderStars(rating: number) {
  const fullStars = Math.floor(rating); // whole stars
  const halfStar = rating - fullStars >= 0.5; // half star if needed
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <span className="flex items-center text-yellow-500">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <span key={`full-${i}`}>★</span>
        ))}
      {halfStar && <span>☆</span>}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">
            ★
          </span>
        ))}
    </span>
  );
}

export default function TeacherList() {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-center mb-6 text-2xl font-semibold">Daftar Guru</h2>

      <div className="bg-white shadow rounded-lg">
        <div className="bg-gray-200 px-4 py-2 rounded-t-lg font-semibold">
          List Guru
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teachers.map((t, i) => (
              <div
                key={i}
                className="bg-white shadow-sm rounded-lg border border-transparent cursor-pointer flex items-center p-4"
              >
                {/* Avatar */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {t.name.charAt(0)}
                </div>

                {/* Info */}
                <div className="ml-4 flex-grow">
                  <h5 className="text-lg font-semibold">{t.name}</h5>
                  <p className="text-gray-600 text-sm">{t.subject}</p>
                  <div className="mt-2 flex items-center space-x-2 text-sm">
                    {renderStars(t.rating)}
                    <span className="text-gray-700">{t.rating.toFixed(1)}</span>
                  </div>
                  <div className="mt-1 font-bold">{t.price}</div>
                </div>

                {/* Action */}
                {!t.joined && (
                  <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700">
                    Sign In
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
