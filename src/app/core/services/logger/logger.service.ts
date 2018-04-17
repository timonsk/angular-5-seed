import { Injectable } from '@angular/core';
import { Log, Level } from 'ng2-logger';

@Injectable()
export class Logger {
    private logger: any;

    constructor() {
        this.logger = Log.create('pm');
    }

    error(message: string, data?: any) {
        this.logger.color = 'red';
        if (!data) {
            this.logger.er(message);
            return;
        }

        this.logger.er(message, data);
    }

    warn(message: string, data?: any) {
        this.logger.color = 'orange';
        if (!data) {
            this.logger.w(message);
            return;
        }

        this.logger.w(message, data);
    }

    info(message: string, data?: any) {
        this.logger.color = 'blue';
        if (!data) {
            this.logger.i(message);
            return;
        }

        this.logger.i(message, data);
    }

    debug(message?: string, data?: any) {
        this.logger.color = 'green';
        if (message) {
            this.logger.d(message, data);
        } else if (data !== null || data !== undefined) {
            this.logger.d(message, data);
        }
    }
}
