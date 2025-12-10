






let selecting = null; // 현재 선택된 칸을 저장하는 변수.

// 모든 .cell 요소에 각각 클릭 이벤트 등록.
  document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", () => {

      // 기물이 있는 칸만 선택되게 하는 코드
      
      if (!selecting) { // selcting이 0이라면(아무 칸도 선택되지 않은 상태이라면)
        if (cell.querySelector("img")) { // 클릭한 셀 안에 이미지가 있다면
          selecting = cell; // 그 셀을 선택 상태로 저장
          selecting.classList.add("selected"); // css 'selected' 추가(빨간 테두리)
        }
        return;
      }

      // 이미 누른 칸이면 선택 취소하는 코드

      if (selecting === cell) {
        // 현재 선택 되었다고 저장 되어있는 칸과 누른 칸이 같을 때
        // (현재 선택한 셀을 다시 클릭한 경우)

        selecting.classList.remove("selected"); // css "selected"를 제거
        selecting = null; // 현재 선택 된 칸 = null
        return;
      }

      // 기물 이동
      const move = selecting.querySelector("img"); // 선택된 칸의 img를 move에 저장
      const takes = cell.querySelector("img"); // 누른 칸의 img를 takes에 저장

      // 말 이동
      cell.appendChild(move); // 누른 칸에 move에서 저장된 이미지 추가

      // 기물 잡기
      if (takes) takes.remove(); // takes에 값이 있으면(대상 칸에 기물이 있으면) 제거


      // 기물을 두고 다시 기물을 둘 수 있게 원래 상태로 복구
      selecting.classList.remove("selected"); // 선택된 셀의 css "selected" 제거
      selecting = null; // 선택 초기화
    });
  });