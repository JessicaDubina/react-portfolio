const styles= {
  titlebar: {
    color: '#2C505E',
  },
  font: {
    fontSize: 'calc(1.25rem + 1.25vw)'
  }
}

export default function ProjectHeader({project}) {
  return (
    <div className="card-header border-bottom p-0" style={styles.titlebar}>
      <h3 className="text-center" style={styles.font}>{project.title}</h3>
    </div>
  );
}
