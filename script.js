//your JS code here. If required.
const btn = document.querySelector("#btn");
 const name = document.querySelector("#name").value.trim();
  const age = Number(document.querySelector("#age").value.trim());

btn.addEventListener('click',() =>{
	 
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