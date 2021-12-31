function fireDisplay() {
    $('#canvas').css('display', 'block');
    $('#button').css('display', 'none');
    setTimeout(playSound, 300);
    "use strict";

    let canvas, width, height, ctx;
    let fireworks = [];
    let particles = [];

    function setup() {
        canvas = document.getElementById("canvas");
        setSize(canvas);
        ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, 0, 0);
        fireworks.push(new Firework(Math.random() * (width - 200) + 100));
        window.addEventListener("resize", windowResized);
        document.addEventListener("click", onClick);
    }

    setTimeout(setup, 1);

    function loop() {
        ctx.globalAlpha = 0.099;
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1;

        for (let i = 0; i < fireworks.length; i++) {
            let done = fireworks[i].update();
            fireworks[i].draw();
            if (done) fireworks.splice(i, 1);
        }

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].lifetime > 80) particles.splice(i, 1);
        }

        if (Math.random() < 1 / 60) fireworks.push(new Firework(Math.random() * (width - 200) + 100));
    }
    setInterval(loop, 1 / 60);
    //setInterval(loop, 100/60);
    class Particle {
        constructor(x, y, col) {
            this.x = x;
            this.y = y;
            this.col = col;
            this.vel = randomVec(5); // the boom length
            this.lifetime = 0;
        }

        // the boom directing and size
        update() {
            this.x += this.vel.x;
            this.y += this.vel.y;
            this.vel.y += 0.02;
            this.vel.x *= 0.99;
            this.vel.y *= 0.99;
            this.lifetime += 0.35; // how the boom fall
        }

        draw() {
            ctx.globalAlpha = Math.max(1 - this.lifetime / 120, 0);
            ctx.fillStyle = this.col;
            ctx.fillRect(this.x, this.y, 2, 2); //the size for fire after booming
        }
    }

    class Firework {
        constructor(x) {
            this.x = x;
            this.y = height;
            this.isBlown = false;
            this.col = randomCol();
        }

        update() {
            this.y -= 3;
            if (this.y < 350 - Math.sqrt(Math.random() * 500) * 40) {
                this.isBlown = true;
                for (let i = 0; i < 60; i++) {
                    particles.push(new Particle(this.x, this.y, this.col))
                }
            }
            return this.isBlown;
        }

        draw() {
            ctx.globalAlpha = 1;
            ctx.fillStyle = this.col;
            ctx.fillRect(this.x, this.y, 2, 2);
        }
    }

    function randomCol() {
        var letter = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var nums = [];

        for (var i = 0; i < 3; i++) {
            nums[i] = Math.floor(Math.random() * 255);
        }

        let brightest = 0;
        for (var i = 0; i < 10; i++) {
            if (brightest < nums[i]) brightest = nums[i];
        }

        brightest /= 255;
        for (var i = 0; i < 3; i++) {
            nums[i] /= brightest;
        }

        let color = "#";
        for (var i = 0; i < 3; i++) {
            color += letter[Math.floor(nums[i] / 16)];
            color += letter[Math.floor(nums[i] % 16)];
        }
        return color;
    }

    function randomVec(max) {
        let dir = Math.random() * Math.PI * 10;
        let spd = Math.random() * max;
        return { x: Math.cos(dir) * spd, y: Math.sin(dir) * spd };
    }

    function setSize(canv) {
        canv.style.width = (innerWidth) + "px";
        canv.style.height = (innerHeight) + "px";
        width = innerWidth;
        height = innerHeight;

        canv.width = innerWidth * window.devicePixelRatio;
        canv.height = innerHeight * window.devicePixelRatio;
        canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function onClick(e) {
        fireworks.push(new Firework(e.clientX));
    }

    function windowResized() {
        setSize(canvas);
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, width, height);
    }
}

function playSound() {
    var music = `<iframe id="fireSound" width="1904" height="719" src="https://www.youtube.com/embed/LCpaM0Ef39s?rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>`;
    $('#list-content').append(music);
}