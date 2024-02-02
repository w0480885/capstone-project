import {useState, useMemo, useEffect} from "react";

function useMediaQuery(query: String) {
	// https://blog.tomaszgil.me/how-to-use-css-media-queries-in-react-components
	
	const media_query = useMemo(() => window.matchMedia(query), [query]);
	const [match, set_match] = useState(media_query.matches);

	useEffect(() => {
		const on_change = () => set_match(media_query.matches);
		media_query.addEventListener("change", on_change);

		return () => media_query.removeEventListener("change", on_change);
	}, [media_query]);

	return match;
}

export {useMediaQuery};
