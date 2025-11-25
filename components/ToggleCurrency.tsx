import { useCurrency } from "@/providers/CurrencyProvider";

export default function ToggleCurrency() {
  const { currency, setCurrency } = useCurrency();
  return (
    <>
      <div className="flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200">
        <button
          onClick={() => setCurrency("USD")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
            currency === "USD"
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          USD
        </button>
        <button
          onClick={() => setCurrency("JPY")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
            currency === "JPY"
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          JPY
        </button>
      </div>
    </>
  );
}
