import OrchestrationProducts from './OrchestrationProducts';
import OrchestrationUsers from './OrchestrationUsers';
import OrchestrationLogs from './OrchestrationLogs';
import Buyers from './Buyers';
import Orders from './Orders';
import Shipments from './Shipments';
import Suppliers from './Suppliers';
import Products from './Products';
import SupplierCategoryConfigs from './SupplierCategoryConfigs';
import BuyerLocations from './BuyerLocations';
import Avalaras from './Avalaras';
import MePayments from './MePayments';
import MeCreditCardAuthorizations from './MeCreditCardAuthorizations';
import CreditCardAuthorizations from './CreditCardAuthorizations';
import ValidatedAddresses from './ValidatedAddresses';
import AssetContainers from './AssetContainers';
import Assets from './Assets';
import Auth from './Auth';
import Tokens from './Tokens';
import Upload from './Upload';

export { MarketplaceSDK }

const MarketplaceSDK: MarketplaceSDK = {
    OrchestrationProducts : new OrchestrationProducts(),
    OrchestrationUsers : new OrchestrationUsers(),
    OrchestrationLogs : new OrchestrationLogs(),
    Buyers : new Buyers(),
    Orders : new Orders(),
    Shipments : new Shipments(),
    Suppliers : new Suppliers(),
    Products : new Products(),
    SupplierCategoryConfigs : new SupplierCategoryConfigs(),
    BuyerLocations : new BuyerLocations(),
    Avalaras : new Avalaras(),
    MePayments : new MePayments(),
    MeCreditCardAuthorizations : new MeCreditCardAuthorizations(),
    CreditCardAuthorizations : new CreditCardAuthorizations(),
    ValidatedAddresses : new ValidatedAddresses(),
    AssetContainers : new AssetContainers(),
    Assets : new Assets(),
    Auth: new Auth(),
    Tokens: new Tokens(),
    Upload: new Upload()
}

interface MarketplaceSDK {
    OrchestrationProducts : OrchestrationProducts,
    OrchestrationUsers : OrchestrationUsers,
    OrchestrationLogs : OrchestrationLogs,
    Buyers : Buyers,
    Orders : Orders,
    Shipments : Shipments,
    Suppliers : Suppliers,
    Products : Products,
    SupplierCategoryConfigs : SupplierCategoryConfigs,
    BuyerLocations : BuyerLocations,
    Avalaras : Avalaras,
    MePayments : MePayments,
    MeCreditCardAuthorizations : MeCreditCardAuthorizations,
    CreditCardAuthorizations : CreditCardAuthorizations,
    ValidatedAddresses : ValidatedAddresses,
    AssetContainers : AssetContainers,
    Assets : Assets,
    Auth: Auth,
    Tokens: Tokens,
    Upload: Upload
}
