import React from "react";

const Trailer = (props) => {

  return (
    <div>
      {props.Movies.filter((el) => el.name === props.match.params.name).map(
        (el) => {
          return (
            <div key={el.id}>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Trailer;
