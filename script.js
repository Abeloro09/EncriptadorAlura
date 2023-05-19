
        function process() {
            var action = document.querySelector('input[name="action"]:checked').value;
            var inputText = document.getElementById("inputText").value;
            var outputText = "";

            if (action === "encrypt") {
                outputText = encrypt(inputText);
            } else {
                outputText = decrypt(inputText);
            }

            document.getElementById("outputText").textContent = outputText;
        }

        function encrypt(text) {
            var encryptedText = "";

            for (var i = 0; i < text.length; i++) {
                var char = text.charAt(i);

                switch (char) {
                    case "e":
                        encryptedText += "enter";
                        break;
                    case "i":
                        encryptedText += "imes";
                        break;
                    case "a":
                        encryptedText += "ai";
                        break;
                    case "o":
                        encryptedText += "ober";
                        break;
                    case "u":
                        encryptedText += "ufat";
                        break;
                    default:
                        encryptedText += char;
                }
            }

            return encryptedText;
        }

        function decrypt(text) {
            var decryptedText = "";
            var i = 0;

            while (i < text.length) {
                var char = text.charAt(i);

                if (char === "e" && text.substr(i, 5) === "enter") {
                    decryptedText += "e";
                    i += 4;
                } else if (char === "i" && text.substr(i, 4) === "imes") {
                    decryptedText += "i";
                    i += 3;
                } else if (char === "a" && text.substr(i, 2) === "ai") {
                    decryptedText += "a";
                    i += 1;
                } else if (char === "o" && text.substr(i, 4) === "ober") {
                    decryptedText += "o";
                    i += 3;
                } else if (char === "u" && text.substr(i, 4) === "ufat") {
                    decryptedText += "u";
                    i += 3;
                } else {
                    decryptedText += char;
                }

                i++;
            }

            return decryptedText;
        }

        function copyToClipboard() {
            var outputText = document.getElementById("outputText").textContent;

            var tempInput = document.createElement("textarea");
            tempInput.value = outputText;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        }
