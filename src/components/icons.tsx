type IconProps = {
  viewBox?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({
  viewBox = "0 0 16 16",
  className = "",
  children,
}: IconProps) => {
  return (
    <div className={`leading-4 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox={viewBox}
      >
        {children}
      </svg>
    </div>
  );
};

export const IconNoFilm = ({ className = "" }) => (
  <Icon viewBox="0 0 48 48" className={className}>
    <path fill="currentColor" d="m38.215 39.983l3.651 3.65a1.25 1.25 0 0 0 1.768-1.767l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L7.09 8.857A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5q.235 0 .465-.017M35.732 37.5H10.25a3.75 3.75 0 0 1-3.75-3.75v-19.5a3.75 3.75 0 0 1 2.46-3.522zM44 33.75a6.23 6.23 0 0 1-1.543 4.112l-1.774-1.775c.511-.64.817-1.453.817-2.337v-19.5a3.75 3.75 0 0 0-3.75-3.75H15.096l-2.5-2.5H37.75A6.25 6.25 0 0 1 44 14.25zm-6-1.25c0 .261-.067.507-.184.72l-2.56-2.559A1.499 1.499 0 0 1 38 31.5zm-28-17a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zM36.5 14a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 3 0v-1a1.5 1.5 0 0 0-1.5-1.5M10 23.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zM36.5 22a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 3 0v-1a1.5 1.5 0 0 0-1.5-1.5M10 31.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0z"></path>
  </Icon>
);

export const IconBackArrow = ({ className = "" }) => (
  <Icon viewBox="0 0 20 20" className={className}>
    <path fill="currentColor" d="M2.64 11.917h16.591a.78.78 0 0 1 .769.792a.78.78 0 0 1-.769.791H.771c-.688 0-1.03-.857-.541-1.354L5.549 6.73a.754.754 0 0 1 1.087.006a.81.81 0 0 1-.005 1.119z"></path>
  </Icon>
);

export const IconHome = ({ className = "" }) => (
  <Icon viewBox="0 0 24 24" className={className}>
    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
  </Icon>
);

export const IconArrowLeftCircle = ({ className = "" }) => (
  <Icon viewBox="0 0 24 24" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </Icon>
);