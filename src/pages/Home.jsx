import React, { useState } from "react";

export const HomePage = () => {
	const [url, setURL] = useState("");

	const handleUrlChange = (e) => {
		setURL(e);
		let originalURL = e;
		let wwwBreak = "www.";
		let comBreak = ".com";
		let returnedURL = originalURL
			.split(wwwBreak)
			.join("")
			.split(comBreak)
			.join("");
		console.log(returnedURL);
		setURL(returnedURL);
	};

	return (
		<div>
			<h1>URL Cutter</h1>
			<input
				onChange={(e) => {
					handleUrlChange(e.target.value);
				}}
			/>
			<div>
				<a>{url}</a>
			</div>
		</div>
	);
};
