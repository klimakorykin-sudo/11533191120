document.addEventListener('DOMContentLoaded', function() {
    const cube = document.getElementById('cube');

    if (cube) {
        let isHovering = false;
        let autoRotate = true;

        function startAutoRotate() {
            autoRotate = true;
            cube.style.animation = 'spin 24s infinite linear';
            cube.style.transform = '';
        }

        function stopAutoRotate() {
            autoRotate = false;
            cube.style.animation = 'none';
        }

        cube.addEventListener('mouseenter', function() {
            isHovering = true;
            stopAutoRotate();
        });

        cube.addEventListener('mouseleave', function() {
            isHovering = false;
            startAutoRotate();
        });

        document.addEventListener('mousemove', function(e) {
            if (!isHovering) return;
            const rect = cube.getBoundingClientRect();
            const cubeX = rect.left + rect.width / 2;
            const cubeY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - cubeX) / rect.width;
            const deltaY = (e.clientY - cubeY) / rect.height;
            const rotateY = deltaX * 40;
            const rotateX = -deltaY * 40;
            cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        startAutoRotate();
    }

    // ===== ШЕСТЕРЁНКА ПОДДЕРЖКИ =====
    const gear = document.getElementById('supportGear');
    const popup = document.getElementById('supportPopup');

    if (gear && popup) {
        gear.addEventListener('click', function(e) {
            e.stopPropagation();
            popup.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!gear.contains(e.target)) {
                popup.classList.remove('active');
            }
        });
    }
});