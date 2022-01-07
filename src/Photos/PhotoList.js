
import React from 'react';


const PhotoList = props => {

	const Img = props => (
		<li className="img-wrap">
		  <img src={props.url} alt=""/>
		</li>
	  );

	const results = props.data;
	let imgs = results.map(img => <Img url={img.urls.small} key={img.id}/>);

	return (
		<ul className="img-list">
			{imgs}
		</ul>
	);
};

export default PhotoList;