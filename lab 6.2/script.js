window.addEventListener("load", function () {
    const canvas = document.getElementById("introCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    class Cloud {
        constructor(x, y, dx, dy, color, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.color = color;
            this.radius = radius;
        }

        drawCloud(ctx) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 0.8, 0, Math.PI * 2);
            ctx.arc(this.x + this.radius * 7 / 6, this.y - this.radius * 2 / 3, this.radius, 0, Math.PI * 2);
            ctx.arc(this.x + this.radius * 7 / 3, this.y, this.radius * 0.8, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }

        updateCloudPosition(canvasWidth, canvasHeight) {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x - this.radius * 2 > canvasWidth) {
                this.x = -this.radius * 4;
            }

            if (this.y - this.radius * 2 > canvasHeight) {
                this.y = -this.radius * 2;
            }

            if (this.y + this.radius * 2 < 0) {
                this.y = canvasHeight + this.radius * 2;
            }
        }

    }

    let clouds = [];
    for (let i = 0; i < 15; i++) {
        let x = Math.random() * canvas.width - 100;
        let y = Math.random() * canvas.height;
        let dx = Math.random() * 3 + 1;
        let dy = Math.random() * -0.5;
        let radius = Math.random() * 30 + 20;

        let baseGray = 196;

        let gray = Math.floor(baseGray + (Math.random() * 30 - 15));

        let alpha = Math.random() * 0.15 + 0.85;
        let color = `rgba(${gray}, ${gray}, ${gray}, ${alpha})`;

        clouds.push(new Cloud(x, y, dx, dy, color, radius));
    }


    let animationFrame = 0;
    let currentFontSize = 100;

    function drawText() {
        let targetFontSize = 100 + Math.sin(animationFrame * 0.01) * 5;

        currentFontSize += (targetFontSize - currentFontSize) * 0.1;

        let color = "#002147";

        ctx.font = `600 ${currentFontSize}px Verdana`;
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.fillText("Dreamweaver", canvas.width / 2, canvas.height / 2 - 100);

        animationFrame++;
    }




    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < clouds.length; i++) {
            clouds[i].updateCloudPosition(canvas.width, canvas.height);
            clouds[i].drawCloud(ctx);
        }
        drawText();
    }

    setInterval(animate, 16);
});