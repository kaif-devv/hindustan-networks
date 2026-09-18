import { HeroFrame } from "./HeroFrame";

export function HeroConceptB() {
  return (
    <HeroFrame concept="b" background={
      <div className="vl-enterprise-light" aria-hidden="true">
        <div className="vl-light-disc" />
        <div className="vl-glass-plane vl-glass-plane-back" />
        <div className="vl-glass-plane vl-glass-plane-front" />
      </div>
    } />
  );
}
