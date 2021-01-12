
window.addEventListener('load', function () {
    const block = document.querySelector('.block');
    const text = document.querySelector('.text');
    const step = 50;

    document.addEventListener('keydown', onKeysMove);

    function textBlock() {
        text.classList.add('show');

        setTimeout(function () {
            text.classList.remove('show');
        }, 2000);
    }

    function onKeysMove(event) {
        let offsetLeft = block.offsetLeft;
        let offsetTop = block.offsetTop;
        // right
        if (event.keyCode == 39) {
            block.style.left = offsetLeft + step + 'px';
            if (offsetLeft + block.offsetWidth >= window.innerWidth) {
                block.style.left = window.innerWidth - block.offsetWidth - step * 2 + 'px';
                textBlock()
            }
        }
        //left
        else if (event.keyCode == 37) {
            block.style.left = offsetLeft - step + 'px';
            if (offsetLeft <= 0) {
                block.style.left = step * 2 + 'px';
                textBlock()
            }
        }
        //bottom
        else if (event.keyCode == 40) {
            block.style.top = offsetTop + step + 'px';
            if (offsetTop + block.offsetHeight >= window.innerHeight) {
                block.style.top = window.innerHeight - block.offsetHeight - step * 2 + 'px';
                textBlock()
            }
        }
        //top
        else if (event.keyCode == 38) {
            block.style.top = offsetTop - step + 'px';
            if (offsetTop <= 0) {
                block.style.top = step * 2 + 'px';
                textBlock()
            }
        }
    }
});

