import { Link, useSearchParams } from "react-router-dom";
import { HeroConceptA } from "./HeroConceptA";
import { HeroConceptA2 } from "./HeroConceptA2";
import { HeroConceptB } from "./HeroConceptB";
import { HeroConceptC } from "./HeroConceptC";
import "./visual-lab.css";

export type Concept = "a" | "a1" | "a2" | "b" | "c";

const concepts = [
  { id: "a1", name: "Connected infrastructure — original", short: "Original" },
  { id: "a2", name: "Connected infrastructure — version 2", short: "Refined" },
  { id: "b", name: "Premium enterprise", short: "Enterprise" },
  { id: "c", name: "Futuristic corporate", short: "Futuristic" },
] as const;

export default function VisualLab({ concept }: { concept: Concept }) {
  const selectedConcept = concept === "a" ? "a1" : concept;
  const [searchParams, setSearchParams] = useSearchParams();
  const originalParams = new URLSearchParams(searchParams);
  originalParams.delete("concept");

  return (
    <div className="visual-lab">
      <div className="vl-toolbar">
        <div className="vl-lab-label"><span />Visual design lab <small>Hero study / {selectedConcept.toUpperCase()}</small></div>
        <div className="vl-switcher" role="group" aria-label="Choose a hero concept">
          {concepts.map(({ id, name, short }) => (
            <button
              key={id}
              type="button"
              aria-label={name}
              aria-pressed={selectedConcept === id}
              onClick={() => {
                const next = new URLSearchParams(searchParams);
                next.set("concept", id);
                setSearchParams(next, { replace: true, preventScrollReset: true });
              }}
            >
              <b>{id.toUpperCase()}</b><span>{short}</span>
            </button>
          ))}
        </div>
        <Link className="vl-original" to={{ pathname: "/", search: originalParams.toString() }}>Original ↗</Link>
      </div>
      {selectedConcept === "a1" ? <HeroConceptA /> : selectedConcept === "a2" ? <HeroConceptA2 /> : concept === "b" ? <HeroConceptB /> : <HeroConceptC />}
      <div className="vl-caption">
        <span>CONCEPT {selectedConcept.toUpperCase()} / {concepts.find((item) => item.id === selectedConcept)?.name}</span>
        <span>Temporary hero prototype</span>
      </div>
    </div>
  );
}
