"use strict";
class NewFlix {
    Renew() {
        console.log("Renewing NewFlix");
    }
    Login() {
        console.log("Loging to NewFlix");
    }
    Cancel() {
        console.log("Canceling NewFlix");
    }
}
class CamaronPrimer {
    Renew() {
        console.log("Renewing CamaronPrimer");
    }
    Login() {
        console.log("Loging to CamaronPrimer");
    }
    Cancel() {
        console.log("Canceling CamaronPrimer");
    }
}
class OBH {
    Renew() {
        console.log("Renewing OBH Premium");
    }
    Login() {
        console.log("Loging to OBH Premium");
    }
    Cancel() {
        console.log("Canceling OBH Premium");
    }
}
var ServiceType;
(function (ServiceType) {
    ServiceType[ServiceType["Renew"] = 0] = "Renew";
    ServiceType[ServiceType["Login"] = 1] = "Login";
    ServiceType[ServiceType["Cancel"] = 2] = "Cancel";
})(ServiceType || (ServiceType = {}));
const button = document.getElementById("btn");
const service = document.getElementById("service");
const task = document.getElementById("task");
let selectedService;
let currentOperation;
service.addEventListener("change", () => {
    //console.log(service.value);
    switch (service.value) {
        case "1":
            selectedService = new NewFlix();
            break;
        case "2":
            selectedService = new CamaronPrimer();
            break;
        case "3":
            selectedService = new OBH();
            break;
    }
});
task.addEventListener("change", () => {
    //console.log(service.value);
    switch (task.value) {
        case "1":
            currentOperation = ServiceType.Renew;
            break;
        case "2":
            currentOperation = ServiceType.Login;
            break;
        case "3":
            currentOperation = ServiceType.Cancel;
            break;
    }
});
button.addEventListener("click", () => {
    switch (currentOperation) {
        case ServiceType.Renew:
            selectedService.Renew();
            break;
        case ServiceType.Login:
            selectedService.Login();
            break;
        case ServiceType.Cancel:
            selectedService.Cancel();
            break;
            break;
        default:
            break;
    }
});
