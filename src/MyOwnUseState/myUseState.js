export default function myUseState(val) {
  let defaultValue = {
    value: val,
  };

  function setValue(val) {
    if (typeof val === "function") {
      defaultValue.value = val(defaultValue.value);
    } else {
      defaultValue.value = val;
    }
  }

  return [defaultValue, setValue];
}
