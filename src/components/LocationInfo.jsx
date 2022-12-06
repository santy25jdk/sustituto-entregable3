import React from "react";

const LocationInfo = ({ locations }) => {

  return (
    <article className="card__location">
      <h2 className="card__title">{locations?.name}</h2>
			<ul>
				<li><span>Type: </span>{locations?.type}</li>
				<li><span>Dimension: </span>{locations?.dimension}</li>
				<li><span>Population: </span>{locations?.residents.length}</li>
			</ul>
    </article>
  );
};

export default LocationInfo;


