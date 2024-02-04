// ==UserScript==
// @name         Project JavaScript by MasAS
// @namespace    http://tampermonkey.net/
// @version      2024-02-04
// @description  try to take over the world!
// @author       You
// @match        https://docs.google.com/forms/d/e/*/viewform
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var startElement = document.createElement("div");
    startElement.id = "overlay";
    startElement.style.position = "fixed";
    startElement.style.top = "0";
    startElement.style.left = "0";
    startElement.style.width = "100%";
    startElement.style.height = "100%";
    startElement.style.backgroundColor = "rgb(255,255,255)";
    startElement.style.zIndex = "9999";
    startElement.style.display = "flex";
    startElement.style.alignItems = "center";
    startElement.style.justifyContent = "center";

    var startButton = document.createElement("button");
    startButton.type = "submit";
    startButton.innerText = "MULAI";
    startButton.classList.add("button"); // Menambahkan kelas "button"
    startButton.style.display = "inline-block"; // Menyesuaikan agar sesuai dengan style CSS
    startButton.style.margin = "20px auto";
    startButton.style.padding = "15px 25px";
    startButton.style.fontSize = "24px";
    startButton.style.cursor = "pointer";
    startButton.style.textAlign = "center";
    startButton.style.textDecoration = "none";
    startButton.style.outline = "none";
    startButton.style.color = "#fff";
    startButton.style.backgroundColor = "#04AA6D";
    startButton.style.border = "none";
    startButton.style.borderRadius = "15px";
    startButton.style.boxShadow = "0 9px #999";

// Menambahkan efek hover
    startButton.addEventListener("mouseover", function() {
        startButton.style.backgroundColor = "#3e8e41";
    });

// Menambahkan efek active
    startButton.addEventListener("mousedown", function() {
        startButton.style.backgroundColor = "#3e8e41";
        startButton.style.boxShadow = "0 5px #666";
        startButton.style.transform = "translateY(4px)";
    });

