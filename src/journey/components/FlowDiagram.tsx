import type { FlowStep } from "../content";

/** A labelled sequence. The moving marker is decorative; the ordered list carries the meaning. */
export default function FlowDiagram({ steps, caption }: { steps: FlowStep[]; caption: string }) {
  return (
    <figure className="flow">
      <figcaption>{caption}</figcaption>
      <div className="flow-track">
        <span className="flow-marker" aria-hidden="true" />
        <ol>
          {steps.map((s) => (
            <li key={s.label}>
              <span className="flow-node" aria-hidden="true" />
              <span className="flow-label">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
