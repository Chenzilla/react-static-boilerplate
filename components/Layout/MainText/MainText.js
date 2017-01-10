import React from 'react';
import ProgressBar from './ProgressBar';
import s from './MainText.css';

class MainText extends React.Component {

  renderSentence(sentence){
    return <span>
              {sentence.substring(0,this.props.question.highlightedIndices[0])}
              <span className={s.highlight}>
                {sentence.substring(this.props.question.highlightedIndices[0]+1,
                                   this.props.question.highlightedIndices[1])}
              </span>
              {sentence.substring(this.props.question.highlightedIndices[1]+1)}
            </span>;
  }

  render() {
    if(!this.props.document){
      return null;
    }
    return (
      <div className={s.container}>
      	<ProgressBar/>
      	<div className={s.text_wrap}>
          {
            this.props.document.mainText.map((sentence, index) => {
              if(this.props.question && this.props.question.visibleIndex===index){
                return this.renderSentence(sentence);
              }else{
                return <span className={s.blur}>{sentence}</span>;
              }
            })
          }
      	</div>
      </div>
    );
  }
}

export default MainText;
