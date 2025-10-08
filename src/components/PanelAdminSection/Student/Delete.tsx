import { GoTrash } from "react-icons/go";

interface ConfirmDeleteToastProps {
  course: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeleteToast: React.FC<ConfirmDeleteToastProps> = ({
  course,
  onConfirm,
  onCancel,
}) => (
  <div className="flex flex-col items-center justify-center mx-auto rounded-2xl p-2">
    <span className="bg-red-100 p-2 rounded-2xl mb-2">
      <GoTrash className="text-red-500 text-2xl" />
    </span>
    <p className="font-medium text-lg">حذف دوره</p>
    <p className="text-sm mt-1">
      آیا از حذف دوره <b>{course}</b> مطمئن هستید؟
    </p>
    <div className="flex justify-center gap-3 mt-3">
      <button
        onClick={onConfirm}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
      >
        بله
      </button>
      <button
        onClick={onCancel}
        className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500 transition"
      >
        خیر
      </button>
    </div>
  </div>
);

export default ConfirmDeleteToast;
