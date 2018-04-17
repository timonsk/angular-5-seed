import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';
import * as moment from 'moment';
import { Logger } from '../logger';

@Injectable()
export class SessionSettingsService {

    private oneDay = 24;
    private key = 'token';
    private tokenNameConst = 'token';
    private dataNameConst = 'data';
    private token: string;
    private data: any;

    constructor(
        private logger: Logger
    ) {
    }

    public createNewSession(data: any) {
        if (data) {
            const token = moment().toString();
            const encryptedToken = CryptoJS.DES.encrypt((token), this.key);
            localStorage.setItem(this.tokenNameConst, encryptedToken.toString());
            const encryptedData = CryptoJS.DES.encrypt(JSON.stringify(data), encryptedToken.toString());
            localStorage.setItem(this.dataNameConst, encryptedData.toString());
        }
    }

    public readUserSession(): any {
        const token = this.getToken();
        this.logger.debug('token: ', token);
        if (!token) {
            return null;
        }
        const data = CryptoJS.DES.decrypt(
            localStorage.getItem(this.dataNameConst),
            localStorage.getItem(this.tokenNameConst)).toString(CryptoJS.enc.Utf8);
        if (!data) {
            return null;
        }
        return JSON.parse(data);
    }

    public removeSession() {
        localStorage.removeItem(this.tokenNameConst);
        localStorage.removeItem(this.dataNameConst);
    }

    public getToken(): string {
        const storageValue = localStorage.getItem(this.tokenNameConst);
        if (!storageValue) {
            return null;
        }
        const token = CryptoJS.DES.decrypt(storageValue, this.key);
        if (!token) {
            return null;
        }
        return token.toString(CryptoJS.enc.Utf8);
    }

    public getCurrentData() {
        if (this.data) {
            return this.data;
        }
        this.data = this.readUserSession();
        return this.data;
    }

    public isTokenExpired(): boolean {
        const token = this.getToken();
        if (!token) {
            return false;
        }
        const lastLogin = this.getHours(token);
        if (lastLogin > this.oneDay) {
            this.removeSession();
            return false;
        }
        return true;
    }

    private getHours(lastLogin: string): number {
        const now = moment(new Date());
        const end = moment(lastLogin);
        const duration = moment.duration(now.diff(end));
        return duration.asHours();
    }
}
