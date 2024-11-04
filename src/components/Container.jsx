export const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1320px] mx-auto ${className}`}>{children}</div>
  );
};
