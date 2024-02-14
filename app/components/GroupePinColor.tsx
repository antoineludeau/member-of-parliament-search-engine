const GroupePinColor = ({
  groupAcronym,
}: {
  groupAcronym: string;
}): JSX.Element => {
  const groupBgColorDictionnary = {
    MODEM: "bg-modem",
    NI: "bg-ni",
    ECO: "bg-eco",
    GDR: "bg-gdr",
    HOR: "bg-hor",
    LFI: "bg-lfi",
    LR: "bg-lr",
    LIOT: "bg-liot",
    RN: "bg-rn",
    REN: "bg-ren",
    SOC: "bg-soc",
  };

  return (
    <div className="mt-1 flex items-center gap-x-1.5">
      <div
        className={`flex-none rounded-full ${
          groupBgColorDictionnary[
            groupAcronym as keyof typeof groupBgColorDictionnary
          ]
        } bg-opacity-20 p-1`}
      >
        <div
          className={`h-1.5 w-1.5 rounded-full ${
            groupBgColorDictionnary[
              groupAcronym as keyof typeof groupBgColorDictionnary
            ]
          }`}
        />
      </div>
      <p className="text-xs leading-5 text-gray-500"></p>
    </div>
  );
};

export default GroupePinColor;