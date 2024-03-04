export default function ProjectHeader({project}) {
  return (
    <div className="card-header m-3 border">
      <h3 className="text-center">{project.title}</h3>
    </div>
  );
}
