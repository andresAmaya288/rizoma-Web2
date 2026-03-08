const SectionDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className="relative h-px w-full max-w-4xl mx-auto my-0">
    <div
      className={`absolute inset-0 ${
        flip
          ? "bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
          : "bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      }`}
    />
  </div>
);

export default SectionDivider;
