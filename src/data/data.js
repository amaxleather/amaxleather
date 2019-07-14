import about from "./about.js";
import cleaning from "./cleaning.js";
import craftsmanship from "./craftsmanship.js";
import furniturecare from "./furniturecare.js";
import leathercare from "./leathercare.js";
import madetoorder from "./madetoorder.js";
import retailer from "./retailer.js";
import terms from "./terms.js";

export default (s) => {
  let f;
  switch(s) {
    case "about":
      f = about;
      break;
    case "cleaning":
      f = cleaning;
      break;
    case "craftsmanship":
      f = craftsmanship;
      break;
    case "furniturecare":
      f = furniturecare;
      break;
    case "leathercare":
      f = leathercare;
      break;
    case "madetoorder":
      f = madetoorder;
      break;
    case "retailer":
      f = retailer;
      break;
    case "terms":
      f = terms;
      break;
    default:
      // eslint-disable-next-line
      throw ("Unknown filename in data.json: " + s);
  }
  return f();
}
