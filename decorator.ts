import { NotifierFactory } from "./Notifier";
import { options } from "./types";


/**
 * try different values for user preferences from the options type
 */
const userPref: options = ['Facebook', "Slack"]

let notifierObject = NotifierFactory.getNorifier(userPref);

notifierObject.send('hello');

// you can uncomment the code bellow and import ClientCode from ./Notifier
// ClientCode.setNotifier(notifierObject);

// ClientCode.run();

