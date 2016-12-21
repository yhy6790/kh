/**
 * event_test.js
 * 자바스크립트 이벤트와 이벤트 핸들러 테스트용 소스 파일
 */

//alert("event_test.js 파일 연결 성공...")

window.onload = function() {
	//알림창 자동 출력 처리
	window.open("../view/gongji.html","gongji","width=400, height=300, menubar=no, toolbar=no, status=no, location=no, resizable=no, titlebar=no, scrollbars=no");
	
	//id가 btn인 태그 엘리먼트가 클릭되었을 때의 동작처리
	var btn = document.getElementById("btn");
	btn.onclick = function(e) {
		console.log(e.target);
		console.log(e.x); //클릭한 지점의 마우스 포인터 x
		console.log(e.y); //클릭한 지점의 마우스 포인터 y
		console.log(e.target.offsetLeft); //대상 요소의 left
		console.log(e.target.offsetTop); //대상 요소의 right
	}
	
	//nation 의 선택값이 변경되었을 때, 선택된 nation 의 값을 읽어서
	//그 값에 대한 li 항목의 배경색과 글자색을 변경처리함
	
	var li = document.getElementsByTagName("li");
	var nation = document.getElementById("nation");
	/* onchange - value 데이터가 바뀌면
	onclick - 클릭하면
	onmouseover - 마우스가 올라가면
	onmouseout - 마우스가 내려가면
	onfocus - 선택되면
	onblur - 선택 해제되면
	keypress, keyup … 등 */
	nation.onchange = function() {
		li[0].style.backgroundColor = "";
		li[1].style.backgroundColor = "";
		li[2].style.backgroundColor = "";
		li[3].style.backgroundColor = "";
		li[this.value].style.backgroundColor = "red";
		
		li[0].style.color = "";
		li[1].style.color = "";
		li[2].style.color = "";
		li[3].style.color = "";
		li[this.value].style.color = "yellow";
	}
}