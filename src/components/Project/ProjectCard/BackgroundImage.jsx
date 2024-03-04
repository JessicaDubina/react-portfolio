const styles = {
    img: {
        height: "auto",
        width: "100%",
        resizeMode: "cover"
    },
  };

export default function BackgroundImage({image}) {
    return (
        <>
        <img src={image} alt="Project Picture" style={styles.img}/>
        </>
    );
}
    