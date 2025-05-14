interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const SectionHeader = ({ title, description, action }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-9">
      <div
        className="flex flex-row justify-between items-center"
        style={{ width: action ? "100%" : "auto" }}
      >
        <div className="flex justify-center h-full">
          <h1 className="text-center text-white text-xl md:text-3xl font-semibold md:font-bold font-['Vazirmatn'] capitalize">
            {title.split(" ")[0]}{" "}
            <span className="text-red-600">
              {title
                .split(" ")
                .filter((text, index) => index !== 0)
                .join(" ")}
            </span>
          </h1>
        </div>
        <div>
          {action && <div className="flex justify-center mt-4">{action}</div>}
        </div>
      </div>
      <p className="text-center text-white text-xs sm:text-base font-normal font-['Vazirmatn'] capitalize">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
