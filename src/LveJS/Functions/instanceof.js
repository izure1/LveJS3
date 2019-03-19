export default function instanceOf(t) {

	let r

	if (t && t.__system__ && t.__system__.world) {
		r = t instanceof t.__system__.world.classes.LveJSObjectSession
	}

	return !!r

}