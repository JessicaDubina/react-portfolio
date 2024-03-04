const styles = {
    img: {
        height: "auto",
        width: "500px"
    },
  };

export default function BackgroundImage({image}) {
    return (
        <>
        <img src={image} alt="Project Picture" style={styles.img}/>
        </>
    );
}
    