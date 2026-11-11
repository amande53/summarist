import SettingsDetails from "../../../components/settings/SettingsDetails";

export default function Page() {
  return (
    <div>
      <h1 className="text-left border-b border-b-line pb-4 text-[32px] leading-normal text-navy mb-8 font-bold">
        Settings
      </h1>
      <SettingsDetails />
    </div>
  );
}
