import { LuLoader } from "react-icons/lu";

const FullScreenLoading = () => (
  <div className="fixed inset-0 opacity-50 bg-white flex items-center justify-center z-60 pointer-events-auto">
    <LuLoader className="w-8 h-8 animate-spin" />
  </div>
);

export { FullScreenLoading };
