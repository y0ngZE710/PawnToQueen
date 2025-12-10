





    // 시계
    window.onload = function () {
        const clock = document.getElementById('clock');

        setInterval(function () {
            const now = new Date();
            clock.innerHTML = now.toString();
        }, 1000);
    };

        
    // 토글 버튼
    $(document).ready(function () {
        $('.toggle').click(function () {
            $('.page').fadeToggle(0);
        });
    });


    //textarea 내용 저장 기능
    $(document).ready(function () {

    
        // 오프닝
        const openingKey = "storage_opening"; // 로컬 보관함 key 이름, const로 선언해서 재사용이 안되게

        $(".openingText").val(localStorage.getItem(openingKey) || "");
        // 로컬 스토리지에서 storage_opening 키로 저장된 값 가져오기
        // null이면 ""로 값을 가져옴

        $(".saveOpening").on("click", function () { // 저장 버튼 클릭할 때 아래 코드 실행.

            localStorage.setItem(openingKey, $(".openingText").val());
            // openingText를 불러와 현재 입력된 값을 읽음.
            // 그 값을 로컬 스토리지에 storage_opening 키로 저장

            alert("오프닝이 저장되었습니다!"); // 저장 완료 alert
        });

        // 전략
        const strategyKey = "storage_strategy";

        $(".strategyText").val(localStorage.getItem(strategyKey) || "");
        $(".saveStrategy").on("click", function () {

            localStorage.setItem(strategyKey, $(".strategyText").val());
            alert("전략이 저장되었습니다!");
        });

        // 전술
        const tacticsKey = "storage_tactics";

        $(".tacticsText").val(localStorage.getItem(tacticsKey) || "");
        $(".saveTactics").on("click", function () {

            localStorage.setItem(tacticsKey, $(".tacticsText").val());
            alert("전술이 저장되었습니다!");
        });

        // 교훈적인 경기
        const instructiveKey = "storage_instructive";

        $(".instructiveText").val(localStorage.getItem(instructiveKey) || "");
        $(".saveinstructive").on("click", function () {

            localStorage.setItem(instructiveKey, $(".instructiveText").val());
            alert("교훈적인 경기가 저장되었습니다!");
        });
    });