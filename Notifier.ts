import { options } from "./types";

export interface Notifier {

    send(message: string): void;
}

export class DefaultNotifier implements Notifier {
    public send(message: string): void {
        console.log(`sending ${message} via default Notifier`)
    };
}

export abstract class BaseDecorator implements Notifier {
    public wrappee: Notifier;
    public abstract send(message: string): void;

    constructor(wrappee: Notifier) {
        this.wrappee = wrappee;
    }

}

export class FacebookNotifier extends BaseDecorator {
    public send(message: string): void {
        this.wrappee.send(message);
        console.log(`sending ${message} via Facebook`);
    }
}

export class SMSNotifier extends BaseDecorator {
    public send(message: string): void {
        this.wrappee.send(message);
        console.log(`sending ${message} via SMS`);

    }
}

export class SlackNotifier extends BaseDecorator {
    public send(message: string): void {
        this.wrappee.send(message);
        console.log(`sending ${message} via Slack`);
    }
}



export class NotifierFactory {
    public static getNorifier(userPref: options) {
        let notifierObject = new DefaultNotifier();

        if (userPref.includes('Facebook')) {
            notifierObject = new FacebookNotifier(notifierObject);
        }

        if (userPref.includes('SMS')) {
            notifierObject = new SMSNotifier(notifierObject);
        }

        if (userPref.includes('Slack')) {
            notifierObject = new SlackNotifier(notifierObject);
        }

        return notifierObject;
    }
}

//ignore this over engineered part
export class ClientCode {
    static notifier: Notifier;

    public static setNotifier(notifier: Notifier): void {
        this.notifier = notifier;
    }

    public static run(): void {
        this.notifier.send("Hello");
    }
}
