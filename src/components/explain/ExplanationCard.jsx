import "./ExplanationCard.css";

function ExplanationCard({
  title,
  description,
  icon,
  children,
  className = "",
}) {
  return (
    <section
      className={`explanation-card ${className}`}
    >
      <div className="explanation-card-header">
        {icon && (
          <div className="explanation-card-icon">
            {icon}
          </div>
        )}

        <div>
          <h3>{title}</h3>

          {description && (
            <p>{description}</p>
          )}
        </div>
      </div>

      <div className="explanation-card-body">
        {children}
      </div>
    </section>
  );
}

export default ExplanationCard;