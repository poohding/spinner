export default class SpinnerView {
  constructor() {

  };

  render(value) {
    document.querySelector('.spinner__result').value = value;
  };

  showData(value) {
    alert(value);
  };
};
