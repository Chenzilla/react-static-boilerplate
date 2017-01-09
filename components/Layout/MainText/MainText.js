import React from 'react';
import ProgressBar from './ProgressBar';
import s from './MainText.css';

class MainText extends React.Component {
  render() {
    return (
      <div className={s.container}>
      	<ProgressBar/>
      	<div className={s.text_wrap}>
        	<span className={s.blur}>Increased markings with hyperinflation suggests viral illness or reactive airway disease.</span>
        	<span><span className={s.highlight}>Moderate bowel gas distention</span> left upper quadrant.</span>
        	<span className={s.blur}> Unusual visualization of the inner and outer wall of a bowel loop in the left upper quadrant. The patient was upright on the chest x-ray and there is no evidence for free air on the upright film. This finding may then be best explained by the administration of contrast or coating of the bowel wall by an ingested substance. Findings should be correlated clinically. If there are abdominal symptoms a followup abdomen film could be considered. Findings conveyed to the referring clinician’s office at time of interpretation. </span> 
      	</div>
      </div>
    );
  }
}

export default MainText;
