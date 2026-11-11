interface PlanFeatureProps {
  icon: React.ReactNode;
  highlight: string;
  text: string;
}

export default function PlanFeature({ icon, highlight, text }: PlanFeatureProps) {
  return (
    <div>
      <div className="flex justify-center text-navy mb-3 text-[60px]">{icon}</div>
      <p className="text-ink leading-normal">
        <b>{highlight}</b> {text}
      </p>
    </div>
  );
}
