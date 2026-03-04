interface Props {
  number: string;
  title: string;
}

const SectionHeader = ({ number, title }: Props) => (
  <div className="mb-10">
    <p className="section-number mb-2">§ {number} — {title}</p>
    <div className="section-rule" />
  </div>
);

export default SectionHeader;
