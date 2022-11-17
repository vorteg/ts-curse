interface Service {
  Renew(): void;
  Login(): void;
  Cancel(): void;
}

class NewFlix implements Service {
  Renew(): void {
    console.log("Renewing NewFlix");
  }
  Login(): void {
    console.log("Loging to NewFlix");
  }
  Cancel(): void {
    console.log("Canceling NewFlix");
  }
}

class CamaronPrimer implements Service {
  Renew(): void {
    console.log("Renewing CamaronPrimer");
  }
  Login(): void {
    console.log("Loging to CamaronPrimer");
  }
  Cancel(): void {
    console.log("Canceling CamaronPrimer");
  }
}

class OBH implements Service {
  Renew(): void {
    console.log("Renewing OBH Premium");
  }
  Login(): void {
    console.log("Loging to OBH Premium");
  }
  Cancel(): void {
    console.log("Canceling OBH Premium");
  }
}

enum ServiceType {
  Renew,
  Login,
  Cancel,
}

const button = document.getElementById("btn")!;
const service = <HTMLSelectElement>document.getElementById("service")!;
const task = <HTMLSelectElement>document.getElementById("task")!;
let selectedService: Service;
let currentOperation: ServiceType;

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
