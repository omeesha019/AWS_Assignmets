let inputString = "Hello Serverless Example";
exports.handler = async(event)=>{
if(event.httpMethod==='GET'){
	return getInputString(event);
}
if(event.httpMethod==='PUT'){
	return createInput(event);
}
};

function getInputString(event){
const response ={
statusCode:200,
body: JSON.stringify({input:inputString}),
};
return response;
}

function ceateInput(event){
const inputNew=JSON.parse(event.body);
const response = {
statuCode:200,
body: JSON.stringify({message:"Created input successfully", 
input: inputNew}),
};