// Mengembalikan ke tampilan normal setelah dilepas
    startButton.addEventListener("mouseup", function() {
        startButton.style.backgroundColor = "#04AA6D";
        startButton.style.boxShadow = "0 9px #999";
        startButton.style.transform = "none";
    });
    startButton.onclick = function() {
        document.body.removeChild(startElement);

        var countdownElement = document.createElement("div");
        countdownElement.id = "countdownElement";
        countdownElement.style.position = "fixed";
        countdownElement.style.top = "10px";
        countdownElement.style.right = "10px";
        countdownElement.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        countdownElement.style.padding = "10px";
        countdownElement.style.border = "1px solid #ccc";
        countdownElement.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)";
        countdownElement.style.zIndex = "9999";

        var countdownElementContent = document.createElement("p");
        countdownElementContent.innerText = "Informasi Waktu";
        countdownElement.appendChild(countdownElementContent);

        var finishButton = document.createElement("button");
        finishButton.type = "button";
        finishButton.innerText = "Selesai";
        finishButton.classList.add("button"); // Menambahkan kelas "button"
        finishButton.style.display = "block"; // Menyesuaikan agar sesuai dengan style CSS
        finishButton.style.margin = "15px auto";
        finishButton.style.padding = "15px 25px";
        finishButton.style.fontSize = "18";
        finishButton.style.cursor = "pointer";
        finishButton.style.textAlign = "center";
        finishButton.style.textDecoration = "none";
        finishButton.style.outline = "none";
        finishButton.style.color = "#fff";
        finishButton.style.backgroundColor = "#ff0000";
        finishButton.style.border = "none";
        finishButton.style.borderRadius = "10px";
        finishButton.style.boxShadow = "0 6px #999";
        finishButton.onclick = function() {
            waktuSisa = 1;
        }


        countdownElement.appendChild(finishButton);

        document.body.appendChild(countdownElement);

        var waktuSisa = 30;
        var closeTab = false;

        function updateCountdown() {
            countdownElement.innerText = "Waktu Tersisa: " + waktuSisa + " detik\n";
            countdownElement.appendChild(finishButton);
            waktuSisa--;

            if (waktuSisa < 0) {
                clearInterval(countdownInterval);
                countdownElement.innerText = "Waktu habis!";

                var overlayElement = document.createElement("div");
                overlayElement.id = "overlay";
                overlayElement.style.position = "fixed";
                overlayElement.style.top = "0";
                overlayElement.style.left = "0";
                overlayElement.style.width = "100%";
                overlayElement.style.height = "100%";
                overlayElement.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                overlayElement.style.zIndex = "9999";
                overlayElement.style.display = "flex";
                overlayElement.style.alignItems = "center";
                overlayElement.style.justifyContent = "center";

                var passwordForm = document.createElement("form");
                passwordForm.addEventListener("submit", function (event) {
                    event.preventDefault();
                    var passwordInput = document.getElementById("passwordInput");
                    var enteredPassword = passwordInput.value;

                    if (enteredPassword === "asrori") {
                        document.body.removeChild(overlayElement);
                        location.reload();
                    } else {
                        alert("Kata sandi salah!");
                    }
                });

                var textLabel = document.createElement("label");
                textLabel.innerText = "WAKTU ANDA SUDAH HABIS!!\n\n";
                textLabel.style.fontSize = "35px";
                textLabel.style.fontWeight = "bold";
                textLabel.style.textAlign = "center";
                textLabel.style.display = "block";
                passwordForm.appendChild(textLabel);

                var passwordInput = document.createElement("input");
                passwordInput.type = "password";
                passwordInput.id = "passwordInput";
                passwordInput.placeholder = "Masukkan kata sandi";
                passwordInput.style.textAlign = "center";
                passwordInput.style.display = "block";
                passwordInput.style.margin = "0 auto"; // Menambah properti ini untuk center
                passwordForm.appendChild(passwordInput);

                var enter = document.createElement("label");
                enter.innerText = "\n";
                passwordForm.appendChild(enter);

                var submitButton = document.createElement("button");
                submitButton.type = "submit";
                submitButton.innerText = "Buka Kunci";
                submitButton.classList.add("button"); // Menambahkan kelas "button"
                submitButton.style.display = "block"; // Menyesuaikan agar sesuai dengan style CSS
                submitButton.style.margin = "20px auto";
                submitButton.style.padding = "15px 25px";
                submitButton.style.fontSize = "24px";
                submitButton.style.cursor = "pointer";
                submitButton.style.textAlign = "center";
                submitButton.style.textDecoration = "none";
                submitButton.style.outline = "none";
                submitButton.style.color = "#fff";
                submitButton.style.backgroundColor = "#04AA6D";
                submitButton.style.border = "none";
                submitButton.style.borderRadius = "15px";
                submitButton.style.boxShadow = "0 9px #999";

// Menambahkan efek hover
                submitButton.addEventListener("mouseover", function() {
                    submitButton.style.backgroundColor = "#3e8e41";
                });

// Menambahkan efek active
                submitButton.addEventListener("mousedown", function() {
                    submitButton.style.backgroundColor = "#3e8e41";
                    submitButton.style.boxShadow = "0 5px #666";
                    submitButton.style.transform = "translateY(4px)";
                });

// Mengembalikan ke tampilan normal setelah dilepas
                submitButton.addEventListener("mouseup", function() {
                    submitButton.style.backgroundColor = "#04AA6D";
                    submitButton.style.boxShadow = "0 9px #999";
                    submitButton.style.transform = "none";
                });
                passwordForm.appendChild(submitButton);

                var textCopyright = document.createElement("label");
                textCopyright.innerText = "\n\n\nPowered By : ";
                textCopyright.style.fontWeight = "bold";
                textCopyright.style.textAlign = "center";
                textCopyright.style.display = "block";
                passwordForm.appendChild(textCopyright);

                var enter = document.createElement("label");
                enter.innerText = "\n";
                passwordForm.appendChild(enter);

                var copyright = document.createElement("a");
                copyright.textContent = "MasAS";
                copyright.href = "https://github.com/masas112";
                copyright.style.fontWeight = "bold";
                copyright.style.textAlign = "center";
                copyright.style.display = "block";
                passwordForm.appendChild(copyright);

                overlayElement.appendChild(passwordForm);
                document.body.appendChild(overlayElement);
            }
        }

        var countdownInterval = setInterval(updateCountdown, 1000);
        window.onload = updateCountdown;

    }
    startElement.appendChild(startButton);
    document.body.appendChild(startElement);


})();
