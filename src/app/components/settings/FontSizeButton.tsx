import type { ReactNode, MouseEventHandler } from 'react';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  ariaLabel: string;
  disabled?: boolean;
  children: ReactNode;
};

const FontSizeButton = ({ onClick, children, ariaLabel, disabled }: Props) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    className={`px-2 py-1 mx-1 rounded-md border border-border-input text-text-secondary hover:bg-background-hover focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed`}
  >
    {children}
  </button>
);

export default FontSizeButton;
