function Slider(props) {
  //TODo logica
  let posters =
    props &&
    props.items &&
    props.items.results &&
    props.items.results.map(({ id, poster_path: image }) => {
      return { id, image };
    });

  return (
    <div className="u-box">
      <h1>{props.title}</h1>
      <div className="scrollable-carousel">
        {posters &&
          posters.map((poster) => {
            let imgWithOutPath = poster.image.replace(/^.*[\\\/]/, "");
            let imgWithOutExt = imgWithOutPath.replace(/\.[^/.]+$/, "");
            return (
              <div
                key={imgWithOutExt}
                onClick={() => props.onItem(poster.id)}
                className="scrollable-carousel__item"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185/${poster.image}`}
                ></img>
              </div>
            );
          })}
      </div>
    </div>
  );
}
