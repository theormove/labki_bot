let ans1 = document.getElementById('faq_answer_1');
let ans2 = document.getElementById('faq_answer_2');
let ans3 = document.getElementById('faq_answer_3');
let ans4 = document.getElementById('faq_answer_4');
let ans5 = document.getElementById('faq_answer_5');
let que1 = document.getElementById('faq_question_1');
let que2 = document.getElementById('faq_question_2');
let que3 = document.getElementById('faq_question_3');
let que4 = document.getElementById('faq_question_4');
let que5 = document.getElementById('faq_question_5');
console.log('ddd');
que1.onclick = function(){
	if (ans1.style.display=="block"){
		ans1.style.display="none";
	}else{
		ans1.style.display="block";
	}

};
que2.onclick = function(){
	if (ans2.style.display=="block"){
		ans2.style.display="none";
	}else{
		ans2.style.display="block";
	} 
};
que3.onclick = function(){
	if (ans3.style.display=="block"){
		ans3.style.display="none";
	}else{
		ans3.style.display="block";
	}
};
que4.onclick = function(){
	if (ans4.style.display=="block"){
		ans4.style.display="none";
	}else{
		ans4.style.display="block";
	}
};
que5.onclick = function(){
	if (ans5.style.display=="block"){
		ans5.style.display="none";
	}else{
		ans5.style.display="block";
	}
};