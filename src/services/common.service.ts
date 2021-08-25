import { Injectable } from '@nestjs/common';

import * as os from 'os';

@Injectable()
export class CommonService {
    constructor() {
        
    }

    getMacAddress() {
        let interfaceList = [];
        let interfaces = os.networkInterfaces();
        for(const k of Object.keys(interfaces)) {
            const networkInterface = interfaces[k];
            interfaceList.push(networkInterface);
        } 

        let mac = interfaceList[1][0].mac;

        return mac;
    }
}
