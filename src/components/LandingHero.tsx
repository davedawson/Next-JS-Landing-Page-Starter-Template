type LandingHeroProps = {
  title: string;
  subtitle: string;
};
const LandingHero = (props: LandingHeroProps) => (
  <div className="col-md-9 col-lg-6 offset-md-2 offset-lg-3">
    <h1>
      <span>{props.title}</span>
    </h1>
    <h1>
      <span>{props.subtitle}</span>
    </h1>
  </div>
);

export { LandingHero };
