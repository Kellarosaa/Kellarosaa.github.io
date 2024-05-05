document.getElementById("binary-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const binaryInput = document.getElementById("binary-input").value;
  const decimalOutput = binaryToDecimal(binaryInput);
  document.getElementById("result").textContent = `Decimal: ${decimalOutput}`;
});

function binaryToDecimal(binary) {
  const binaryString = binary.toString();
  const length = binaryString.length;
  let decimal = 0;

  for (let i = 0; i < length; i++) {
    const digit = parseInt(binaryString[length - 1 - i]);
    decimal += digit * Math.pow(2, i);
  }

  return decimal;
}
