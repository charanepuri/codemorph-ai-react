import "./PageHeader.css";

function PageHeader({
  title,
  description,
  children,
}) {
  return (
    <section className="page-header">

      <div>

        <h1>{title}</h1>

        <p>{description}</p>

      </div>

      {children && (
        <div className="page-header-actions">
          {children}
        </div>
      )}

    </section>
  );
}

export default PageHeader;