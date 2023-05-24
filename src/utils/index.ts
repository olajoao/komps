export function validateTextInput(currentText: string, min: number) {
  if (!currentText || currentText === "" || currentText.length < min) {
    return false;
  }

  if (currentText && currentText.length >= min) {
    return true;
  }
}
