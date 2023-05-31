export function validateTextInput(currentText: string, min: number) {
  currentText = currentText.trim();
  if (!currentText || currentText === "" || currentText.length < min) {
    return false;
  }

  if (currentText && currentText.length >= min) {
    return true;
  }
}
