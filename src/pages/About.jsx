import ProfilePic from "../components/Images/ProfilePic";

const styles = {
  font: {
    fontSize: 'calc(1.75rem + 1.25vw)'
  },
  paragraph: {
    fontSize: 'calc(1rem + .5vw)'
  },
  size: {
    width: '20rem',
    height: 'auto',
    resizeMode: "contain",
    minWidth: "12rem"
  },
} 

export default function About() {
    return (
      <div>
        <h1 className="d-flex justify-content-center" style={styles.font}>About Me</h1>
        <div className="d-md-inline-flex m-3 justify-content-center">
          <div className="container"style={styles.size}>
            <ProfilePic />
          </div>
          <p className="px-3 mx-4 shadow border rounded bg-light" style={styles.paragraph}>
              My whole life I have been obsessed with puzzles. As a child, I would take on large jigsaw puzzles. I had a team of friends that would work on extreme challenges with me - the largest we completed was 18,000 pieces. 
              <br></br>
              <br></br>
              In college, I turned to Sudoku, where I quickly became bored with the standard 9x9 sudoku challenges and sought out a "super-sodoku" of 25x25. These puzzles required additional tools to complete, so I created a "soduko-solver" using Excel that would help me solve them. 
              <br></br>
              <br></br>
              Coding is the next puzzling challenge I am taking on, and I am excited about the road ahead.
          </p>
        </div>
        
      </div>
    );
  }
  