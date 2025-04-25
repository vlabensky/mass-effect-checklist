import type { TextKey } from "@/app/behavior/translations";
import { useTranslations } from "../language";

type Props = {
  labelKey: TextKey,
  onClick: () => void;
  isActiveTab: boolean;
};

const TabButton = ({ labelKey, onClick, isActiveTab }: Props) => {
  const { t } = useTranslations();

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold rounded-t-lg focus:outline-none transition-colors duration-200 ease-in-out border-b-2 ${
        isActiveTab
          ? "bg-background-header text-text-primary border-accent"
          : "bg-background-list text-text-secondary border-transparent hover:bg-background-hover hover:text-text-primary"
      }`}
    >
      {" "}
      {t(labelKey)}{" "}
    </button>
  );
};

export default TabButton;
