import profpic from '../../../assets/profpic.jpg'

const styles = {
    size: {
      width: '100%',
      height: 'auto',
      resizeMode: "contain",
    },
  };


export default function ProfilePic() {
    return (
        <>
        <img src={profpic} alt="Profile Picture" style={styles.size}/>
        </>
    );
}
    