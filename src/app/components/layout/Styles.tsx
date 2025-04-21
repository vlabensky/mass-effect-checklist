const Styles = () => {
  return (
    <style jsx global>
      {` /* ... CSS Variables and Theme Styles ... */
        /* CSS Variables */
        :root {
          --color-background: #111827;
          --color-background-gradient-end: #000000;
          --color-background-list: #1f2937;
          --color-background-header: #374151;
          --color-background-hover: #4b5563;
          --color-background-subtle: #1f2937;
          --color-input-bg: #4b5563;
          --color-text-primary: #f9fafb;
          --color-text-secondary: #d1d5db;
          --color-text-disabled: #6b7280;
          --color-text-footer: #6b7280;
          --color-text-accent: #93c5fd;
          --color-border: #374151;
          --color-border-input: #6b7280;
          --color-border-tab-active: #3b82f6;
          --color-border-tab-inactive: transparent;
          --color-accent: #3b82f6;
          --color-focus-ring: #3b82f6;
        }
        html.theme_dark {
          --color-background: #111827;
          --color-background-gradient-end: #000000;
          --color-background-list: #1f2937;
          --color-background-header: #374151;
          --color-background-hover: #4b5563;
          --color-background-subtle: #1f2937;
          --color-input-bg: #4b5563;
          --color-text-primary: #f9fafb;
          --color-text-secondary: #d1d5db;
          --color-text-disabled: #6b7280;
          --color-text-footer: #6b7280;
          --color-text-accent: #93c5fd;
          --color-border: #374151;
          --color-border-input: #6b7280;
          --color-border-tab-active: #3b82f6;
          --color-border-tab-inactive: transparent;
          --color-accent: #3b82f6;
          --color-focus-ring: #3b82f6;
        }
        html.theme_light {
          --color-background: #f9fafb;
          --color-background-gradient-end: #e5e7eb;
          --color-background-list: #ffffff;
          --color-background-header: #f3f4f6;
          --color-background-hover: #e5e7eb;
          --color-background-subtle: #ffffff;
          --color-input-bg: #e5e7eb;
          --color-text-primary: #111827;
          --color-text-secondary: #374151;
          --color-text-disabled: #9ca3af;
          --color-text-footer: #6b7280;
          --color-text-accent: #2563eb;
          --color-border: #e5e7eb;
          --color-border-input: #9ca3af;
          --color-border-tab-active: #2563eb;
          --color-accent: #2563eb;
          --color-focus-ring: #2563eb;
        }
        html.theme_hc_dark {
          --color-background: #000000;
          --color-background-gradient-end: #000000;
          --color-background-list: #000000;
          --color-background-header: #000000;
          --color-background-hover: #333333;
          --color-background-subtle: #000000;
          --color-input-bg: #000000;
          --color-text-primary: #ffffff;
          --color-text-secondary: #ffff00;
          --color-text-disabled: #aaaaaa;
          --color-text-footer: #aaaaaa;
          --color-text-accent: #ffff00;
          --color-border: #ffffff;
          --color-border-input: #ffffff;
          --color-border-tab-active: #ffff00;
          --color-accent: #ffff00;
          --color-focus-ring: #ffff00;
        }
        html.theme_hc_light {
          --color-background: #ffffff;
          --color-background-gradient-end: #ffffff;
          --color-background-list: #ffffff;
          --color-background-header: #ffffff;
          --color-background-hover: #eeeeee;
          --color-background-subtle: #ffffff;
          --color-input-bg: #ffffff;
          --color-text-primary: #000000;
          --color-text-secondary: #0000ff;
          --color-text-disabled: #555555;
          --color-text-footer: #555555;
          --color-text-accent: #0000ff;
          --color-border: #000000;
          --color-border-input: #000000;
          --color-border-tab-active: #0000ff;
          --color-accent: #0000ff;
          --color-focus-ring: #0000ff;
        }
        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--color-background);
        }
        .transition-max-height {
          transition-property: max-height;
        }
        .sticky {
          position: sticky;
        }
        .top-0 {
          top: 0;
        }
        .z-10 {
          z-index: 10;
        }
        .z-20 {
          z-index: 20;
        }
        /* For settings menu */
        /* Utility classes using CSS variables */
        .bg-background {
          background-color: var(--color-background);
        }
        .bg-gradient-to-b {
          background-image: linear-gradient(to bottom, var(--color-background), var(--color-background-gradient-end));
        }
        .bg-background-list {
          background-color: var(--color-background-list);
        }
        .bg-background-header {
          background-color: var(--color-background-header);
        }
        .hover\\:bg-background-hover:hover {
          background-color: var(--color-background-hover);
        }
        .bg-background-subtle {
          background-color: var(--color-background-subtle);
        }
        .bg-input-bg {
          background-color: var(--color-input-bg);
        }
        .text-text-primary {
          color: var(--color-text-primary);
        }
        .text-text-secondary {
          color: var(--color-text-secondary);
        }
        .text-text-disabled {
          color: var(--color-text-disabled);
        }
        .text-text-footer {
          color: var(--color-text-footer);
        }
        .text-accent {
          color: var(--color-text-accent);
        }
        .border-border {
          border-color: var(--color-border);
        }
        .border-border-input {
          border-color: var(--color-border-input);
        }
        .border-accent {
          border-color: var(--color-accent);
        }
        .border-transparent {
          border-color: transparent;
        }
        .focus\\:ring-accent:focus {
          --tw-ring-color: var(--color-focus-ring);
          box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        }
        .focus\\:ring-offset-background:focus {
          --tw-ring-offset-color: var(--color-background);
        }
        .text-accent {
          color: var(--color-accent);
        }
      `}
    </style>
  );
};

export default Styles;
