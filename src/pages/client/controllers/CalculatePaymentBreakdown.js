export default function calculatePaymentBreakdown(petList, service) {

  let  paymentBreakdown = [];

  if (petList) {
    petList.forEach((pet) => {
      if (service === "Home Care") {
        if (pet.size === "small") {
          paymentBreakdown.push({
            petName: pet.name,
            size: pet.size,
            rate: 475
          });
        } else if (pet.size === "medium") {
          paymentBreakdown.push({
            petName: pet.name,
            size: pet.size,
            rate: 525
          });
        } else if (pet.size === "large") {
          paymentBreakdown.push({
            petName: pet.name,
            size: pet.size,
            rate: 575
          });
        }
      } else if (service === "Day Care") {
          if (pet.size === "small" || pet.size === "medium") {
            paymentBreakdown.push({
              petName: pet.name,
              size: pet.size,
              rate: 250
            });
          } else if (pet.size === "large") {
            paymentBreakdown.push({
              petName: pet.name,
              size: pet.size,
              rate: 275
            });
          }
      } else if (service === "Errands Care") {
        if (pet.size === "small" || pet.size === "medium") {
          paymentBreakdown.push({
            petName: pet.name,
            size: pet.size,
            rate: 175
          });
        } else if (pet.size === "large") {
          paymentBreakdown.push({
            petName: pet.name,
            size: pet.size,
            rate: 200
          });
        }
      }
    });
  }


  return paymentBreakdown;
  
};