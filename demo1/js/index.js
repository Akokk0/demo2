function $(id) {
    return document.getElementById(id);
}

(function (){
    let img = $('image')
    let input = $('text')

    // 图片覆盖
    img.onmouseover = () => {
        document.body.style.backgroundColor = 'skyblue'
        input.value = '鼠标覆盖事件'
    }
    img.onmouseleave = () => {
        document.body.style.backgroundColor = 'pink'
        input.value = ''
    }

    // 图片点击
    img.addEventListener('click', () => {
        img.src = 'img/2.jpeg'
        input.value = '鼠标单击事件'
    })

    // 图片双击
    img.addEventListener('dblclick', () => {
        img.src = 'img/1.jpeg'
        input.value = '鼠标双击事件'
    })
})()
