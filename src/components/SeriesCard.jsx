export const SeriesCard = (props) => {
  //  console.log(props);


  return (

    <li className="card" key={props.curElem.id}>
      <div>
        <img src={props.curElem.img_url} width="40%" height="40%"></img>
      </div>
      <div className="card-content">
        <h2>Name: {props.curElem.name}</h2>
        <h3>Rating: {props.curElem.rating}</h3>
        <p>Summary: {props.curElem.description}</p>
        <p >Cast: {props.curElem.cast}</p>
        <p>Genre: {props.curElem.genre} </p>
        <a href={props.curElem.watch_url} target="_blank">
          <button className="watch_now_button">Watch Now</button>
        </a>
      </div>
    </li>
  )

};