const styles= {
  titlebar: {
    color: '#2C505E',
    fontWeight: 'bold'
  }
}

export default function ProjectHeader({project}) {
  return (
    <div className="card-header border-bottom p-0" style={styles.titlebar}>
      <h3 className="text-center">{project.title}</h3>
    </div>
  );
}
