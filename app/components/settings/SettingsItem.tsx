interface SettingsItemProps {
  heading: string;
  text: string;
  children?: React.ReactNode;
}

export default function SettingsItem({ heading, text, children }: SettingsItemProps) {
  return (
    <div className="flex flex-col items-start gap-2 mb-8 pb-6 border-b border-line last:mb-0 last:border-none">
      <h2 className="text-lg font-bold text-navy">{heading}</h2>
      <p className="text-navy">{text}</p>
      {children}
    </div>
  );
}
