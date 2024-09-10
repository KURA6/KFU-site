function validateForm() {
    // ラジオボタンが選択されているか確認
    const radios = document.getElementsByName('希望日');
    let isSelected = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isSelected = true;
            break;
        }
    }

    // 選択されていない場合はエラーメッセージを表示
    if (!isSelected) {
        document.getElementById('error-message').style.display = 'block';
        return false; // フォーム送信をキャンセル
    }

    return true; // フォーム送信を許可
}

function sanitizeInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;");
}

// フォームが送信される前にサニタイズする例
document.querySelector('form').addEventListener('submit', function (event) {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.value = sanitizeInput(input.value);
    });
});

// 画像の高さに基づいてフッターのパディングを調整
window.addEventListener('load', function() {
    adjustFooterPadding();
});

window.addEventListener('resize', function() {
    adjustFooterPadding();
});

function adjustFooterPadding() {
    var banner = document.querySelector('.contact-button-container img');
    var footer = document.querySelector('.footer');

    if (banner && footer) {
        var bannerHeight = banner.clientHeight; // バナーの高さを取得
        footer.style.paddingBottom = bannerHeight + 'px'; // フッターのpadding-bottomをバナーの高さに設定
    }
}


function validateForm() {
    let isValid = true;

    // 「いつエコキュート交換をご希望ですか？」のバリデーション
    const 希望日 = document.querySelector('input[name="希望日"]:checked');
    if (!希望日) {
        document.getElementById('error-希望日').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('error-希望日').style.display = 'none';
    }

    // 「気になる機種があれば教えてください」のバリデーション
    const modelInterest = document.querySelector('input[name="model_interest"]:checked');
    if (!modelInterest) {
        document.getElementById('error-model_interest').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('error-model_interest').style.display = 'none';
    }

    return isValid;
}

