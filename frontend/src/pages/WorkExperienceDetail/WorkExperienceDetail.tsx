import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Alert, Spinner } from "react-bootstrap";
import { Box, Icon } from "@mui/material";
import { FaPython } from "react-icons/fa";

import { useAppDispatch } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getWorkExperienceDetail } from "../../redux/actions/resumeActions";
import getIcon from "../../helperFunctions/getIcon";

import "./WorkExperienceDetail.css";

const WorkExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (itemId: number) => {
    setExpandedItems((previous) =>
      previous.includes(itemId)
        ? previous.filter((currentId) => currentId !== itemId)
        : [...previous, itemId]
    );
  };

  const { loading, error, workExperience } = useTypedSelector(
    (state) => state.workExperienceDetail
  );

  useEffect(() => {
    if (id) {
      dispatch(getWorkExperienceDetail(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (workExperience) {
      document.title = `${workExperience.job_title ?? "Work Experience"} | ${workExperience.title}`;
    }

    return () => {
      document.title = "Ash's Resume";
    };
  }, [workExperience]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <Spinner animation="border" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <Alert variant="danger">{error}</Alert>
      </Box>
    );
  }

  if (!workExperience) {
    return null;
  }

  // Group technologies using their database category.
  const technologyGroups = workExperience.technologies.reduce<Record<string, string[]>>(
    (groups, item) => {
      const category = item.technology_stack.category.name;

      if (!groups[category]) {
        groups[category] = [];
      }

      groups[category].push(item.technology_stack.name);

      return groups;
    },
    {}
  );

  // Collect experiences belonging to the work projects.
  const responsibilities = workExperience.work_projects.flatMap((project) => project.experiences);

  return (
    <div className="work-experience-detail">
      {/* Breadcrumb */}
      <nav className="work-detail-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">⌂</Link>
        <span>/</span>
        <Link to="/">Resume</Link>
        <span>/</span>
        <Link to="/">Work Experience</Link>
        <span>/</span>
        <span className="breadcrumb-current">{workExperience.title}</span>
      </nav>

      {/* Company header */}
      <section className="work-detail-header">
        <div className="work-detail-company-logo">
          {workExperience.company_logo ? (
            <img src={workExperience.company_logo} alt={`${workExperience.title} logo`} />
          ) : (
            <span>{workExperience.title}</span>
          )}
        </div>

        <div className="work-detail-header-divider" />

        <div className="work-detail-information">
          <h1>
            {workExperience.job_title ?? workExperience.title}
            {workExperience.job_title && (
              <span className="font-normal text-gray-500">
                {" - "}
                {workExperience.title}
              </span>
            )}
          </h1>

          <div className="work-detail-meta">
            <span>{workExperience.date}</span>

            {workExperience.location && (
              <>
                <span className="meta-dot">•</span>
                <span className="location-meta">
                  <span className="location-icon">📍</span>
                  {workExperience.location}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="work-detail-red-divider" />

      {/* Role overview */}
      <section className="work-role-overview">
        <h2 className="work-section-heading">
          <span className="section-icon">i</span>
          Role overview
        </h2>

        <p>{workExperience.description || "No description available."}</p>
      </section>

      {/* Responsibilities and technology */}
      <section className="work-main-grid">
        {/* Responsibilities */}
        <div className="work-responsibilities">
          <h2 className="work-section-heading section-with-line">
            <span className="heading-icon">▣</span>
            What I worked on
          </h2>

          <div className="responsibility-list">
            {responsibilities.length > 0 ? (
              responsibilities.map((item) => {
                const expanded = expandedItems.includes(item.id);
                const canExpand = (item.description?.length ?? 0) > 100;

                return (
                  <article className="responsibility-card" key={item.id}>
                    <span className="responsibility-timeline-marker" aria-hidden="true" />

                    <div className="responsibility-content">
                      <h3>{item.title}</h3>

                      <p
                        className={!canExpand || expanded ? "expanded" : "collapsed"}
                        onClick={() => canExpand && toggleExpanded(item.id)}
                      >
                        {item.description || "No description available."}
                      </p>

                      {canExpand && (
                        <button
                          type="button"
                          className="responsibility-read-more"
                          onClick={() => toggleExpanded(item.id)}
                          aria-expanded={expanded}
                        >
                          {expanded ? "Read less ..." : "Read more ..."}
                        </button>
                      )}
                    </div>

                    <Icon className="service_icon" style={{ margin: "12px", fontSize: "20px" }}>
                      {getIcon(item.icon)}
                    </Icon>
                  </article>
                );
              })
            ) : (
              <p>No work experiences have been added yet.</p>
            )}
          </div>
        </div>

        {/* Technology stack */}
        <div className="work-technologies">
          <h2 className="work-section-heading section-with-line">
            <span className="heading-icon">◆</span>
            Technology stack
          </h2>

          <div className="technology-groups">
            {Object.entries(technologyGroups).length > 0 ? (
              Object.entries(technologyGroups).map(([category, technologies]) => (
                <article className="technology-card" key={category}>
                  <header className="technology-card-header">
                    <h3>{category}</h3>
                  </header>

                  <div className="technology-tags">
                    {technologies.map((technology) => (
                      <span className="technology-tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))
            ) : (
              <p>No technologies have been added yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* Impact  and achievements */}
      <section className="work-achievements-grid">
        <div className="work-contributions">
          <h2 className="work-section-heading section-with-line">
            <span className="heading-icon">★</span>
            Key contributions
          </h2>

          <ul className="contribution-list">
            {workExperience.key_contributions.length > 0 ? (
              workExperience.key_contributions.map((contribution) => (
                <li key={contribution.id}>
                  <span className="contribution-check">✓</span>
                  <span>
                    <strong>{contribution.title}</strong>
                    {contribution.description && <> — {contribution.description}</>}
                  </span>
                </li>
              ))
            ) : (
              <li>No contributions have been added yet.</li>
            )}
          </ul>
        </div>

        <div className="work-impact">
          <h2 className="work-section-heading section-with-line">
            <span className="heading-icon">🏆</span>
            Impact & achievements
          </h2>

          <div className="achievement-cards">
            {workExperience.achievements.length > 0 ? (
              workExperience.achievements.map((achievement) => (
                <article className="achievement-card" key={achievement.id}>
                  <span className="achievement-icon">★</span>
                  <span>{achievement.title}</span>
                  <span>{achievement.description}</span>
                </article>
              ))
            ) : (
              <p>No achievements have been added yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* Independent learning */}
      <section className="work-related">
        <h2 className="work-section-heading">
          <span className="heading-icon">↗</span>
          Independent learning
        </h2>

        <div className="related-work-grid">
          {workExperience.related_studies.length > 0 ? (
            workExperience.related_studies.map((study) => (
              <article className="related-work-card" key={study.id}>
                <span className="related-work-icon cloud-icon">📚</span>

                <span className="related-work-content">
                  <strong>{study.title}</strong>

                  <small>
                    {study.institution}
                    {study.description && ` · ${study.description}`}
                    {study.study_date && ` · ${study.study_date}`}
                  </small>

                  {study.study_url && (
                    <a href={study.study_url} target="_blank" rel="noopener noreferrer">
                      View documentation
                    </a>
                  )}
                </span>
              </article>
            ))
          ) : (
            <p>No independent learning topics have been added yet.</p>
          )}
        </div>
      </section>

      {/* Back navigation */}
      <div className="work-detail-back">
        <Link to="/">
          <span>←</span>
          Back to resume
        </Link>
      </div>
    </div>
  );
};

export default WorkExperienceDetail;
