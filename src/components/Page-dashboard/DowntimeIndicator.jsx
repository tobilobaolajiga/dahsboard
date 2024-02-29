import BankStat from './BankStat';
export default function DowntimeIndicator() {
  return (
    <div>
      <div className="bg-white ml-0 mt-4 mb-0 mr-4 pt-8 px-4 pb-4 rounded-lg h-[360px]">
        <p className="font-semibold text-sm font-poppins text-center">
          Downtime Indicator
        </p>
        <img src="./World Map.svg" alt="" className="mt-2" />
        <div>
          <BankStat
            bankName="First Bank"
            time="Just now"
            status="./LineFirst.svg"
          />
          <BankStat
            bankName="Zenith Bank"
            time="Today, 11:59 AM"
            status="./lineZenith.svg"
          />
          <BankStat
            bankName="Access Bank"
            time="Today, 11:59 AM"
            status="./lineAccess.svg"
          />
          <BankStat
            bankName="Gtbank"
            time="Today, 11:59 AM"
            status="./lineGt.svg"
          />
        </div>
      </div>
    </div>
  );
}
