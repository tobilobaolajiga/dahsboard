import Logo from './Logo';
import MenuFeatures from './MenuFeatures';
import Mode from './Mode';
export default function Menu() {
  return (
    <div className="w-[100px] mx-[14px] flex flex-col place-items-center">
      <Logo />
      <div className="flex flex-col justify-between h-full items-center">
        <MenuFeatures />
        <Mode />
      </div>
    </div>
  );
}
