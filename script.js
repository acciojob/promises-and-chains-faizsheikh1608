//your JS code here. If required.
const btn = document.querySelector("#btn");

btn.addEventListener('click',() =>{
	 
 const name = document.querySelector("#name").value.trim();
  const age = Number(document.querySelector("#age").value.trim());
	let promise = new Promise((resolve,reject) => {
		
		if(age > 18){
			resolve(`Welcome ${name}, You can vote.`)
		}else{
		reject(`Oh sorry ${name}, You aren't old enough.`)
		}
	});

	promise.then((res) =>{
		alert(res);
	}).catch((err) => {
		alert(err)
	})
});