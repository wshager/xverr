export function error(qname,message){
	console.error(qname,message);
	return new Error(message);
}
