interface SectionTitleProps {
  title: string;
  classList?: string;
}

const SectionTitle = ({ title, classList }: SectionTitleProps) => {
  return (
    <div className={`${classList} col-span-7 flex text-black`}>
      <h3 className="slider left ">{title}</h3>
    </div>
  );
};

export default SectionTitle;
