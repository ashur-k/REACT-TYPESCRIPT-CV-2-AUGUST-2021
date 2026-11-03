import { useState } from "react";
import { WorkExperienceDetailInterface } from "../../utils/types";

type ResponsibilityItem =
  WorkExperienceDetailInterface["work_projects"][number]["experiences"][number];

interface ResponsibilityCardProps {
  item: ResponsibilityItem;
  index: number;
}

export const ResponsibilityCard = ({ item, index }: ResponsibilityCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const canExpand = (item.description?.length ?? 0) > 130;

  return (
    <article className="responsibility-card">
      <span className="responsibility-number">{index + 1}</span>

      <div className="responsibility-content">
        <h3>{item.title}</h3>

        <p className={expanded ? "expanded" : "collapsed"}>
          {item.description || "No description available."}
        </p>

        {canExpand && (
          <button
            type="button"
            className="responsibility-read-more"
            onClick={() => setExpanded((previous) => !previous)}
            aria-expanded={expanded}
          >
            {expanded ? "Read less ↑" : "Read more →"}
          </button>
        )}
      </div>
    </article>
  );
};
