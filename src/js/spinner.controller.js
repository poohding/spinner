import SpinnerModel from './spinner.model';
import SpinnerView from './spinner.view';

export default class SpinnerController {
    constructor() {
        this.addHandler();
    };

    init() {
        this.spinnerModel = new SpinnerModel();
        this.spinnerView = new SpinnerView();

        this.spinnerView.render(this.spinnerModel.getData());
    };

    addHandler() {
        document.querySelector('.spinner__increase').addEventListener('click', function(e) {
            e.preventDefault();

            this.onClickIncrease();
        }.bind(this));

        document.querySelector('.spinner__decrease').addEventListener('click', function(e) {
            e.preventDefault();

            this.onClickDecrease();
        }.bind(this));

        document.getElementById('frmSpinner').addEventListener('submit', function(e) {
            e.preventDefault();

            this.onSubmit();
        }.bind(this));

        document.querySelector('.function__getvalue').addEventListener('click', function(e) {
            e.preventDefault();

            alert(e.target.innerHTML);
        }.bind(this));

        document.querySelector('.function__setvalue').addEventListener('click', function(e) {
            e.preventDefault();

            alert(e.target.innerHTML);
        }.bind(this));
    };

    onClickIncrease() {
        this.spinnerModel.increase();
        this.spinnerView.render(this.spinnerModel.getData());
    };

    onClickDecrease() {
        this.spinnerModel.decrease();
        this.spinnerView.render(this.spinnerModel.getData());
    };

    onSubmit() {
        this.spinnerView.showData(this.spinnerModel.getData());
    }
}
