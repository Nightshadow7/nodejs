export function generateBut() {
    let icon = Math.floor(Math.random() * 8);
    let but;
  
    switch (icon) {
      case 0:
        but = "bi bi-receipt-cutoff";
        break;
      case 1:
        but = "bi bi-receipt";
        break;
      case 2:
        but = "bi bi-align-bottom";
        break;
      case 3:
        but = "bi bi-amd";
        break;
      case 4:
        but = "bi bi-app-indicator";
        break;
      case 5:
        but = "bi bi-capsule";
        break;
      case 6:
        but = "bi bi-card-heading";
        break;
      case 7:
        but = "bi bi-card-image";
        break;
      default:
        but = "bi bi-receipt";
        break;
    }
  
    return but;
  }

export function generateDot(){
    let dot = Math.floor(Math.random() *2);
    let bot;

    switch (dot) {
        case 0:
            bot = "circulo";
            break;
        case 1:
            bot = "circulo2";
            break;
        default:
            bot = "circulo";
            break;
    }
    return bot;
};

export function generateButton() {
    let color = Math.floor(Math.random() * 6);
    let color2 = Math.floor(Math.random() * 6);
  
    while (color === color2){
        color = Math.floor(Math.random() * 6);
        color2 = Math.floor(Math.random() * 6);
    };
  
    let bat, bet;
  
    switch (color) {
      case 0:
        bat = "btn btn-outline-primary";
        break;
      case 1:
        bat = "btn btn-outline-secondary";
        break;
      case 2:
        bat = "btn btn-outline-success";
        break;
      case 3:
        bat = "btn btn-outline-danger";
        break;
      case 4:
        bat = "btn btn-outline-warning";
        break;
      case 5:
        bat = "btn btn-outline-info";
        break;
      default:
        bat = "btn btn-outline-primary";
        break;
    };
  
    switch (color2) {
      case 0:
        bet = "btn btn-outline-primary";
        break;
      case 1:
        bet = "btn btn-outline-secondary";
        break;
      case 2:
        bet = "btn btn-outline-success";
        break;
      case 3:
        bet = "btn btn-outline-danger";
        break;
      case 4:
        bet = "btn btn-outline-warning";
        break;
      case 5:
        bet = "btn btn-outline-info";
        break;
      default:
        bet = "btn btn-outline-danger";
        break;
    };
  
    let button = [bat, bet];
    return button;
};
  