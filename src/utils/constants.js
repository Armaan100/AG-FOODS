//Such constants are named in this way: 

export const CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";

//There are two types of EXPORT and IMPORT:
//One is the default export and default import
//and the other one is the named export and named import

/*
This is not possible
export default CDN_URL;
export default LOGO_URL;

Therefore we will have to use NAMED Export --> used when exporting multiple things from the same file
And is done as shown above...👆
And the way to import them is: ⬇️
import {CDN_URL} from "../utils/constants";  
[imported in RestaurantCard]
*/

export const MENU_API="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3573719&lng=76.3635176&restaurantId=";