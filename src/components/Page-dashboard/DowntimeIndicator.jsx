import BankStat from './BankStat';
import GaugeChart from 'react-gauge-chart';
import { useState, useEffect } from 'react';
export default function DowntimeIndicator() {
  const [currentPercent, setCurrentPercent] = useState();
  const [arcs, setArcs] = useState([0.5, 0.3, 0.2]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPercent(Math.random());
      setArcs([0.1, 0.5, 0.4]);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const chartStyle = {
    height: 350,
    width: 350,
    marginLeft: -80,
    marginBottom: -230,
  };
  return (
    <div>
      <div className="bg-white ml-0 mt-4 mb-0 mr-4 pt-8 px-4 pb-4 rounded-lg h-[360px]">
        <p className="font-semibold text-sm font-poppins text-center">
          Downtime Indicator
        </p>

        <GaugeChart
          id="gauge-chart8"
          style={chartStyle}
          nrOfLevels={30}
          colors={['#5BE12C', '#F5CD19', '#EA4228']}
          arcWidth={0.3}
          percent={0.37}
          formatTextValue={(value) => value + '%'}
        />

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
