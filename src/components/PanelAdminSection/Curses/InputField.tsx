interface PropertyInput {
  label: string;
  placeholder?: string;
  textarea?: boolean;
}

function InputField({ label, placeholder, textarea = false }: PropertyInput) {
  return (
    <div className="flex flex-col gap-1 text-right">
      <label className="text-sm font-medium">{label}</label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          className="border border-gray-400 p-2 rounded-md h-[100px]"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="border border-gray-400 w-[320px] p-2 rounded-md text-right"
        />
      )}
    </div>
  );
}

export default InputField;
