interface PlanCardProps {
  title: string;
  trial: string;
  price: string;
  isActive: boolean;
  onClick: () => void;
}

export default function PlanCard({ title, trial, price, isActive, onClick }: PlanCardProps) {
  return (
    <button
      type="button"
      className={`flex gap-6 p-6 w-full max-w-170 mx-auto text-left bg-mist rounded-sm cursor-pointer border-4 ${
        isActive ? "border-green" : "border-line-dark"
      }`}
      onClick={onClick}
    >
      <div className="size-6 rounded-full border-2 border-black flex items-center justify-center shrink-0">
        {isActive && <div className="size-1.5 rounded-full bg-black" />}
      </div>
      <div>
        <p className="font-semibold text-navy mb-2 text-base md:text-lg">{title}</p>
        <p className="font-bold text-navy mb-2 text-xl md:text-2xl">{price}</p>
        <p className="text-muted text-xs md:text-sm">{trial}</p>
      </div>
    </button>
  );
}
