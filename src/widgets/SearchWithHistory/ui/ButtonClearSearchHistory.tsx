type Props = {
  clearHistory: () => void;
};

export const ButtonClearSearchHistory = ({ clearHistory }: Props) => {
  return (
    <button className="text-xl font-mono px-2 bg-bg w-full border-2 border-transparent hover:border-white" onClick={clearHistory}>
      Clear
    </button>
  );
};
