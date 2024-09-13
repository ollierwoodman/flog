type Props = {
  nExposures?: number; //millimeters
  className: string;
}

const SLOTS_PER_EXPOSURE = 8 as const;

const ExposureBackground: React.FC<Props> = ({nExposures = 1, className}) => {
  return (
    <svg
      viewBox={`0 0 ${38 * nExposures} 35`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="Perf" x="0" y="0" width="0.125" height="1">
          <rect x={1.375} y={2} width={2} height={2.8} fill="#fff" rx={0.4} />
          <rect x={1.375} y={30.2} width={2} height={2.8} fill="#fff" rx={0.4} />
        </pattern>
        <pattern id="Slot" x="0" y="0" width={4.75} height={35} patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="100" height="100" fill="url(#Perf)" />
        </pattern>
      </defs>
      <rect fill="url(#Slot)" width={38 * nExposures} height={35} />
    </svg>
  );
}

export default ExposureBackground;