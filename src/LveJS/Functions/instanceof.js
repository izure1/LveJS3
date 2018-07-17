import LveJSObjectSession from '../LveJSObjectSession';
import LveJSObject from '../LveJSObject';

export default function instanceOf(t) {

		return t instanceof LveJSObjectSession || t instanceof LveJSObject;

};