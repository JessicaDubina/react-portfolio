import BackgroundImage from "./BackgroundImage";


  
  export default function ProjectBody({image, bgColor}) {

    const styles= {
        bodyStyle: {
            display: "flex",
            minHeight: "5rem",
            alignItems: "center",
            backgroundColor: bgColor
        }
      }
    return (
        <div className="card-body p-0" style={styles.bodyStyle}>
            <BackgroundImage image={image}/>
        </div>
    );
  }
  