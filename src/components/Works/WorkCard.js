import "./WorkCard.css";

function WorkCard(props) {
  let cardTitle = props.title;
  let cardYear = props.year;
  let cardImg = props.image;
  let cardEmoji = props.emoji;

  return (
    <div className="work-card-container">
      <div className="work-card-image">
        <img src={cardImg} alt={cardTitle}></img>
      </div>
      <div className="work-card-title">
        <h3>{cardEmoji}</h3>
        <h3>{cardTitle}</h3>
        <h3 className="year">{cardYear}</h3>
      </div>
    </div>
  );
}

export default WorkCard;
