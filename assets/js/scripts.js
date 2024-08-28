// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const encryptButton = document.getElementById("encrypt-btn");
    const decryptButton = document.getElementById("decrypt-btn");
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");

    // Función para encriptar el texto
    function encryptText(text) {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    // Función para desencriptar el texto
    function decryptText(text) {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    // Función para mostrar texto con animación de escritura
    function typeWriter(text, element) {
        element.textContent = "";
        let i = 0;
        const speed = 50; // Velocidad de escritura
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Evento para encriptar
    encryptButton.addEventListener("click", function() {
        const text = inputText.value.toLowerCase();
        if (text) {
            const encryptedText = encryptText(text);
            typeWriter(encryptedText, outputText);
        } else {
            typeWriter("No se encontró ningún mensaje.", outputText);
        }
    });

    // Evento para desencriptar
    decryptButton.addEventListener("click", function() {
        const text = inputText.value.toLowerCase();
        if (text) {
            const decryptedText = decryptText(text);
            typeWriter(decryptedText, outputText);
        } else {
            typeWriter("No se encontró ningún mensaje.", outputText);
        }
    });
});
