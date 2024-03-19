{
    const buttonTrigger = document.querySelector('.hm-line-icon');
    const textTrigger = document.querySelector('.hm-line-title');
    const topNavigation = document.querySelector('.mainNavi');

    buttonTrigger.addEventListener('click', function () {
        buttonTrigger.classList.toggle('active');
        topNavigation.classList.toggle('open');
    });

    textTrigger.addEventListener('click', function () {
        buttonTrigger.classList.toggle('active');
        topNavigation.classList.toggle('open');
    });

}

var images = ["visual1.jpg", "visual2.jpg"];
$(function () {
    var i = 0;
    $("#mainvisual").css("background-image", "url(images/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("#mainvisual").fadeOut("slow", function () {
            $(this).css("background-image", "url(images/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 4000);
});

$("#mainvisual").ripples({
    resolution: 512,
    dropRadius: 50,
    perturbance: 0.04,
});


//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
    strokeWidth: 0,//進捗ゲージの太さ
    duration: 2000,//時間指定(1000＝1秒)
    trailWidth: 0,//線の太さ
    text: {//テキストの形状を直接指定	
        style: {//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '0',
            transform: 'translate(-50%,-50%)',
            'font-size': '1.2rem',
            color: '#ff0000',
        },
        autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});

$('#mainNavi a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top - 70;//idの上部の距離からHeaderの高さを引いた値を取得
    $('body,html').animate({ scrollTop: pos }, 600); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
});

//任意のタブにURLからリンクするための設定
function GethashID(hashIDName) {
    if (hashIDName) {
        //タブ設定
        $('.tab li').find('a').each(function () { //タブ内のaタグ全てを取得
            var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
            if (idName == hashIDName) { //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
                var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
                $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
                $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
                //表示させるエリア設定
                $(".curriculum-area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
                $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
            }
        });
    }
};

//タブをクリックしたら
$('.tab a').on('click', function () {
    var idName = $(this).attr('href'); //タブ内のリンク名を取得  
    GethashID(idName);//設定したタブの読み込みと
    return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.curriculum-area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
    var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
    GethashID(hashName);//設定したタブの読み込み
});

const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");

animate(para1);
animate(para2);
animate(para3);

function animate(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;

    setInterval(() => {
        element.style.marginLeft = --flag + "px";

        if (elementWidth == -flag) {
            flag = parentWidth;
        }
    }, 10);
};