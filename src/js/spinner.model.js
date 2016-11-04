export default class SpinnerModel {
    constructor(value) {
        value = value || 100;
        this.data = value;
    };

    increase(value) {
        value = value || 1;
        this.data += value;
    };

    decrease(value) {
        value = value || 1;
        this.data -= value;
    };

    getData() {
        return this.data;
    };
}
