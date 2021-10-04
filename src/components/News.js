import React from 'react';
import { styles } from '../styles/news'

//komponent klasowy ->
// class News extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         date: new Date(),
//         score: 5
//       }
//     }
//     render() {
//       const {header, opis} = this.props;
//       const {score} = this.state;
//       return (
//           <div>
//           <h1 style={styles.h1}>{header}</h1>
//           <p>{opis}</p>
//           <p>{score}</p>
//           </div>
//         );
//     }
//   }

  //function component ->
  function News({ title, intro }) {
  const checkLengthOfIntro = () => {
      if (intro.length > 25) {
        return `${intro.slice(0, 25)}...`;
    } else {
      return { intro };
    }
  }
  return (
    <div>
    <h1 style={styles.h1}> {title}</h1>
    <p>{checkLengthOfIntro()}</p>
    </div>
  );
  }

  export default News;