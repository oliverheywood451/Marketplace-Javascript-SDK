import OrchestrationProducts from './OrchestrationProducts';
import OrchestrationUsers from './OrchestrationUsers';
import OrchestrationLogs from './OrchestrationLogs';
import Buyers from './Buyers';
import Shipments from './Shipments';
import Suppliers from './Suppliers';
import Products from './Products';
import ContentManagements from './ContentManagements';
import SupplierCategoryConfigs from './SupplierCategoryConfigs';
import BuyerLocations from './BuyerLocations';
import Avalaras from './Avalaras';
import MePayments from './MePayments';
import MeCreditCardAuthorizations from './MeCreditCardAuthorizations';
import CreditCardAuthorizations from './CreditCardAuthorizations';
import ValidatedAddresses from './ValidatedAddresses';
import Auth from './Auth';
import Tokens from './Tokens';

export { MarketplaceSDK }

const MarketplaceSDK: MarketplaceSDK = {
    OrchestrationProducts : new OrchestrationProducts(),
    OrchestrationUsers : new OrchestrationUsers(),
    OrchestrationLogs : new OrchestrationLogs(),
    Buyers : new Buyers(),
    Shipments : new Shipments(),
    Suppliers : new Suppliers(),
    Products : new Products(),
    ContentManagements : new ContentManagements(),
    SupplierCategoryConfigs : new SupplierCategoryConfigs(),
    BuyerLocations : new BuyerLocations(),
    Avalaras : new Avalaras(),
    MePayments : new MePayments(),
    MeCreditCardAuthorizations : new MeCreditCardAuthorizations(),
    CreditCardAuthorizations : new CreditCardAuthorizations(),
    ValidatedAddresses : new ValidatedAddresses(),
    Auth: new Auth(),
    Tokens: new Tokens()
}

interface MarketplaceSDK {
    OrchestrationProducts : OrchestrationProducts,
    OrchestrationUsers : OrchestrationUsers,
    OrchestrationLogs : OrchestrationLogs,
    Buyers : Buyers,
    Shipments : Shipments,
    Suppliers : Suppliers,
    Products : Products,
    ContentManagements : ContentManagements,
    SupplierCategoryConfigs : SupplierCategoryConfigs,
    BuyerLocations : BuyerLocations,
    Avalaras : Avalaras,
    MePayments : MePayments,
    MeCreditCardAuthorizations : MeCreditCardAuthorizations,
    CreditCardAuthorizations : CreditCardAuthorizations,
    ValidatedAddresses : ValidatedAddresses,
    Auth: Auth,
    Tokens: Tokens
}
