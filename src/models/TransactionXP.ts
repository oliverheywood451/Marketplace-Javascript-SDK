import { CardConnectAuthorizationResponse } from './CardConnectAuthorizationResponse';
import { RMADetails } from './RMADetails';

export interface TransactionXP {
    CardConnectResponse?: CardConnectAuthorizationResponse
    RMADetails?: RMADetails
}