function endFun(){
    setInterval(function() {
	    var circle = document.createElement('div');
	
	    circle.classList.add('circle');
	
	    var x = Math.random() * 100 + 1;
	    var y = Math.random() * 100 + 1;
	
	    var animationTime = Math.round(Math.random() * 10);
	    circle.style.setProperty('--grow-time', `${animationTime}s`);
	
	    // 设置左
	    circle.style.left = x + 'vw';
	    // 设置右
	    circle.style.top = y + 'vh';
	
	    // 设置颜色
	    circle.style.backgroundColor = randomColor();
	
	    circle.innerText = randomText();
	
	    // 生成
	    document.body.appendChild(circle);
	
	    // 清除
	    setTimeout(function() {
	        document.body.removeChild(circle);
	    }, animationTime + "000")
	
    }, 100);
	
	
	
    function randomColor() {
	    const colors = [
	        '#81ecec',
	        '#74b9ff',
	        '#a29bfe',
	        '#ffeaa7',
	        '#fab1a0',
	        '#ff7675',
	        '#fd79a8'
	    ];
	    return colors[Math.round(Math.random() * colors.length)];
    }
	
    function randomText() {
	    const texts = [
	        '生肉快乐',
	        '马上有钱',
	        '挣他一个亿',
	        '健康帅气', 
	        '心想事成',
	        '永远年轻',
	        '工作顺利',
	        '自然醒',
	        '饿了有饭吃',
	        '听到喜欢的歌',
	        '手机电量100%',
	        '脱发是什么',
	        '年年都有今日',
	        '熬夜没有黑圆圈',
	        '不长膘',
	        '天下美食唯我独尊',
	        '坚持所爱',
	        '屹立不倒',
	        '八块腹肌',
	        '保持个性'
	    ];
	    return texts[Math.round(Math.random() * (texts.length - 1))];
    }
}
